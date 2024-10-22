import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCard } from "../hooks/useCard";
import { useWishlist } from "../hooks/useWishList";
import { cardProd, done, heartProd, loopProd } from "../assets/img";
import Button from "../components/Button";
import { StarRating } from "../components/StarRating";
const ProductDetails = () => {
  const { products, isLoading } = useProducts();
  const { id } = useParams();
  const obj = products?.find((item) => item.id === Number(id));
  const [productName, setProductName] = useState("");
  const [subtitle, setSubtitle] = useState("Description");
  const { addToCart } = useCard();
  const { addToWishlist } = useWishlist();
  if (isLoading) return <div>Loading products...</div>;
  return (
    <div className="max-container mt-[102px]">
      <section className="my-[100px]">
        <div className="flex justify-evenly max-xl:flex-col max-xl:gap-[64px] items-center">
          <div className="flex gap-[32px] max-xl:flex-col-reverse">
            <ul className="flex flex-col  gap-[15px] max-xl:flex-row">
              <li className="w-[192px] max-xl:w-[167px] max-sm:w-[120px] max-[400px]:w-[100px] max-[335px]:w-[80px] h-[136px] rounded-lg bg-gray-3"></li>
              <li className="w-[192px] max-xl:w-[167px] max-sm:w-[120px] max-[400px]:w-[100px] max-[335px]:w-[80px] h-[136px] rounded-lg bg-gray-3"></li>
              <li className="w-[192px] max-xl:w-[167px] max-sm:w-[120px] max-[400px]:w-[100px] max-[335px]:w-[80px] h-[136px] rounded-lg bg-gray-3"></li>
            </ul>
            <div className="max-w-[528px] max-h-[438px] w-[528px] max-sm:w-[390px] max-[400px]:w-[330px] max-[335px]:w-[270px] rounded-lg shadow-xl">
              <img
                className="max-w-[528px] max-h-[438px] max-sm:w-[390px] h-[438px] w-[528px] max-[400px]:w-[330px] max-[400px]:h-[390px] max-[335px]:h-[350px] max-[335px]:w-[270px] rounded-lg shadow-xl"
                src={`/${obj?.img}`}
                alt={obj?.name}
              />
            </div>
          </div>
          <div className="px-[8px]">
            <h2 className="text-[33px] mb-[8px] font-josefin font-bold leading-[44px] text-blue-dark">
              {obj?.name}
            </h2>
            <div>
              <StarRating rating={Number(obj?.rating)} />
            </div>
            <div className="flex items-center mt-[24px] gap-[15px]">
              <div className="text-[16px] leading-5 text-blue-dark font-josefin font-normal items-center">
                ${obj?.price}
              </div>
              <div className="text-primary text-[14px] leading-4 line-through font-josefin font-normal">
                ${obj?.oldPrice}
              </div>
            </div>
            <p className="text-[16px] mt-[24px] leading-5 max-w-[413px] text-gray-3 font-lato font-normal">
              {obj?.description}
            </p>
            <div className="flex items-center mt-[64px] gap-[32px]">
              <div onClick={() => obj && addToCart(obj)}>
                <Button label="Add To Cart" bgColor="bg-primary" />
              </div>
              <div
                className="cursor-pointer  w-[16px] h-[16px] hover:scale-125 rounded-full"
                onClick={() => obj && addToWishlist(obj)}
              >
                <img src={heartProd} alt="heart" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-1 w-full py-[62px] px-[15%] gap-[48px] flex flex-col items-center h-auto min-h-[576px] ">
        <ul className="flex gap-[72px] max-sm:gap-[32px] max-md:gap-[48px] max-sm:border-b-2 max-sm:border-blue-950 max-sm:flex-wrap">
          <li
            onClick={() => setSubtitle("Description")}
            className={`text-[26px] cursor-pointer max-md:text-[20px] max-sm:text-[18px] leading-8 font-bold font-josefin text-blue-dark ${
              subtitle === "Description"
                ? "underline decoration-1 underline-offset-8"
                : ""
            }`}
          >
            Description
          </li>
          <li
            onClick={() => setSubtitle("Additional Info")}
            className={`text-[26px] cursor-pointer max-md:text-[20px] max-sm:text-[18px] leading-8 font-bold font-josefin text-blue-dark ${
              subtitle === "Additional Info"
                ? "underline decoration-1 underline-offset-8"
                : ""
            }`}
          >
            Additional Info
          </li>
          <li
            onClick={() => setSubtitle("Reviews")}
            className={`text-[26px] cursor-pointer max-md:text-[20px] max-sm:text-[18px] leading-8 font-bold font-josefin text-blue-dark ${
              subtitle === "Reviews"
                ? "underline decoration-1 underline-offset-8"
                : ""
            }`}
          >
            Reviews
          </li>
          <li
            onClick={() => setSubtitle("Video")}
            className={`text-[26px] cursor-pointer max-md:text-[20px] max-sm:text-[18px] leading-8 font-bold font-josefin text-blue-dark ${
              subtitle === "Video"
                ? "underline decoration-1 underline-offset-8"
                : ""
            }`}
          >
            Video
          </li>
        </ul>
        {subtitle === "Description" ? (
          <div className="flex flex-col gap-[16px] ">
            <h3 className="text-[22px] leading-7 font-bold font-josefin text-blue-dark">
              Varius tempor.
            </h3>
            <p className="text-[16px] leading-5 font-normal font-lato text-gray-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
              quam dolor. In dignissim lectus sed nisl tempor, ac porttitor
              libero consectetur. Pellentesque diam dolor, tincidunt nec ante
              congue, tincidunt facilisis tortor. Mauris vitae massa molestie,
              sagittis ligula vel, egestas massa. Phasellus quis sodales augue.
              Donec nec ultricies diam. Integer feugiat odio ut dictum viverra.
              Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor
              justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum.
              Maecenas quam risus, congue quis accumsan at, imperdiet sed
              lectus. Aliquam in est purus
            </p>
            <ul className="flex flex-col gap-[16px]">
              <h4 className="text-[22px] leading-7 font-bold font-josefin text-blue-dark">
                Varius tempor.
              </h4>
              <li className="flex items-center gap-[16px] text-[16px] leading-5 font-lato font-normal text-gray-3">
                <img className="w-[16px] h-[16px]" src={done} alt="done" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                quam dolor. In dignissim lectus sed nisl tempor, ac porttitor
                libero consectetur.
              </li>
              <li className="flex items-center gap-[16px] text-[16px] leading-5 font-lato font-normal text-gray-3">
                <img className="w-[16px] h-[16px]" src={done} alt="done" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                quam dolor. In dignissim lectus sed nisl tempor, ac porttitor
                libero consectetur.
              </li>
              <li className="flex items-center gap-[16px] text-[16px] leading-5 font-lato font-normal text-gray-3">
                <img className="w-[16px] h-[16px]" src={done} alt="done" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                quam dolor. In dignissim lectus sed nisl tempor, ac porttitor
                libero consectetur.
              </li>{" "}
              <li className="flex items-center gap-[16px] text-[16px] leading-5 font-lato font-normal text-gray-3">
                <img className="w-[16px] h-[16px]" src={done} alt="done" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                quam dolor. In dignissim lectus sed nisl tempor, ac porttitor
                libero consectetur.
              </li>{" "}
              <li className="flex items-center gap-[16px] text-[16px] leading-5 font-lato font-normal text-gray-3">
                <img className="w-[16px] h-[16px]" src={done} alt="done" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                quam dolor. In dignissim lectus sed nisl tempor, ac porttitor
                libero consectetur.
              </li>
            </ul>
          </div>
        ) : subtitle === "Additional Info" ? (
          <div className="text-[26px] cursor-pointer leading-8 font-bold font-josefin text-blue-dark ">
            Additional Info
          </div>
        ) : subtitle === "Reviews" ? (
          <div className="text-[26px] cursor-pointer leading-8 font-bold font-josefin text-blue-dark ">
            Reviews
          </div>
        ) : (
          <div className="text-[26px] cursor-pointer leading-8 font-bold font-josefin text-blue-dark ">
            Video
          </div>
        )}
      </section>
      <section className="flex justify-center items-center pt-[100px] gap-[72px] flex-col mb-[100px]">
        <h2 className="text-blue-dark ml-[15%] max-sm:text-[33px] ledaing-[52px] self-start text-[44px] font-bold font-josefin">
          Related Products
        </h2>
        <ul className="flex gap-[32px] flex-wrap my-[8px] justify-center">
          {products?.slice(0, 4).map((product) => {
            return (
              <div
                onMouseLeave={() => setProductName("")}
                onMouseEnter={() => setProductName(product.name)}
                className="w-[304px] hover:shadow-2xl transition-all hover:translate-y-[-24px] relative h-[368px] shadow-xl"
                key={product.name}
              >
                <img
                  className="w-full relative"
                  src={`/${product.img}`}
                  alt={`/${product.name}`}
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
                  <Button label="View Details" bgColor="bg-success" />
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
      </section>
    </div>
  );
};

export default ProductDetails;
