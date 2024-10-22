import React, { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types";

interface ProductsContextType {
  products: Product[] | undefined;
  isLoading: boolean;
  error: unknown;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("./products.json");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <ProductsContext.Provider value={{ products, isLoading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};
