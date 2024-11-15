import { ClassNameValue } from "tailwind-merge";

type InputProps = {
  placeholder: string;
  className?: ClassNameValue;
};
const Input = ({ placeholder, className }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={
        "bg-transparent opacity-80 p-4 text-white text-base font-normal border-b-[1px] border-b-solid border-b-white focus:outline-0 " +
        className
      }
    />
  );
};

export default Input;
