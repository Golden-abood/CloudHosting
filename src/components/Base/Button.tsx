import { ClassNameValue } from "tailwind-merge";

type PropsType = {
  text: string;
  className?: ClassNameValue;
  block?: boolean;
  bgColor?: string;
};
const Button = ({
  text,
  className,
  bgColor = "white",
  block = false,
}: PropsType) => {
  return (
    <button
      className={
        block
          ? "w-full" +
            "text-center cursor-pointer font-bold py-4 px-10 rounded-xl relative " +
            className
          : "w-fit" +
            "text-center font-bold py-4 cursor-pointer px-10 rounded-xl relative " +
            className
      }
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
};

export default Button;
