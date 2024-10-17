import React from "react";

export interface CheckboxProps {
  disabled?: boolean;
  defaultChecked?: boolean;
  id: string;
  label: string;
  bgColor: string;
  activeColor: string;
  value: string | number;
  setState:
    | React.Dispatch<React.SetStateAction<string[]>>
    | React.Dispatch<React.SetStateAction<number[]>>;
}

const Checkbox = (props: CheckboxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setState((prev: any) => {
      console.log(prev);
      return prev.includes(props.value)
        ? prev.filter((item: any) => item !== props.value)
        : [...prev, props.value];
    });
  };

  return (
    <div className="w-auto flex gap-2 cursor-pointer">
      <input
        className={`${props.bgColor}
          peer relative appearance-none shrink-0 w-4 h-4 outline-none rounded-sm mt-1
          checked:${props.activeColor} disabled:${props.bgColor}`}
        type="checkbox"
        id={props.id}
        onChange={handleChange}
      />
      <svg
        className="absolute w-3 h-3 ml-[2px] peer-checked:self-center pointer-events-none hidden peer-checked:flex stroke-white mt-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <label
        className="text-gray-3 leading-5 font-lato font-normal text-[16px]"
        htmlFor={props.id}
      >
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;
