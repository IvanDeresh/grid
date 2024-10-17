import { useState } from "react";
import Button from "../components/Button";
import { categorie } from "../constant";

const Categories = () => {
  const [categorieName, setCategroieaName] = useState("");
  return (
    <section className="max-container flex flex-col gap-[48px] items-center py-[100px]">
      <h2 className="leading-[52px] max-[400px]:text-[33px] font-josefin font-bold text-[44px] flex text-center text-blue-dark">
        Top Categories
      </h2>
      <ul className="flex w-full justify-evenly max-2xl:flex-wrap max-2xl:gap-[32px]">
        {categorie.map((categ) => (
          <li
            key={categ.name}
            onMouseLeave={() => setCategroieaName("")}
            className={` hover:translate-y-[-24px] relative transition-all ${
              categorieName === categ.name && "hover:translate-y-[-24px]"
            } `}
            onMouseEnter={() => setCategroieaName(categ.name)}
          >
            <a
              className="flex  justify-center items-center gap-[32px] flex-col"
              href="#"
            >
              <img
                src={categ.img}
                alt="img"
                className="w-[272px] shadow-lg hover:shadow-xl transition-all relative h-[272px] rounded-full"
              />
              <div
                className={`absolute bottom-[100px] animate-fromBottom transition-all ${
                  categ.name == categorieName ? "block" : "hidden"
                }`}
              >
                <Button label="View category" bgColor="bg-success" />
              </div>
              <p className="leading-[24px] text-[20px]  font-bold font-josefin text-blue-dark">
                {categ.name}
              </p>
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex mt-[60px] gap-[18px]">
        <li
          onClick={() => setCategroieaName("Perfume")}
          className={`${
            categorieName === "Perfume" ? "bg-primary" : "bg-white"
          } w-[8px] h-[8px] cursor-pointer rounded-full border border-primary`}
        ></li>
        <li
          onClick={() => setCategroieaName("Present box")}
          className={`${
            categorieName === "Present box" ? "bg-primary" : "bg-white"
          } w-[8px] h-[8px] cursor-pointer rounded-full border border-primary`}
        ></li>
        <li
          onClick={() => setCategroieaName("Bracelet")}
          className={`${
            categorieName === "Bracelet" ? "bg-primary" : "bg-white"
          } w-[8px] h-[8px] cursor-pointer rounded-full border border-primary`}
        ></li>
        <li
          onClick={() => setCategroieaName("Ring")}
          className={`${
            categorieName === "Ring" ? "bg-primary" : "bg-white"
          } w-[8px] h-[8px] cursor-pointer rounded-full border border-primary`}
        ></li>
      </ul>
    </section>
  );
};

export default Categories;
