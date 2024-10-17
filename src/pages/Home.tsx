import Apartments from "../sections/Apartments";
import Categories from "../sections/Categories";
import Discount from "../sections/Discount";
import Feature from "../sections/Feature";
import Hero from "../sections/Hero";
import Leatest from "../sections/Leatest";
import Subscribe from "../sections/Subscribe";
import Trend from "../sections/Trend";
import Unique from "../sections/Unique";

const Home = () => {
  return (
    <div className="w-full max-container">
      <Hero />
      <Feature />
      <Leatest />
      <Unique />
      <Trend />
      <Discount />
      <Categories />
      <Subscribe />
      <Apartments />
    </div>
  );
};

export default Home;
