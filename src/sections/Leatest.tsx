import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { cardProd, heartProd, loopProd, sale } from "../assets/img";
import { useCard } from "../hooks/useCard";
import { useWishlist } from "../hooks/useWishList";
import { Product } from "../types";

const Leatest = () => {
  const [productName, setProductName] = useState("");
  const { products, isLoading, error } = useProducts();
  const [categorie, setCategorie] = useState("Best Seller");
  const { addToCart } = useCard();
  const { addToWishlist } = useWishlist();
  const [items, setItems] = useState<Product[]>([]);
  const [addedProduct, setAddedProduct] = useState("");
  const [wishProd, setWishProd] = useState("");

  useEffect(() => {
    switch (categorie) {
      case "New Arrival":
        setItems(products?.slice(0, 6) || []);
        break;

      case "Best Seller":
        setItems(products?.filter((item) => item.isBestSeller) || []);
        break;

      case "Featured":
        setItems(products?.filter((item) => item.type === "device") || []);
        break;

      case "Special Offer":
        setItems(products?.filter((item) => item.id % 2 === 0) || []);
        break;

      default:
        setItems(products || []);
        break;
    }
  }, [categorie, products]);
  useEffect(() => {
    if (addedProduct) {
      const timer = setTimeout(() => {
        setAddedProduct("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [addedProduct]);
  useEffect(() => {
    if (wishProd) {
      const timer = setTimeout(() => {
        setWishProd("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [wishProd]);
  if (isLoading)
    return (
      <div>
        {[...Array(items?.length)].map((el, index) => (
          <div
            key={index}
            className="w-[416px] max-[475px]:w-[300px] relative flex flex-col bg-gray-1 gap-[12px] h-[304px]"
          >
            <div className="absolute bottom-[40px] left-[8px] bg-gray-1"></div>
            <div className="flex justify-between">
              <div className="text-[16px] font-normal leading-5 bg-gray-1"></div>
              <div className="flex gap-[16px] items-center bg-gray-1"></div>
            </div>
          </div>
        ))}
      </div>
    );
  if (error) return <div>Error loading products</div>;

  return (
    <section className="py-[100px] relative max-container flex flex-col justify-center items-center">
      <h2 className="text-blue-dark max-[400px]:text-[33px] ledaing-[52px] mb-[24px] text-[44px] font-bold font-josefin">
        Leatest Products
      </h2>
      <ul className="flex gap-[32px] max-[550px]:gap-[16px]">
        <li
          onClick={() => setCategorie("New Arrival")}
          className="text-[18px] max-[550px]:text-[13px] cursor-pointer text-blue-dark leading-[24px] hover:text-primary font-normal font-lato"
        >
          New Arrival
        </li>
        <li
          onClick={() => setCategorie("Best Seller")}
          className="text-[18px] max-[550px]:text-[13px] cursor-pointer text-blue-dark leading-[24px] hover:text-primary font-normal font-lato"
        >
          Best Seller
        </li>
        <li
          onClick={() => setCategorie("Featured")}
          className="text-[18px] max-[550px]:text-[13px] cursor-pointer text-blue-dark leading-[24px] hover:text-primary font-normal font-lato"
        >
          Featured
        </li>
        <li
          onClick={() => setCategorie("Special Offer")}
          className="text-[18px] max-[550px]:text-[13px] cursor-pointer text-blue-dark leading-[24px] hover:text-primary font-normal font-lato"
        >
          Special Offer
        </li>
      </ul>
      <ul className="grid gap-[40px] relative grid-cols-3 grid-rows-2 mt-[64px] max-lg:grid-cols-1 max-2xl:grid-cols-2">
        {items?.map((accessorie) => (
          <div
            key={accessorie.id}
            onMouseLeave={() => setProductName("")}
            onMouseEnter={() => setProductName(accessorie.name)}
            className="w-[416px] relative max-[475px]:w-[300px] flex flex-col gap-[12px] h-[304px]"
          >
            <img
              src={accessorie.img}
              alt="image"
              className="h-[272px] w-full"
            />
            {accessorie.brand === "Vke" && (
              <img
                src={sale}
                alt="sale"
                className="absolute left-[-8px] top-[0px]"
              />
            )}
            {addedProduct === accessorie.name && (
              <div className="bg-primary w-[150px] h-[52px] rounded-lg text-[14px] p-[8px] absolute bottom-[50px] left-[30%] animate-fromTop text-white">
                {addedProduct} was added to the card
              </div>
            )}
            {wishProd === accessorie.name && (
              <div className="bg-tertiary w-[150px] h-[52px] rounded-lg text-[14px] p-[8px] absolute bottom-[50px] left-[30%] animate-fromTop text-white">
                {wishProd} was added to the wishlist
              </div>
            )}
            <div className="absolute bottom-[40px] left-[8px]">
              <ul
                className={`animate-fromTop transition-all ${
                  accessorie.name == productName
                    ? "flex flex-col gap-[8px]"
                    : "hidden"
                }  gap-[24px]`}
              >
                <li
                  className="cursor-pointer hover:bg-gray-2 w-[16px] h-[16px] hover:scale-125 rounded-full"
                  onClick={() => {
                    addToCart(accessorie);
                    setAddedProduct(accessorie.name);
                    setWishProd("");
                  }}
                >
                  <img src={cardProd} alt="card" />
                </li>

                <li
                  className="cursor-pointer hover:bg-gray-2 w-[16px] h-[16px] hover:scale-125 rounded-full"
                  onClick={() => {
                    addToWishlist(accessorie);
                    setAddedProduct("");
                    setWishProd(accessorie.name);
                  }}
                >
                  <img src={heartProd} alt="heart" />
                </li>
                <li className="cursor-pointer hover:bg-gray-2 w-[16px] h-[16px] hover:scale-125 rounded-full">
                  <img src={loopProd} alt="loop" />
                </li>
              </ul>
            </div>
            <div className="flex justify-between">
              <div className="text-[16px] font-normal leading-5 text-blue-dark">
                {accessorie.name}
              </div>
              <div className="flex gap-[16px] items-center">
                <div className="font-josefin text-[16px] text-blue-dark leading-5 font-normal">
                  ${accessorie.price}
                </div>
                <div className="text-primary text-[14px] leading-4 font-normal font-josefin">
                  ${accessorie.oldPrice}
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Leatest;
