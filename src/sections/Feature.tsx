import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import Button from "../components/Button";
import { cardProd, heartProd, loopProd } from "../assets/img";
import { useCard } from "../hooks/useCard";
import { useWishlist } from "../hooks/useWishList";
import { Link } from "react-router-dom";

const Feature = () => {
  const [productName, setProductName] = useState("");

  const { products, isLoading, error } = useProducts();
  const { addToCart } = useCard();
  const { addToWishlist } = useWishlist();
  const [addedProduct, setAddedProduct] = useState("");
  const [wishProd, setWishProd] = useState("");
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
      <section className="flex justify-center items-center pt-[100px] gap-[72px] flex-col max-container">
        <h2 className="text-blue-dark max-[400px]:text-[33px] ledaing-[52px] text-[44px] font-bold font-josefin">
          Featured Products
        </h2>
        <ul className="flex gap-[32px] max-2xl:flex-wrap max-2xl:justify-center max-2xl:items-center">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-gray-1 w-[304px] h-[368px]"></div>
          ))}
        </ul>
      </section>
    );
  if (error) return <div>Error loading products</div>;
  return (
    <section className="flex justify-center items-center pt-[100px] gap-[72px] flex-col max-container">
      <h2 className="text-blue-dark max-[400px]:text-[33px] ledaing-[52px] text-[44px] font-bold font-josefin">
        Featured Products
      </h2>
      <ul className="flex gap-[32px] max-2xl:flex-wrap max-2xl:justify-center max-2xl:items-center">
        {products?.slice(0, 4).map((product) => {
          return (
            <div
              onMouseLeave={() => setProductName("")}
              onMouseEnter={() => setProductName(product.name)}
              className="w-[304px] hover:shadow-2xl transition-all hover:translate-y-[-24px] relative h-[368px] shadow-xl"
              key={product.name}
            >
              <img
                className="w-full relative h-[232px]"
                src={product.img}
                alt={product.name}
              />
              {addedProduct === product.name && (
                <div className="bg-primary w-[150px] h-[52px] rounded-lg text-[14px] p-[8px] absolute top-[50px] left-[25%] animate-fromTop text-white">
                  {addedProduct} was added to the card
                </div>
              )}
              {wishProd === product.name && (
                <div className="bg-tertiary w-[150px] h-[52px] rounded-lg text-[14px] p-[8px] absolute top-[50px] left-[25%] animate-fromTop text-white">
                  {wishProd} was added to the wishlist
                </div>
              )}
              <div className="absolute top-[8px] left-[8px]">
                <ul
                  className={`animate-fromTop transition-all ${
                    product.name == productName ? "block" : "hidden"
                  } flex gap-[24px]`}
                >
                  <li
                    className="cursor-pointer hover:bg-gray-2 w-[16px] h-[16px] hover:scale-125 rounded-full"
                    onClick={() => {
                      setAddedProduct(product.name);
                      setWishProd("");
                      addToCart(product);
                    }}
                  >
                    <img src={cardProd} alt="card" />
                  </li>

                  <li
                    className="cursor-pointer hover:bg-gray-2 w-[16px] h-[16px] hover:scale-125 rounded-full"
                    onClick={() => {
                      setWishProd(product.name);
                      setAddedProduct("");
                      addToWishlist(product);
                    }}
                  >
                    <img src={heartProd} alt="heart" />
                  </li>
                  <li className="cursor-pointer hover:bg-gray-2 w-[16px] h-[16px] hover:scale-125 rounded-full">
                    <img src={loopProd} alt="loop" />
                  </li>
                </ul>
              </div>
              <div
                className={`absolute bottom-[150px] right-[30%] animate-fromTop transition-all ${
                  product.name == productName ? "block" : "hidden"
                }`}
              >
                <Link to={`products/${product.id}`}>
                  <Button label="View Details" bgColor="bg-success" />
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-primary font-bold my-[24px] text-[16px] leading-5 font-josefin">
                  {product.name}
                </div>
                <div className="flex flex-col items-center justify-center gap-[8px]">
                  <div className="text-gray-3 font-normal text-[14px] leading-4 font-josefin">
                    Code - {product.code}
                  </div>
                  <div className="text-blue-dark font-bold text-[16px] leading-5 font-josefin">
                    ${product.price}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
      <ul className="flex mt-[60px] gap-[18px]">
        <li
          onClick={() => setProductName("Watches")}
          className={`${
            productName === "Watches"
              ? "bg-primary w-[24px]"
              : " w-[16px] bg-[#febad7]"
          }  h-[4px] cursor-pointer rounded-full  `}
        ></li>
        <li
          onClick={() => setProductName("Headphones")}
          className={`${
            productName === "Headphones"
              ? "bg-primary w-[24px]"
              : " w-[16px] bg-[#febad7]"
          } h-[4px] cursor-pointer rounded-full borde`}
        ></li>
        <li
          onClick={() => setProductName("Laptop")}
          className={`${
            productName === "Laptop"
              ? "bg-primary w-[24px]"
              : " w-[16px] bg-[#febad7]"
          } h-[4px] cursor-pointer rounded-full`}
        ></li>
        <li
          onClick={() => setProductName("Black watches")}
          className={`${
            productName === "Black watches"
              ? "bg-primary w-[24px]"
              : " w-[16px] bg-[#febad7]"
          }  h-[4px] cursor-pointer rounded-full borde`}
        ></li>
      </ul>
    </section>
  );
};

export default Feature;
