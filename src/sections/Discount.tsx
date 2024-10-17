import { useState } from "react";
import { done, head, chair } from "../assets/img";
import DiscountComponent from "../components/DiscountComponent";
import Button from "../components/Button";
const Discount = () => {
  const [image, setImage] = useState(head);
  return (
    <section className="flex justify-center items-center flex-col py-[100px]">
      <h2 className="text-blue-dark max-[400px]:text-[33px] ledaing-[52px] mb-[24px] text-[44px] font-bold font-josefin">
        Discount Item
      </h2>
      <ul className="flex gap-[32px]">
        <li
          onClick={() => setImage(head)}
          className="text-[18px] cursor-pointer text-blue-dark leading-[24px] hover:text-primary font-normal font-lato"
        >
          Headphones
        </li>
        <li
          onClick={() => setImage(head)}
          className="text-[18px] cursor-pointer text-blue-dark leading-[24px] hover:text-primary font-normal font-lato"
        >
          Laptop
        </li>
        <li
          onClick={() => setImage(chair)}
          className="text-[18px] cursor-pointer text-blue-dark leading-[24px] hover:text-primary font-normal font-lato"
        >
          Others
        </li>
      </ul>
      <div className="flex w-full max-sm:px-[16px] justify-evenly items-center max-xl:flex-col-reverse max-2xl:gap-[64px] max-2xl:justify-center max-2xl:mt-[64px]">
        <div className="max-w-[640px] flex flex-col gap-[24px]">
          <h3
            className="font-josefin
            max-w-[523px]
text-[36px]
font-bold
leading-[44px] text-left
text-blue-dark
"
          >
            20% Discount Of All Products
          </h3>
          <div className="text-primary max-w-[523px] font-bold text-[22px] font-josefin leading-[28px]">
            Headphones Compact
          </div>
          <p className="text-[18px] leading-[24px] font-lato font-normal max-w-[523px] text-gray-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="max-w-[523px] grid grid-cols-2 grid-rows-2 gap-[24px]">
            <li className="flex gap-[8px]">
              <img
                src={done}
                alt="done"
                className="fill text-gray-3 w-[24px] h-[24px]"
              />
              <span className="text-gray-3 text-[16px] leading-5 font-normal font-lato">
                Material expose like metals
              </span>
            </li>
            <li className="flex gap-[8px]">
              {" "}
              <img
                src={done}
                alt="done"
                className="fill text-gray-3 w-[24px] h-[24px]"
              />
              <span className="text-gray-3 text-[16px] leading-5 font-normal font-lato">
                Material expose like metals
              </span>
            </li>
            <li className="flex gap-[8px]">
              {" "}
              <img
                src={done}
                alt="done"
                className="fill text-gray-3 w-[24px] h-[24px]"
              />
              <span className="text-gray-3 text-[16px] leading-5 font-normal font-lato">
                Material expose like metals
              </span>
            </li>
            <li className="flex gap-[8px]">
              {" "}
              <img
                src={done}
                alt="done"
                className="fill text-gray-3 w-[24px] h-[24px]"
              />
              <span className="text-gray-3 text-[16px] leading-5 font-normal font-lato">
                Material expose like metals
              </span>
            </li>
          </ul>
          <Button bgColor="bg-primary" label="Shop now" />
        </div>
        <div>
          <DiscountComponent image={image} />
        </div>
      </div>
    </section>
  );
};

export default Discount;
