import { inst, twitter, facebook, logo } from "../assets/img";
import Button from "./Button";
const TheFooter = () => {
  return (
    <div className="max-container w-full min-h-[544px] flex flex-col">
      <div className="flex justify-evenly pt-[98px] w-full pb-[142px] bg-gray-1 max-xl:flex-col max-xl:gap-[32px] max-xl:justify-center max-md:items-start max-xl:px-[30%] max-sm:px-[10px] ">
        <div className="flex flex-col gap-[32px]">
          <img src={logo} alt="logo" className="w-[103px] h-[30px]" />
          <div className="relative max-w-[304px] flex">
            <input
              type="text"
              className="max-w-[304px] relative max-[400px]:w-[200px] max-[520px]:w-[250px] rounded-lg text-gray-3 border border-gray-2 py-[12px] pl-[16px] pr-[70px] outline-none"
              placeholder="Enter Email Address"
            />
            <div className=" z-10 m-[2px] ml-[-54px] rounded-[8px] flex justify-center items-center">
              <Button bgColor="bg-primary" label="Sign up" />
            </div>
          </div>
          <p className="text-gray-3 text-[16px] font-normal leading-5 w-auto font-lato max-w-[304px]">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
        <div
          className="flex flex-col gap-[24px] 
        "
        >
          <h2 className="font-bold text-blue-dark text-[22px] leading-[28px]">
            Catagories
          </h2>
          <ul
            className="flex flex-col gap-[24px] 
  "
          >
            <li className="text-gray-3 cursor-pointer font-normal leading-5 text-[16px] font-lato">
              Laptops & Computers
            </li>
            <li className="text-gray-3 cursor-pointer font-normal leading-5 text-[16px] font-lato">
              Cameras & Photography
            </li>
            <li className="text-gray-3 cursor-pointer font-normal leading-5 text-[16px] font-lato">
              Smart Phones & Tablets
            </li>
            <li className="text-gray-3 cursor-pointer font-normal leading-5 text-[16px] font-lato">
              Video Games & Consoles
            </li>
            <li className="text-gray-3 cursor-pointer font-normal leading-5 text-[16px] font-lato">
              Waterproof Headphones
            </li>
          </ul>
        </div>
        <div
          className="flex flex-col gap-[24px] 
        "
        >
          <h2 className="font-bold text-blue-dark text-[22px] leading-[28px]">
            Customer Care
          </h2>
          <ul
            className="flex flex-col gap-[24px] 
  "
          >
            <li className="text-gray-3 cursor-pointer font-normal leading-5 text-[16px] font-lato">
              My Account
            </li>
            <li className="text-gray-3 cursor-pointer font-normal leading-5 text-[16px] font-lato">
              Discount
            </li>
            <li className="text-gray-3 cursor-pointer font-normal leading-5 text-[16px] font-lato">
              Returns
            </li>
            <li className="text-gray-3 cursor-pointer font-normal leading-5 text-[16px] font-lato">
              Orders History
            </li>
            <li className="text-gray-3 cursor-pointer font-normal leading-5 text-[16px] font-lato">
              Order Tracking
            </li>
          </ul>
        </div>
        <div
          className="flex flex-col gap-[24px] 
        "
        >
          <h2 className="font-bold text-blue-dark text-[22px] leading-[28px]">
            Pages
          </h2>
          <ul
            className="flex flex-col gap-[24px] 
  "
          >
            <li className="text-gray-3 cursor-pointer font-normal leading-5 text-[16px] font-lato">
              Laptops & Computers
            </li>
            <li className="text-gray-3 cursor-pointer font-normal leading-5 text-[16px] font-lato">
              Browse the Shop
            </li>
            <li className="text-gray-3 cursor-pointer font-normal leading-5 text-[16px] font-lato">
              Category
            </li>
            <li className="text-gray-3 cursor-pointer font-normal leading-5 text-[16px] font-lato">
              Pre-Built Pages
            </li>
            <li className="text-gray-3 cursor-pointer font-normal leading-5 text-[16px] font-lato">
              Visual Composer Elements
            </li>
          </ul>
        </div>
      </div>
      <div className="min-h-[56px] bg-gray-2 h-auto justify-evenly p-[20px] flex text-[14px] leading-4 font-normal font-lato text-gray-3">
        <div>©Webecy - All Rights Reserved</div>
        <ul className="flex gap-[16px]">
          <li className="cursor-pointer">
            <img src={facebook} alt="face" />
          </li>
          <li className="cursor-pointer">
            <img src={twitter} alt="twitter" />
          </li>
          <li className="cursor-pointer">
            <img src={inst} alt="inst" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TheFooter;
