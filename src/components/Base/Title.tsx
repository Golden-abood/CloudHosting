import { ClassNameValue } from "tailwind-merge";

type TitleProp = {
  title: string;
  className?: ClassNameValue;
  active?: boolean;
};

const style: React.CSSProperties = {
  background: "linear-gradient(54deg, #ffd5a6 15.02%, #ec912a 82.83%)",
  backgroundClip: "text",
  // @ts-ignore
  "-webkitBackgroundClip": "text",
  "-webkitTextFillColor": "transparent",
};

const Title = ({ title, className, active = false }: TitleProp) => {
  return (
    <h2
      className={"text-white !font-bold " + className}
      style={active ? style : {}}
    >
      {title}
    </h2>
  );
};

export default Title;
