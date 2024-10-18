import { Link } from "react-router-dom";
import {
  arrowBottom,
  card,
  heart,
  logo,
  loop,
  mail,
  phone,
  profile,
} from "../assets/img";
import BurgerMenu from "./BurgerMenu";
import { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useProducts } from "../hooks/useProducts";
import { Product } from "../types";

const TheHeader = () => {
  const { products } = useProducts();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  useEffect(() => {
    if (!query) {
      setFiltered(products || []);
    } else {
      setFiltered(
        products?.filter((item: Product) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        ) || []
      );
    }
  }, [query, products]);

  const searchRef = useRef(null);

  const handleScroll = (event: any) => {
    if (searchRef.current && !searchRef?.current.contains(event.target)) {
      setIsSearchVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="max-container font-josefin w-full">
      <div className="bg-tertiary max-md:hidden w-full py-[14px] flex justify-around">
        <div className="flex gap-[48px] w-[370px]">
          <div className="text-white cursor-pointer text-[16px] leading-5 flex gap-[10px]">
            <img src={mail} alt="mail" />
            mhhasanul@gmail.com
          </div>
          <div className="text-white cursor-pointer text-[16px] leading-5 flex gap-[10px]">
            <img src={phone} alt="phone" />
            (12345)67890
          </div>
        </div>

        <ul className="flex text-white text-[15px] items-center leading-5 gap-[32px]">
          <li className="flex items-center space-x-2 gap-[4px]">
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="flex items-center justify-centerpy-2 bg-tertiary focus:ourline-none outline-none text-white border-none rounded-md"
            >
              <option value={"English"}>English</option>
              <option value={"French"}>French</option>
              <option value={"Italian"}>Italian</option>
            </select>
          </li>

          <li className="flex justify-center items-start">
            <select
              id="language"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="flex items-center justify-center  py-2 bg-tertiary focus:ourline-none outline-none text-white border-none rounded-md"
            >
              <option value={"USD"}>USD</option>
              <option value={"UAH"}>UAH</option>
              <option value={"PLN"}>PLN</option>
              <option value={"TRY"}>TRY</option>
            </select>
          </li>
          <li>
            <Link to="/login" className="flex gap-[4px] items-start">
              <div className="">Login</div>
              <img src={profile} alt="profile" />
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="flex gap-[4px] items-start">
              <div className="">Wishlist</div>
              <img src={heart} alt="heart" />
            </Link>
          </li>
          <li className="flex gap-[4px] items-start">
            <Link to="/card">
              <img src={card} alt="card" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full py-[26px] flex justify-around ">
        <div className="flex items-center gap-[80px]">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="flex gap-[32px] text-blue-dark max-md:hidden">
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
        </div>
        <div className="flex relative" ref={searchRef}>
          <input
            onMouseEnter={() => setIsSearchVisible(true)}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            onClick={() => setIsSearchVisible(true)}
            className="max-w-[328px] rounded-lg text-gray-3 border w-full max-[410px]:w-[150px] border-gray-2 py-[12px] pl-[16px] pr-[70px] outline-none"
            placeholder="Search"
          />
          <button className="w-[52px] mt-[2px] h-[46px] ml-[-54px] rounded-[8px] bg-primary flex justify-center items-center">
            <img src={loop} alt="loop" />
          </button>

          {isSearchVisible && (
            <div
              onMouseLeave={() => setIsSearchVisible(false)}
              className="absolute bg-white w-full overflow-x-hidden top-20 max-h-[300px] overflow-y-auto rounded-lg shadow-lg z-10"
            >
              {filtered?.map((prod) => (
                <Link
                  to={`/products/${prod.id}`}
                  className="p-2 hover:bg-gray-100 flex items-center gap-4"
                  key={prod.id}
                >
                  <img
                    src={`/${prod.img}`}
                    alt={prod.name}
                    className="w-10 h-10 rounded-md"
                  />
                  <span className="text-gray-700 font-josefin hover:text-primary ">
                    {prod.name}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {windowWidth <= 768 && (
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="text-white bg-primary w-[52px] h-[46px] mt-[2px] rounded-lg flex justify-center items-center"
          >
            {isActive ? (
              <CloseIcon className="font-bold text-[64px]" />
            ) : (
              <MenuIcon className="font-bold text-[64px]" />
            )}
          </div>
        )}
        {isActive && windowWidth <= 768 && (
          <div className="absolute z-50 right-[7%]  top-[150px]">
            <BurgerMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default TheHeader;
