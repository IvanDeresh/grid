import { useContext } from "react";
import { WishlistContext } from "../context/WishListContext";
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useCard must be used within a CardProvider");
  }
  return context;
};
