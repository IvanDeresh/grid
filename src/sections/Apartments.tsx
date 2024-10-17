import { pencil, calendar } from "../assets/img";
import { blogs } from "../constant";
import { Link } from "react-router-dom";
interface Blog {
  img: string;
  name: string;
  description: string;
  date: string;
  title: string;
}
const Apartments = () => {
  return (
    <section className="max-container flex flex-col items-center my-[100px] ">
      <h2 className="leading-[52px] max-[400px]:text-[33px] text-[44px] font-bold font-josefin text-blue-dark">
        Leatest blog
      </h2>
      <ul className="flex justify-center max-sm:p-[16px] gap-[32px] mt-[72px] max-2xl:flex-wrap">
        {blogs.map((blog: Blog) => (
          <li
            key={blog.name}
            className="max-w-[416px] h-[475px] shadow-xl transition-all hover:shadow-2xl hover:translate-y-[-20px]"
          >
            <img src={blog.img} alt="apart" className="rounded-xl" />
            <div className="pl-[18px]">
              <div className="flex gap-[64px] mb-[24px] mt-[16px]">
                <div className="flex gap-[8px]">
                  <img
                    src={pencil}
                    alt="pencial"
                    className="w-[16px] h-[16px]"
                  />
                  <span className="text-16px leading-4 text-gray-3 font-josefin font-normal">
                    {blog.name}
                  </span>
                </div>
                <div className="flex gap-[8px]">
                  <img
                    src={calendar}
                    alt="calendar"
                    className="w-[16px] h-[16px]"
                  />
                  <span className="text-16px leading-4 text-gray-3 font-josefin font-normal">
                    {blog.date}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] mb-[32px]">
                <span className="text-blue-dark font-semibold cursor-pointer font-josefin text-[16px] hover:text-primary">
                  {blog.title}
                </span>
                <span className="text-[16px] leading-5 font-lato font-normal text-gray-3">
                  {blog.description}
                </span>
              </div>
              <Link
                to="/blog"
                className="text-primary font-bold text-[16px] font-josefin leading-5"
              >
                Read more
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Apartments;
