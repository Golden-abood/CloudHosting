import Image from "next/image";
import ParagraphText from "../Base/ParagraphText";
import Title from "../Base/Title";
const items = [
  {
    title: "Why CalibroAI?",
    text: "At CalibroAI, we are a dedicated team of engineers and scientists who have collectively accumulated years of experience working with leading companies in the Manufacturing, Medical, Chemical, Finance and Tech industries. Throughout our careers, we have witnessed firsthand the immense potential of artificial intelligence (AI) in revolutionizing production processes, enhancing efficiency, and optimizing outcomes.",
  },
  {
    title: "What are we trying to solve?",
    text: "",
  },
  {
    title: "How do we solve this issue?",
    text: "",
  },
];
const AboutUsCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="py-12 bg-white gradient text-center md:text-start px-20 relative"
        >
          <Image
            className={
              i === 0
                ? "top-7 left-10 absolute w-16"
                : "top-3 left-11 md:left-5 absolute w-16"
            }
            src="/images/About/Highlight-05.svg"
            width={100}
            height={100}
            alt="Highlight"
          />
          <Title
            title={item.title}
            classes={
              i === 0
                ? "text-center text-2xl !text-primary"
                : "md:text-start text-2xl !text-primary"
            }
          />
          <ParagraphText
            text={item.text}
            classes="mx-auto text-lg leading-8 !text-[#030301] pt-2 !font-medium"
          />
        </div>
      ))}
    </div>
  );
};

export default AboutUsCard;
