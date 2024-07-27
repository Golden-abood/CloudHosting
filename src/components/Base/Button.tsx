type PropsType = {
  text: string;
  classes?: string;
  block?: boolean;
  bgColor?: string;
};
const Button = ({
  text,
  classes,
  bgColor = "white",
  block = false,
}: PropsType) => {
  return (
    <button
      className={
        block
          ? "w-full" +
            "text-center cursor-pointer font-bold py-4 px-10 rounded-xl relative " +
            classes
          : "w-fit" +
            "text-center font-bold py-4 cursor-pointer px-10 rounded-xl relative " +
            classes
      }
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
};

export default Button;
