import React, { createContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types";

interface ProductsContextType {
  products: Product[] | undefined;
  isLoading: boolean;
  error: unknown;
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  clearWishlist: () => void;
}

export const WishlistContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const WishlistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<Product[]>({
    queryKey: ["card"],
  });

  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    setWishlist((prevCart) => {
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

  const removeFromWishlist = (productId: number) => {
    setWishlist((prevCart) => {
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

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        products,
        isLoading,
        error,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
