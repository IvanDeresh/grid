import { Product } from "../types";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useWishlist } from "../hooks/useWishList";

const WishList = () => {
  const { wishlist, addToWishlist, removeFromWishlist, clearWishlist } =
    useWishlist();
  const totalPrice = wishlist?.reduce(
    (acc, cur) => acc + Number(cur.price) * (cur.quantity || 1),
    0
  );

  return (
    <div className="">
      {wishlist.length !== 0 ? (
        <div className="flex max-xl:flex-col max-xl:items-center justify-center gap-[145px] my-[104px]">
          <div className="w-auto max-w-[640px]">
            {wishlist?.map((product: Product) => (
              <div
                key={product.id}
                className="flex max-sm:flex-col max-sm:border-blue-dark max-sm:border-b-2 max-sm:h-auto items-center max-sm:w-auto w-[640px] gap-[16px] h-[104px] mb-[24px] pb-[16px]"
              >
                <div className="min-h-[104px] min-w-[149px]">
                  <img
                    src={product.img}
                    alt="img"
                    className="h-[104px] w-[149px] max-sm:w-[280px] max-sm:h-[200px] object-cover"
                  />
                </div>

                <div className="flex max-sm:flex-col max-sm:items-center max-sm:gap-[32px]  justify-between w-[70%]">
                  <div className="flex flex-col justify-between max-sm:gap-[16px] max-sm:items-center">
                    <h2 className="font-bold text-blue-dark text-[22px] leading-7">
                      {product.name}
                    </h2>
                    <p className="text-blue-dark text-[16px] font-normal font-josefin leading-5">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex max-sm:flex-col items-center justify-between gap-[24px]">
                    <div className="flex items-center gap-[12px] border w-[120px] h-[40px] rounded-lg border-gray-2 justify-center">
                      <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="px-[8px] py-[4px] text-[18px] text-blue-dark"
                      >
                        -
                      </button>
                      <div className="text-[16px] font-normal font-lato text-blue-dark">
                        {product.quantity}
                      </div>
                      <button
                        onClick={() => addToWishlist(product)}
                        className="px-[8px] py-[4px] text-[18px] text-blue-dark"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-[16px] font-normal font-josefin text-blue-dark">
                      ${(product.price * (product.quantity || 1)).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-[30%] items-center gap-[32px]">
            <div className="h-[254px] w-[304px] max-w-[304px] bg-gray-1 p-[24px] flex flex-col items-center">
              <div className="text-[16px] leading-5 font-lato font-bold text-blue-dark border-b-[1px] border-b-gray-2 py-[16px] flex justify-between w-full">
                <span>Subtotal:</span>
                <span>${totalPrice ? totalPrice.toFixed(2) : "0.00"}</span>
              </div>
              <div className="text-[16px] leading-5 font-lato font-bold text-blue-dark border-b-[1px] border-b-gray-2 py-[16px] flex justify-between w-full">
                <span>Total:</span>
                <span>
                  ${totalPrice ? (totalPrice + 100).toFixed(2) : "100.00"}
                </span>
              </div>
              <div className="text-[14px] leading-4 font-lato font-normal mt-[16px] mb-[32px] text-gray-3 flex justify-between w-full">
                <span>Shipping:</span>
                <span>$100</span>
              </div>
              <Button bgColor="bg-primary" label="Proceed to checkout" />
            </div>
            <div
              className="text-primary font-normal font-lato text-[16px] leading-5 cursor-pointer"
              onClick={clearWishlist}
            >
              Clear cart
            </div>
          </div>
        </div>
      ) : (
        <div className="my-[80px] flex flex-col items-center">
          <h2 className="text-blue-dark ledaing-[52px] max-md:text-[33px] max-sm:text-[24px] mb-[24px] text-[44px] font-bold font-josefin">
            Your wishlist is empty
          </h2>
          <Link to="/products">
            <Button label="Start Shopping" bgColor="bg-primary" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default WishList;
