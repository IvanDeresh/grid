const DiscountComponent = ({ image }: { image: string }) => {
  return (
    <div className="relative max-w-[550px] max-h-[500px]">
      <div className="absolute bg-gray-1 w-[362px] h-[362px] right-[-50px] rounded-full z-10 max-2xl:hidden"></div>
      <div className="absolute  bg-gray-2 w-[472px] h-[472px] rounded-full z-20 bottom-[-20px] right-[-30px] max-2xl:hidden"></div>
      <div className="z-30 relative right-[-70px] max-2xl:right-0">
        <img className="z-30 relative" src={image} alt="image" />
      </div>
    </div>
  );
};

export default DiscountComponent;
