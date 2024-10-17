const Button = ({ label, bgColor }: { label: string; bgColor: string }) => {
  return (
    <button
      className={`flex hover:translate-y-[-2px] active:translate-y-[1px] transition-all justify-center items-center px-[16px] py-[11px] text-white max-w-fit ${bgColor} rounded-lg`}
    >
      {label}
    </button>
  );
};

export default Button;
