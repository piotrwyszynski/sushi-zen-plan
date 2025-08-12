
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  customizations?: string[];
}

interface AddressData {
  fullName: string;
  phone: string;
  email: string;
  street: string;
  building: string;
  apartment?: string;
  city: string;
  postalCode: string;
  notes?: string;
  deliveryMethod: "delivery" | "pickup";
}

type PaymentMethod = "payu" | "cod";

interface CartContextValue {
  items: CartItem[];
  count: number;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  // Checkout data
  address?: AddressData;
  setAddress: (address: AddressData) => void;
  paymentMethod?: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
  clearCheckout: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "sushi_strefa_cart";
const STORAGE_ADDRESS_KEY = "sushi_strefa_checkout_address";
const STORAGE_PAYMENT_KEY = "sushi_strefa_checkout_payment";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? (JSON.parse(raw) as CartItem[]) : [];
      console.log("Załadowano koszyk z localStorage:", parsed);
      return parsed;
    } catch (error) {
      console.error("Błąd podczas ładowania koszyka:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      console.log("Zapisywanie koszyka do localStorage:", items);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Błąd podczas zapisywania koszyka:", error);
    }
  }, [items]);

  // Checkout: address and payment method persisted separately
  const [address, setAddressState] = useState<AddressData | undefined>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_ADDRESS_KEY);
      return raw ? (JSON.parse(raw) as AddressData) : undefined;
    } catch (e) {
      console.error("Błąd podczas ładowania adresu z localStorage:", e);
      return undefined;
    }
  });

  const [paymentMethod, setPaymentMethodState] = useState<PaymentMethod | undefined>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_PAYMENT_KEY);
      return raw ? (JSON.parse(raw) as PaymentMethod) : undefined;
    } catch (e) {
      console.error("Błąd podczas ładowania metody płatności z localStorage:", e);
      return undefined;
    }
  });

  useEffect(() => {
    try {
      if (address) localStorage.setItem(STORAGE_ADDRESS_KEY, JSON.stringify(address));
      else localStorage.removeItem(STORAGE_ADDRESS_KEY);
    } catch (e) {
      console.error("Błąd podczas zapisywania adresu:", e);
    }
  }, [address]);

  useEffect(() => {
    try {
      if (paymentMethod) localStorage.setItem(STORAGE_PAYMENT_KEY, JSON.stringify(paymentMethod));
      else localStorage.removeItem(STORAGE_PAYMENT_KEY);
    } catch (e) {
      console.error("Błąd podczas zapisywania metody płatności:", e);
    }
  }, [paymentMethod]);

  const setAddress = (addr: AddressData) => setAddressState(addr);
  const setPaymentMethod = (method: PaymentMethod) => setPaymentMethodState(method);
  const clearCheckout = () => {
    setAddressState(undefined);
    setPaymentMethodState(undefined);
    try {
      localStorage.removeItem(STORAGE_ADDRESS_KEY);
      localStorage.removeItem(STORAGE_PAYMENT_KEY);
    } catch {}
  };

  const addItem: CartContextValue["addItem"] = (item, quantity = 1) => {
    console.log("CartContext: Dodawanie produktu:", item, "ilość:", quantity);
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        console.log("Produkt już istnieje, zwiększam ilość");
        const newItems = prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
        console.log("Nowe items po zwiększeniu ilości:", newItems);
        return newItems;
      }
      console.log("Nowy produkt, dodaję do koszyka");
      const newItems = [...prev, { ...item, quantity }];
      console.log("Nowe items po dodaniu:", newItems);
      return newItems;
    });
  };

  const updateQuantity: CartContextValue["updateQuantity"] = (id, quantity) => {
    console.log("CartContext: Aktualizacja ilości dla produktu:", id, "nowa ilość:", quantity);
    setItems((prev) => {
      if (quantity <= 0) {
        console.log("Ilość <= 0, usuwam produkt");
        return prev.filter((i) => i.id !== id);
      }
      const newItems = prev.map((i) => (i.id === id ? { ...i, quantity } : i));
      console.log("Nowe items po aktualizacji ilości:", newItems);
      return newItems;
    });
  };

  const removeItem: CartContextValue["removeItem"] = (id) => {
    console.log("CartContext: Usuwanie produktu:", id);
    setItems((prev) => {
      const newItems = prev.filter((i) => i.id !== id);
      console.log("Nowe items po usunięciu:", newItems);
      return newItems;
    });
  };

  const clear: CartContextValue["clear"] = () => {
    console.log("CartContext: Czyszczenie koszyka");
    setItems([]);
  };

  const count = useMemo(() => {
    const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
    console.log("Przeliczono ilość produktów w koszyku:", totalCount);
    return totalCount;
  }, [items]);

  const value = useMemo(
    () => ({ items, count, addItem, updateQuantity, removeItem, clear, address, setAddress, paymentMethod, setPaymentMethod, clearCheckout }),
    [items, count, address, paymentMethod]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
