import { useProducts } from "../hooks/useProducts";

const Trend = () => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products</div>;
  return (
    <section className="py-[100px] flex flex-col justify-center items-center">
      <h2 className="text-blue-dark max-[400px]:text-[33px] ledaing-[52px] mb-[24px] text-[44px] font-bold font-josefin">
        Trending Products
      </h2>
      <ul className="flex gap-[32px] max-2xl:flex-wrap max-2xl:justify-center max-2xl:items-center">
        {products
          ?.slice(0, 4)
          .reverse()
          .map((product) => {
            return (
              <div
                className="w-[304px] h-[344px] shadow-xl px-[16px] pt-[16px] transition-all hover:shadow-2xl hover:translate-y-[-20px]"
                key={product.name}
              >
                <img
                  className="w-full h-[232px]"
                  src={product.img}
                  alt={product.name}
                />
                <div className="flex flex-col gap-[8px]  items-center">
                  <div className="text-primary font-bold mt-[24px] text-[16px] leading-5 font-josefin">
                    {product.name}
                  </div>
                  <div className="flex  items-center justify-center mb-[24px] gap-[8px]">
                    <div className="text-blue-dark font-bold text-[16px] leading-5 font-josefin">
                      ${product.price}
                    </div>
                    <div className="line-through text-gray-3 text-[14px] leading-4 font-josefin font-normal">
                      ${product.oldPrice}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </ul>
    </section>
  );
};

export default Trend;
