import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/components/ui/use-toast';
import { CartItem } from '@/context/CartContext';

interface OrderData {
  delivery_name: string;
  delivery_phone: string;
  delivery_address: string;
  payment_method: string;
}

export const useOrders = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const createOrder = async (orderData: OrderData, cartItems: CartItem[]) => {
    if (!user) {
      toast({
        title: "Błąd",
        description: "Musisz być zalogowany, aby złożyć zamówienie",
        variant: "destructive"
      });
      return { success: false };
    }

    setLoading(true);
    
    try {
      // Calculate totals
      const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      // Get user's order count to determine discount
      const { data: orderCountData, error: countError } = await supabase
        .rpc('get_user_order_count', { user_uuid: user.id });

      if (countError) throw countError;

      const currentOrderCount = orderCountData || 0;
      const isDiscountOrder = currentOrderCount > 0 && currentOrderCount % 6 === 0;
      const discountAmount = isDiscountOrder ? totalAmount * 0.5 : 0;
      const finalAmount = totalAmount - discountAmount;

      // Generate order number
      const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

      // Create order
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          order_number: orderNumber,
          total_amount: totalAmount,
          discount_amount: discountAmount,
          final_amount: finalAmount,
          delivery_name: orderData.delivery_name,
          delivery_phone: orderData.delivery_phone,
          delivery_address: orderData.delivery_address,
          payment_method: orderData.payment_method,
          order_count: currentOrderCount + 1,
          status: 'pending'
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = cartItems.map(item => ({
        order_id: order.id,
        product_name: item.name,
        product_price: item.price,
        quantity: item.quantity,
        total_price: item.price * item.quantity
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      toast({
        title: "Zamówienie złożone!",
        description: `Numer zamówienia: ${orderNumber}${isDiscountOrder ? ' (z 50% zniżką!)' : ''}`,
      });

      return { 
        success: true, 
        orderId: order.id, 
        orderNumber,
        isDiscountOrder,
        finalAmount 
      };

    } catch (error: any) {
      console.error('Error creating order:', error);
      toast({
        title: "Błąd",
        description: "Nie udało się złożyć zamówienia. Spróbuj ponownie.",
        variant: "destructive"
      });
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return {
    createOrder,
    loading
  };
};