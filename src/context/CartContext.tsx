// src/context/CartContext.tsx
import { createContext, useContext, useState } from 'react';

const CartContext = createContext({ items: 0 });

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState(3); // You can replace with real logic later

  return (
    <CartContext.Provider value={{ items }}>{children}</CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
