import ParagraphText from "@/components/Base/ParagraphText";
import Title from "@/components/Base/Title";
import { ClassNameValue } from "tailwind-merge";
import { MotionDiv } from "./MotionDiv";
import { solutionTitle } from "../../utils/variants";

const Ready = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: ClassNameValue;
}) => {
  return (
    <MotionDiv
      variants={solutionTitle}
      initial="hiden"
      whileInView="visible"
      whileHover="hover"
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className={"mx-auto text-center md:max-w-[70%] relative " + className}
    >
      <Title
        title="Are you ready to grow your business with us?"
        className="text-3xl md:text-6xl relative z-10"
      />
      <ParagraphText
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
    "
        className="mt-6 text-base relative z-10"
      />
      <div className="relative z-10">{children}</div>
    </MotionDiv>
  );
};

export default Ready;
