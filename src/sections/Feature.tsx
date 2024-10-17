import { useState } from "react";
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
              <div className="absolute top-[8px] left-[8px]">
                <ul
                  className={`animate-fromTop transition-all ${
                    product.name == productName ? "block" : "hidden"
                  } flex gap-[24px]`}
                >
                  <li
                    className="cursor-pointer hover:bg-gray-2 w-[16px] h-[16px] hover:scale-125 rounded-full"
                    onClick={() => addToCart(product)}
                  >
                    <img src={cardProd} alt="card" />
                  </li>

                  <li
                    className="cursor-pointer hover:bg-gray-2 w-[16px] h-[16px] hover:scale-125 rounded-full"
                    onClick={() => addToWishlist(product)}
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
