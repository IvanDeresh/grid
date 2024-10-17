import React, { createContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types";

interface ProductsContextType {
  products: Product[] | undefined;
  isLoading: boolean;
  error: unknown;
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  findOne: (productId: number) => Product | undefined;
}

export const CardContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<Product[]>({
    queryKey: ["card"],
  });

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === productId);
      if (existingProduct && existingProduct.quantity > 1) {
        return prevCart.map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
        );
      } else {
        return prevCart.filter((p) => p.id !== productId);
      }
    });
  };

  const findOne = (productId: number) => {
    return cart.find((e) => e.id === productId);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CardContext.Provider
      value={{
        products,
        isLoading,
        error,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        findOne,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
