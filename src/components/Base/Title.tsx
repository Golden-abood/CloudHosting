type TitleProp = {
  title: string;
  classes?: string;
  active?: boolean;
};

const style: React.CSSProperties = {
  background: "linear-gradient(54deg, #ffd5a6 15.02%, #ec912a 82.83%)",
  backgroundClip: "text",
  "-webkitBackgroundClip": "text",
  "-webkitTextFillColor": "transparent",
};

const Title = ({ title, classes, active = false }: TitleProp) => {
  return (
    <h2
      className={"text-white !font-bold " + classes}
      style={active ? style : {}}
    >
      {title}
    </h2>
  );
};

export default Title;
