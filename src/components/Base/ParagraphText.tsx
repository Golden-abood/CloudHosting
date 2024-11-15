import { ClassNameValue } from "tailwind-merge";

type ParagraphTextProps = {
  text: string;
  className?: ClassNameValue;
};

const ParagraphText = ({ text, className }: ParagraphTextProps) => {
  return (
    <p className={"font-normal text-white opacity-[0.87] " + className}>
      {text}
    </p>
  );
};

export default ParagraphText;
