import { useState, useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import {
  cardProd,
  greyStar,
  heartProd,
  loopProd,
  yellowStar,
} from "../assets/img";
import Checkbox from "../components/Checkbox";
import { StarRating } from "../components/StarRating";
import { Link } from "react-router-dom";
import { Product } from "../types";
import { useCard } from "../hooks/useCard";
import { useWishlist } from "../hooks/useWishList";
const Products = () => {
  const { products, isLoading, error } = useProducts();
  const [listView, setListView] = useState("Standart");
  const [productBrands, setProductBrands] = useState<string[]>([]);
  const [discount, setDiscount] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [price, setPrice] = useState<number[]>([]);
  const [rating, setRating] = useState<number[]>([]);
  const { addToCart } = useCard();
  const { addToWishlist } = useWishlist();
  const [filterProducts, setFilteredProducts] = useState<Product[]>();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isActive, setIsActive] = useState(false);
  const [sortBy, setSortBy] = useState<string>("priceHighLow");
  const [itemPerPage, setItemPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const countOfPage = Math.ceil((filterProducts?.length || 0) / itemPerPage);
  const paginatedProducts = filterProducts?.slice(
    (page - 1) * itemPerPage,
    page * itemPerPage
  );
  useEffect(() => {
    const filterProducts = () => {
      const filtered = products;
      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [products]);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    if (windowWidth < 640) setListView("Grid");
    if (windowWidth < 1150 && !isActive) setIsActive(false);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);
  useEffect(() => {
    const filterProducts = () => {
      const filtered = products?.filter((product) => {
        const brandMatch =
          productBrands.length === 0 || productBrands.includes(product.brand);

        const discountMatch =
          discount.length === 0 || discount.includes(product.discount);

        const categoryMatch =
          categories.length === 0 || categories.includes(product.category);

        const priceMatch =
          price.length === 0 || product.price <= Math.max(...price);

        const ratingMatch =
          rating.length === 0 || rating.includes(product.rating);

        return (
          brandMatch &&
          discountMatch &&
          categoryMatch &&
          priceMatch &&
          ratingMatch
        );
      });

      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [productBrands, discount, categories, price, rating, products]);
  useEffect(() => {
    const sortProducts = () => {
      if (!filterProducts) return;

      const sorted = [...filterProducts].sort((a, b) => {
        if (sortBy === "priceHighLow") {
          return b.price - a.price;
        } else if (sortBy === "priceLowHigh") {
          return a.price - b.price;
        } else if (sortBy === "ratingHighLow") {
          return b.rating - a.rating;
        }
        return 0;
      });

      setFilteredProducts(sorted);
    };

    sortProducts();
  }, [sortBy]);

  useEffect(() => {
    filterProducts && filterProducts?.length <= itemPerPage && setPage(1);
  }, [filterProducts]);

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="max-container flex flex-col items-center mb-[100px] mt-[102px]">
      <h2 className="text-blue-dark  ledaing-[52px] mb-[24px] text-[44px] font-bold font-josefin">
        Products
      </h2>
      <ul className="flex gap-[16px] items-center mb-[80px]">
        <Link
          to="/"
          className="text-[16px] text-gray-3 leading-5 font-normal font-lato hover:text-primary"
        >
          Home
        </Link>
        <div className="w-[4px] bg-[#d9d9d9] h-[4px] rounded-full"></div>
        <Link
          className="text-[16px] text-gray-3 leading-5 font-normal font-lato hover:text-primary"
          to="/products"
        >
          Products
        </Link>
      </ul>
      <div
        className="flex flex-col w-full 
    "
      >
        <div className="flex max-[1150px]:flex-col max-[1150px]:items-center justify-evenly w-full">
          <div
            className="hidden max-[1150px]:flex leading-[52px] border-b-2 border-b-blue-dark mb-[50px] max-[400px]:text-[33px] text-[44px] font-bold font-josefin text-blue-dark"
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? "Filter" : "Close"}
          </div>
          <div
            className={`${
              isActive && "max-[1150px]: hidden"
            } min-[1150px]:flex  flex flex-col max-[1150px]:items-start max-[1150px]:gap-[64px] max-[1150px]:flex-wrap max-[1150px]:px-[32px] max-[1150px]:mb-[100px]`}
          >
            <div>
              <h3 className="text-[20px] max-[1150px]:mt-0 mt-[64px] mb-[23px] leading-6 decoration-1 underline underline-offset-[8px] text-blue-dark font-bold font-justify ">
                Product Brand
              </h3>

              <ul className="flex flex-col gap-[16px]">
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="Casio"
                    id={"1"}
                    bgColor="bg-[#ddd6ff]"
                    activeColor="bg-[#603eff]"
                    setState={setProductBrands}
                    value="Casio"
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="Apple"
                    id={"2"}
                    bgColor="bg-[#ddd6ff]"
                    activeColor="bg-[#603eff]"
                    setState={setProductBrands}
                    value="Apple"
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="Sony"
                    id={"3"}
                    bgColor="bg-[#ddd6ff]"
                    activeColor="bg-[#603eff]"
                    setState={setProductBrands}
                    value="Sony"
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="Nike"
                    id={"4"}
                    bgColor="bg-[#ddd6ff]"
                    activeColor="bg-[#603eff]"
                    setState={setProductBrands}
                    value="Nike"
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="Vke"
                    id={"5"}
                    bgColor="bg-[#ddd6ff]"
                    activeColor="bg-[#603eff]"
                    setState={setProductBrands}
                    value="Vke"
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="Glossinness"
                    id={"6"}
                    bgColor="bg-[#ddd6ff]"
                    activeColor="bg-[#603eff]"
                    setState={setProductBrands}
                    value="Glossinness"
                  />
                </li>
              </ul>
            </div>
            <div className="mt-[48px] max-[1150px]:mt-0">
              <h3 className="text-[20px]   mb-[23px] leading-6 decoration-1 underline underline-offset-[8px] text-blue-dark font-bold font-justify ">
                Discount Offer
              </h3>
              <ul className="flex flex-col gap-[16px]">
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="20% Cashback"
                    id={"7"}
                    bgColor="bg-[#feb9c4]"
                    activeColor="bg-primary"
                    setState={setDiscount}
                    value="20% Cashback"
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="5% Cashback Offer"
                    id={"8"}
                    bgColor="bg-[#feb9c4]"
                    activeColor="bg-primary"
                    setState={setDiscount}
                    value="5% Cashback Offer"
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="25% Discount Offer"
                    id={"9"}
                    bgColor="bg-[#feb9c4]"
                    activeColor="bg-primary"
                    setState={setDiscount}
                    value="25% Discount Offer"
                  />
                </li>
              </ul>
            </div>
            <div className="mt-[48px] max-[1150px]:mt-0">
              <h3 className="text-[20px] mb-[23px] leading-6 decoration-1 underline underline-offset-[8px] text-blue-dark font-bold font-justify ">
                Rating
              </h3>
              <ul className="flex flex-col gap-[16px]">
                <li className="flex gap-[8px] items-center  justify-start">
                  <Checkbox
                    label={""}
                    id={"9"}
                    bgColor="bg-[#fff3ce]"
                    activeColor="bg-secondary"
                    setState={setRating}
                    value={5.0}
                  />
                  <ul className="flex gap-[8px] items-center">
                    <img
                      className="w-[16px] h-[16px]"
                      src={yellowStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={yellowStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={yellowStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={yellowStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={yellowStar}
                      alt="star"
                    />
                  </ul>
                </li>
                <li className="flex gap-[8px] items-center  justify-start">
                  <Checkbox
                    label={""}
                    id={"9"}
                    bgColor="bg-[#fff3ce]"
                    activeColor="bg-secondary"
                    setState={setRating}
                    value={4.0}
                  />
                  <ul className="flex gap-[8px] items-center">
                    <img
                      className="w-[16px] h-[16px]"
                      src={yellowStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={yellowStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={yellowStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={yellowStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={greyStar}
                      alt="star"
                    />
                  </ul>
                </li>
                <li className="flex gap-[8px] items-center  justify-start">
                  <Checkbox
                    label={""}
                    id={"9"}
                    bgColor="bg-[#fff3ce]"
                    activeColor="bg-secondary"
                    setState={setRating}
                    value={3.0}
                  />
                  <ul className="flex gap-[8px] items-center">
                    <img
                      className="w-[16px] h-[16px]"
                      src={yellowStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={yellowStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={yellowStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={greyStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={greyStar}
                      alt="star"
                    />
                  </ul>
                </li>
                <li className="flex gap-[8px] items-center  justify-start">
                  <Checkbox
                    label={""}
                    id={"9"}
                    bgColor="bg-[#fff3ce]"
                    activeColor="bg-secondary"
                    setState={setRating}
                    value={2.0}
                  />
                  <ul className="flex gap-[8px] items-center">
                    <img
                      className="w-[16px] h-[16px]"
                      src={yellowStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={yellowStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={greyStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={greyStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={greyStar}
                      alt="star"
                    />
                  </ul>
                </li>
                <li className="flex gap-[8px] items-center  justify-start">
                  <Checkbox
                    label={""}
                    id={"9"}
                    bgColor="bg-[#fff3ce]"
                    activeColor="bg-secondary"
                    setState={setRating}
                    value={1.0}
                  />
                  <ul className="flex gap-[8px] items-center">
                    <img
                      className="w-[16px] h-[16px]"
                      src={yellowStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={greyStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={greyStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={greyStar}
                      alt="star"
                    />
                    <img
                      className="w-[16px] h-[16px]"
                      src={greyStar}
                      alt="star"
                    />
                  </ul>
                </li>
              </ul>
            </div>
            <div className="mt-[48px] max-[1150px]:mt-0">
              <h3 className="text-[20px] mb-[23px] leading-6 decoration-1 underline underline-offset-[8px] text-blue-dark font-bold font-justify ">
                Categories
              </h3>
              <ul className="flex flex-col gap-[16px]">
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="Watches"
                    id={"7"}
                    bgColor="bg-[#feb9c4]"
                    activeColor="bg-primary"
                    setState={setCategories}
                    value="Watches"
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="Headphones"
                    id={"8"}
                    bgColor="bg-[#feb9c4]"
                    activeColor="bg-primary"
                    setState={setCategories}
                    value="Headphones"
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="Laptop"
                    id={"9"}
                    bgColor="bg-[#feb9c4]"
                    activeColor="bg-primary"
                    setState={setCategories}
                    value="Laptop"
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="Game Console"
                    id={"9"}
                    bgColor="bg-[#feb9c4]"
                    activeColor="bg-primary"
                    setState={setCategories}
                    value="Game Console"
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="Clothe"
                    id={"9"}
                    bgColor="bg-[#feb9c4]"
                    activeColor="bg-primary"
                    setState={setCategories}
                    value="Clothe"
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="Jewellery"
                    id={"9"}
                    bgColor="bg-[#feb9c4]"
                    activeColor="bg-primary"
                    setState={setCategories}
                    value="Jewellery"
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="Perfume"
                    id={"9"}
                    bgColor="bg-[#feb9c4]"
                    activeColor="bg-primary"
                    setState={setCategories}
                    value="Perfume"
                  />
                </li>
              </ul>
            </div>
            <div className="mt-[48px] max-[1150px]:mt-0">
              <h3 className="text-[20px] mb-[23px] leading-6 decoration-1 underline underline-offset-[8px] text-blue-dark font-bold font-justify ">
                Price
              </h3>
              <ul className="flex flex-col gap-[16px]">
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="$0 - $150"
                    id={"7"}
                    bgColor="bg-[#feb9c4]"
                    activeColor="bg-primary"
                    setState={setPrice}
                    value={150}
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="$150 - $350"
                    id={"8"}
                    bgColor="bg-[#feb9c4]"
                    activeColor="bg-primary"
                    setState={setPrice}
                    value={300}
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="$350 - $500"
                    id={"9"}
                    bgColor="bg-[#feb9c4]"
                    activeColor="bg-primary"
                    setState={setPrice}
                    value={500}
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="$500 - $800"
                    id={"8"}
                    bgColor="bg-[#feb9c4]"
                    activeColor="bg-primary"
                    setState={setPrice}
                    value={800}
                  />
                </li>
                <li className="flex items-center gap-[8px]">
                  <Checkbox
                    label="$800+"
                    id={"9"}
                    bgColor="bg-[#feb9c4]"
                    activeColor="bg-primary"
                    setState={setPrice}
                    value={801}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col max-w-[976px] items-center gap-[32px]">
            <ul className="flex gap-[64px] max-sm:flex-col self-end max-sm:self-center max-sm:justify-center">
              <li className="flex items-center space-x-2 gap-[10px]">
                <label
                  htmlFor="sortBy"
                  className="text-[16px] leading-5 font-lato font-normal min-w-max  text-gray-3"
                >
                  Per page:
                </label>
                <select
                  id="sortBy"
                  value={itemPerPage}
                  onChange={(e) => setItemPerPage(Number(e.target.value))}
                  className="block w-full px-4 py-2 outline-none text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                </select>
              </li>
              <li className="flex items-center space-x-2 gap-[10px]">
                <label
                  htmlFor="sortBy"
                  className="text-[16px] leading-5 font-lato font-normal min-w-max  text-gray-3"
                >
                  Sort By:
                </label>
                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="block w-full px-4 py-2 outline-none text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                >
                  <option value="priceHighLow">Price High -&gt; Low</option>
                  <option value="priceLowHigh">Price Low -&gt; High</option>
                  <option value="ratingHighLow">Rating High -&gt; Low</option>
                </select>
              </li>
              <li className="flex gap-[16px] max-sm:hidden items-center">
                <h4 className="text-[16px] leading-5 font-lato font-normal text-gray-3">
                  {" "}
                  View
                </h4>
                <div
                  onClick={() => setListView("Grid")}
                  className="flex  cursor-pointer flex-col gap-[6px]"
                >
                  <div className="flex gap-[6px]">
                    <div
                      className={`w-[6px] h-[6px] rounded-[2px]  ${
                        listView === "Grid"
                          ? "bg-primary"
                          : "border-blue-dark border bg-inherit"
                      }`}
                    ></div>
                    <div
                      className={`w-[6px] h-[6px] rounded-[2px]  ${
                        listView === "Grid"
                          ? "bg-primary"
                          : "border-blue-dark border bg-inherit"
                      }`}
                    ></div>{" "}
                  </div>
                  <div className="flex gap-[6px]">
                    <div
                      className={`w-[6px] h-[6px] rounded-[2px]  ${
                        listView === "Grid"
                          ? "bg-primary"
                          : "border-blue-dark border bg-inherit"
                      }`}
                    ></div>{" "}
                    <div
                      className={`w-[6px] h-[6px]  rounded-[2px]  ${
                        listView === "Grid"
                          ? "bg-primary"
                          : "border-blue-dark border bg-inherit"
                      }`}
                    ></div>
                  </div>
                </div>
                <div
                  onClick={() => setListView("Standart")}
                  className="flex cursor-pointer flex-col gap-[6px]"
                >
                  <div
                    className={`w-[18px] h-[6px]  rounded-[2px]  ${
                      listView === "Standart"
                        ? "bg-primary"
                        : "border-blue-dark border bg-inherit"
                    }`}
                  ></div>
                  <div
                    className={`w-[18px] h-[6px]  rounded-[2px]  ${
                      listView === "Standart"
                        ? "bg-primary"
                        : "border-blue-dark border bg-inherit"
                    }`}
                  ></div>
                </div>
              </li>
            </ul>
            <ul
              className={`flex ${
                listView === "Standart"
                  ? "flex-col"
                  : "flex-wrap justify-center"
              } gap-[32px]`}
            >
              {paginatedProducts?.map((product) => (
                <li
                  className={`shadow-xl hover:shadow-2xl ${
                    listView === "Standart"
                      ? "flex p-[16px] h-[232px] gap-[32px] max-w-[976px]"
                      : "p-[8px] max-w-[304px] flex flex-col"
                  }`}
                  key={product.name}
                >
                  <div className="w-[288px] h-[200px]">
                    <img
                      className="w-[288px] h-[200px]"
                      src={product.img}
                      alt={product.name}
                    />
                  </div>
                  <div
                    className={`${
                      listView === "Standart"
                        ? "flex flex-col justify-between pb-[18px] "
                        : "flex flex-col p-[16px]"
                    }`}
                  >
                    <div
                      className={`${
                        listView === "Standart"
                          ? "pt-[24px] flex flex-col gap-[9px] pr-[24px]"
                          : "flex flex-col"
                      }`}
                    >
                      <div
                        className={`${
                          listView === "Standart"
                            ? "flex justify-between w-full items-center"
                            : "flex flex-col gap-[8px mb-[8px]"
                        }`}
                      >
                        <Link
                          to={`/products/${product.id}`}
                          className="text-[20px] text-blue-dark leading-6 font-josefin font-bold"
                        >
                          {product.name}
                        </Link>
                        <div>
                          <StarRating rating={product.rating} />
                        </div>
                      </div>
                      <div
                        className={`${
                          listView === "Standart"
                            ? "flex gap-[17px] items-center"
                            : "flex items-center gap-[15px]"
                        }`}
                      >
                        <div className="text-[16px] text-blue-dark leading-5 font-normal font-josefin ">
                          ${product.price}
                        </div>
                        <div className="text-gray-3  line-through text-[14px] leading-4 font-josefin font-normal">
                          ${product.oldPrice}
                        </div>
                      </div>
                      <p
                        className={`leading-5 text-[16px] text-gray-3 font-normal font-lato ${
                          listView === "Standart" ? "" : "mt-[24px] mb-[16px]"
                        }`}
                      >
                        {product.description}
                      </p>
                    </div>
                    <ul className="flex gap-[24px]">
                      <li
                        className="cursor-pointer"
                        onClick={() => addToCart(product)}
                      >
                        <img src={cardProd} alt="card" />
                      </li>

                      <li
                        className="cursor-pointer"
                        onClick={() => addToWishlist(product)}
                      >
                        <img src={heartProd} alt="heart" />
                      </li>
                      <li className="cursor-pointer">
                        <img src={loopProd} alt="loop" />
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="self-end max-sm:self-center">
              {[...Array(countOfPage)].map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => setPage(index + 1)}
                  className={`px-3 py-1 ${
                    page === index + 1
                      ? "bg-primary text-white"
                      : "text-blue-dark text-[16px] font-lato font-normal leading-5"
                  } rounded`}
                >
                  {index + 1}
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
