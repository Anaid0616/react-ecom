import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TProduct } from '../types/Products';

// --- Types ---
type CartItem = TProduct & { quantity: number };

type CartStore = {
  items: CartItem[];
  addToCart: (product: TProduct) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get): CartStore => ({
      items: [],

      addToCart: (product) => {
        const items = get().items;
        const existing = items.find((item) => item.id === product.id);

        if (existing) {
          set({
            items: items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ items: [...items, { ...product, quantity: 1 }] });
        }
      },

      removeFromCart: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },

      clearCart: () => set(() => ({ items: [] })),
    }),
    {
      name: 'cart-storage',
    }
  )
);
