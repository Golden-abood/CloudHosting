type InputProps = {
  placeholder: string;
  classes?: string;
};
const Input = ({ placeholder, classes }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={
        "bg-transparent opacity-80 p-4 text-white text-base font-normal border-b-[1px] border-b-solid border-b-white" +
        classes
      }
    />
  );
};

export default Input;
