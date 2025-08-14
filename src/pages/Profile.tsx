import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { User, Package, Gift } from 'lucide-react';

interface Profile {
  first_name: string;
  last_name: string;
  phone: string;
}

interface Order {
  id: string;
  order_number: string;
  total_amount: number;
  discount_amount: number;
  final_amount: number;
  status: string;
  delivery_address: string;
  created_at: string;
  order_items: Array<{
    product_name: string;
    quantity: number;
    product_price: number;
  }>;
}

export const Profile = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile>({
    first_name: '',
    last_name: '',
    phone: ''
  });
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderCount, setOrderCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (user) {
      fetchProfile();
      fetchOrders();
      fetchOrderCount();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('first_name, last_name, phone')
        .eq('user_id', user?.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setProfile(data);
      }
    } catch (error: any) {
      toast({
        title: "Błąd",
        description: "Nie udało się pobrać danych profilu",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          id,
          order_number,
          total_amount,
          discount_amount,
          final_amount,
          status,
          delivery_address,
          created_at,
          order_items (
            product_name,
            quantity,
            product_price
          )
        `)
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error: any) {
      toast({
        title: "Błąd",
        description: "Nie udało się pobrać historii zamówień",
        variant: "destructive"
      });
    }
  };

  const fetchOrderCount = async () => {
    try {
      const { data, error } = await supabase
        .rpc('get_user_order_count', { user_uuid: user?.id });

      if (error) throw error;
      setOrderCount(data || 0);
    } catch (error: any) {
      console.error('Error fetching order count:', error);
    }
  };

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);

    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          user_id: user?.id,
          first_name: profile.first_name,
          last_name: profile.last_name,
          phone: profile.phone
        });

      if (error) throw error;

      toast({
        title: "Sukces",
        description: "Profil został zaktualizowany"
      });
    } catch (error: any) {
      toast({
        title: "Błąd",
        description: "Nie udało się zaktualizować profilu",
        variant: "destructive"
      });
    } finally {
      setUpdating(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
      pending: { label: "Oczekuje", variant: "secondary" },
      confirmed: { label: "Potwierdzone", variant: "default" },
      preparing: { label: "Przygotowywane", variant: "outline" },
      delivered: { label: "Dostarczone", variant: "default" },
      completed: { label: "Zakończone", variant: "default" },
      cancelled: { label: "Anulowane", variant: "destructive" }
    };

    const statusInfo = statusMap[status] || { label: status, variant: "outline" as const };
    return <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>;
  };

  const isNextOrderDiscounted = orderCount > 0 && orderCount % 6 === 0;
  const ordersUntilDiscount = orderCount > 0 ? 6 - (orderCount % 6) : 6;

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Ładowanie...</div>;
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Mój profil</h1>
          <Button onClick={signOut} variant="outline">
            Wyloguj się
          </Button>
        </div>

        {/* Loyalty Program Status */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
              Program lojalnościowy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">
                  Ukończone zamówienia: {orderCount}
                </p>
                {isNextOrderDiscounted ? (
                  <p className="text-green-600 font-medium">
                    🎉 Następne zamówienie z 50% zniżką!
                  </p>
                ) : (
                  <p className="text-muted-foreground">
                    Do zniżki pozostało: {ordersUntilDiscount} zamówień
                  </p>
                )}
              </div>
              <div className="text-right">
                <div className="w-24 h-24 rounded-full border-4 border-primary/20 flex items-center justify-center bg-primary/5">
                  <span className="text-2xl font-bold text-primary">
                    {orderCount % 6}/6
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Dane osobowe
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Historia zamówień
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Dane osobowe</CardTitle>
                <CardDescription>
                  Zarządzaj swoimi danymi osobowymi i kontaktowymi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={updateProfile} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Imię</Label>
                      <Input
                        id="firstName"
                        value={profile.first_name}
                        onChange={(e) => setProfile(prev => ({ ...prev, first_name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nazwisko</Label>
                      <Input
                        id="lastName"
                        value={profile.last_name}
                        onChange={(e) => setProfile(prev => ({ ...prev, last_name: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={user?.email || ''}
                      disabled
                      className="bg-muted"
                    />
                    <p className="text-sm text-muted-foreground">
                      Email nie może być zmieniony
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+48 123 456 789"
                    />
                  </div>

                  <Button type="submit" disabled={updating}>
                    {updating ? 'Aktualizowanie...' : 'Zapisz zmiany'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Historia zamówień</CardTitle>
                <CardDescription>
                  Przeglądaj swoje poprzednie zamówienia
                </CardDescription>
              </CardHeader>
              <CardContent>
                {orders.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    Nie masz jeszcze żadnych zamówień
                  </p>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="font-semibold">#{order.order_number}</h3>
                            <p className="text-sm text-muted-foreground">
                              {new Date(order.created_at).toLocaleDateString('pl-PL')}
                            </p>
                          </div>
                          {getStatusBadge(order.status)}
                        </div>

                        <div className="space-y-2 mb-3">
                          {order.order_items?.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>{item.product_name} x{item.quantity}</span>
                              <span>{(item.product_price * item.quantity).toFixed(2)} zł</span>
                            </div>
                          ))}
                        </div>

                        <Separator className="my-3" />
                        
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-muted-foreground">
                            <p>Adres: {order.delivery_address}</p>
                          </div>
                          <div className="text-right">
                            {order.discount_amount > 0 && (
                              <p className="text-sm text-green-600">
                                Zniżka: -{order.discount_amount.toFixed(2)} zł
                              </p>
                            )}
                            <p className="font-semibold">
                              Do zapłaty: {order.final_amount.toFixed(2)} zł
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};