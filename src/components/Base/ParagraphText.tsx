type ParagraphTextProps = {
  text: string;
  classes?: string;
};

const ParagraphText = ({ text, classes }: ParagraphTextProps) => {
  return (
    <p className={"font-normal text-white opacity-[0.87] " + classes}>{text}</p>
  );
};

export default ParagraphText;
