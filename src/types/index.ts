export type Product = {
  id: number;
  img: string;
  name: string;
  price: number;
  oldPrice: number;
  description: string;
  rating: number;
  code: string;
  type: string;
  brand: string;
  category: string;
  discount: string;
  quantity: number;
  isBestSeller: boolean;
};
export type Products = Product[];
