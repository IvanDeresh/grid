import { Link } from "react-router-dom";
import { mail, phone } from "../assets/img";

const BurgerMenu = () => {
  return (
    <div className="flex gap-[32px] z-1000 bg-gray-2 max-md:flex-col border-tertiary w-auto border rounded-sm p-[16px] absolute right-0">
      <div className="flex justify-between border-b border-tertiary">
        <ul className="flex flex-col text-tertiary text-[15px] font-bold font-josefin hover:text-pink-400 leading-5 gap-[32px]">
          <li className="text-[16px] hover:text-primary leading-5">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[16px]  hover:text-primary leading-5">
            <Link to="/products">Products</Link>
          </li>
          <li className="text-[16px]  hover:text-primary leading-5">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="text-[16px]  hover:text-primary leading-5">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <ul className="flex flex-col  text-tertiary text-[15px] font-bold font-josefin  leading-5 gap-[32px]">
          <li className="flex  gap-[4px] items-start hover:text-pink-400">
            <div className="">English</div>
          </li>
          <li className="flex gap-[4px] items-start hover:text-pink-400">
            <div className="">USD</div>
          </li>
          <li>
            <Link
              to="/login"
              className="flex gap-[4px] items-star hover:text-pink-400 "
            >
              <div className="">Login</div>
            </Link>
          </li>
          <li>
            <Link
              to="/wishlist"
              className="flex gap-[4px] items-start hover:text-pink-400"
            >
              <div className="">Wishlist</div>
            </Link>
          </li>
          <li className="flex gap-[4px] mb-[20px] items-start hover:text-pink-400">
            <Link to="/card">
              <div className="">Card</div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-tertiary  flex-col gap-[16px] py-[14px] rounded-lg flex justify-around p-[16px]">
        <div className="text-white cursor-pointer text-[16px] leading-5 flex gap-[10px] pr-[16px]">
          <img src={mail} alt="mail" />
          mhhasanul@gmail.com
        </div>
        <div className="text-white cursor-pointer text-[16px] leading-5 flex gap-[10px]">
          <img src={phone} alt="phone" />
          (12345)67890
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
