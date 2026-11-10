"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { CartItem, DietBowl } from "@/types";

interface CartContextType {
  items: CartItem[];
  addToCart: (bowl: DietBowl) => void;
  removeFromCart: (bowlId: string) => void;
  updateQuantity: (bowlId: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("balance_diet_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("balance_diet_cart", JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items]);

  const addToCart = (bowl: DietBowl) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.bowl.id === bowl.id);
      if (existing) {
        return prev.map((item) =>
          item.bowl.id === bowl.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { bowl, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (bowlId: string) => {
    setItems((prev) => prev.filter((item) => item.bowl.id !== bowlId));
  };

  const updateQuantity = (bowlId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(bowlId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.bowl.id === bowlId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.bowl.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
