import { Link } from "react-router-dom";
import { discount, headphones, lamp } from "../assets/img";
import Button from "../components/Button";
const Hero = () => {
  return (
    <section className="bg-hero max-lg:p-[16px] relative font-josefin flex items-center flex-col justify-end max-2xl:px-0 pr-[5%] gap-[56px]">
      <img
        src={lamp}
        alt="lamp"
        className="absolute top-0 left-[70px] z-0 max-[1856px]:hidden"
      />
      <div className="flex items-center w-full pr-[5%] gap-[56px] justify-end max-xl:justify-center  max-2xl:pr-[0%] max-2xl:mb-[50px] max-2xl:flex-col-reverse">
        <div className="w-[15px] h-[15px] rounded-full bg-primary absolute left-[9.5%] bottom-[200px] max-[1650px]:hidden"></div>
        <div className=" max-w-[570px] flex flex-col gap-[24px] z-10 max-xl:mb-[45px]">
          <h2 className="font-bold text-[16px] leading-5 text-primary">
            Best Headphones For Your Life....
          </h2>
          <h1 className="leading-[64px] max-[400px]:text-[44px] text-[52px] font-bold">
            New Trendy Collection Headphones
          </h1>
          <p className="text-gray-3 text-[16px] leading-5 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <Link to="/products">
            <Button bgColor="bg-primary" label="Shop Now" />
          </Link>
        </div>
        <div className="py-[34px] max-2xl:flex max-2xl:flex-col max-2xl:items-center relative">
          <img src={headphones} alt="headphones" />
          <img
            src={discount}
            alt="discount"
            className="absolute top-20 right-5 max-sm:right-0 max-[460px]:hidden"
          />
          <ul className="flex my-[45px] gap-[16px]">
            <li className="w-[12px] h-[12px] bg-primary rotate-45"></li>
            <li className="w-[12px] h-[12px] border border-primary bg-inherit rotate-45"></li>
            <li className="w-[12px] h-[12px] border border-primary bg-inherit rotate-45"></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
