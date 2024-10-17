import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="flex bg-center bg-cover justify-center items-center py-[112px] bg-custom-pattern bg-no-repeat  max-container">
      <div className="max-w-[768px] flex flex-col items-center gap-[60px]">
        <h2 className="leading-[52px] max-[400px]:text-[33px] font-josefin font-bold text-[44px] flex text-center text-blue-dark">
          Get Latest Update By Subscribe 0ur Newsletter
        </h2>
        <Button bgColor="bg-primary" label="Subscribe" />
      </div>
    </section>
  );
};

export default Subscribe;
