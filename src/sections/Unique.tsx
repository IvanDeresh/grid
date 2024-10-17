import { chair, decor } from "../assets/img";
import Button from "../components/Button";
import { useCard } from "../hooks/useCard";
import { useProducts } from "../hooks/useProducts";

const Unique = () => {
  const { products } = useProducts();
  const { addToCart } = useCard();
  const product = products?.find((el) => el.id === 11);
  return (
    <section className="flex relative items-center justify-center max-container max-md:gap-[80px] gap-[32px] bg-[#f1f0ff] max-2xl:flex-col max-2xl:pb-[100px]">
      <div className="relative bg-cover">
        <img className="relative top-[40px] z-10" src={chair} alt="chair" />
        <img
          className="absolute top-[40px] max-md:hidden left-[40px] z-0"
          src={decor}
          alt="decor"
        />
      </div>
      <div className="flex flex-col gap-[48px] max-2xl:p-[16px] max-w-[534px]">
        <h2 className="text-blue-dark max-[400px]:text-[33px] ledaing-[44px] text-[36px] font-bold font-josefin">
          Unique Features Of leatest & Trending Poducts
        </h2>
        <ul className="flex flex-col gap-[16px]">
          <li className="flex gap-[16px] items-center">
            <div className="w-[11px] h-[11px] rounded-full bg-primary"></div>
            <span className="font-bold font-lato leading-5  text-[16px]  text-gray-3">
              All frames constructed with hardwood solids and laminates
            </span>
          </li>
          <li className="flex gap-[16px] items-center">
            <div className="w-[11px] h-[11px] rounded-full bg-[#603eff]"></div>
            <span className="font-bold font-lato leading-5  text-[16px]  text-gray-3">
              Reinforced with double wood dowels, glue, screw - nails corner
            </span>
          </li>
          <li className="flex gap-[16px] items-center">
            <div className="w-[11px] h-[11px] rounded-full bg-[#0cc562]"></div>
            <span className="font-bold font-lato leading-5  text-[16px]  text-gray-3">
              Arms, backs and seats are structurally reinforced
            </span>
          </li>
        </ul>
        <div className="flex gap-[16px]">
          <div onClick={() => product && addToCart(product)}>
            <Button bgColor="bg-primary" label="Add To Cart" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <span className="font-noraml  text-blue-dark leading-4 text-[14px] font-josefin">
              B&B Italian Sofa
            </span>
            <span className="font-noraml text-blue-dark leading-4 text-[14px] font-josefin">
              $32.00
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unique;
