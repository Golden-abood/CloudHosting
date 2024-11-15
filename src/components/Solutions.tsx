import Image from "next/image";
import Title from "./Base/Title";
import ParagraphText from "./Base/ParagraphText";
import { solutions } from "../../constants";

const Solutions = () => {
  const backGradient = {
    background:
      "linear-gradient( 180deg , rgba(50, 49, 49, 0.7) 0%, rgba(50, 49, 49, 0) 100%)",
  };
  return (
    <div className="relative gradient">
      <Title
        title="Our solutions common values"
        className="flex justify-center text-3xl md:text-5xl mb-16 container relative !blur-0"
      />

      <div
        className="container overflow-hidden relative py-20 back-gradient rounded-tl-[67px] rounded-tr-[67px] rounded-bl-[62px] rounded-br-[62px] border-primary border-[1px] border-solid"
        style={backGradient}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-center">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="rounded-[20px] py-10 px-4 hover:border-solid hover:border-[1px] hover:border-primary duration-300"
            >
              <div className="relative">
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={48}
                  height={48}
                  className={`mx-auto mb-4 ${i === 0 ? "w-12" + "" : "w-14"}`}
                />

                <Title title={s.title} className="text-2xl mb-4" />

                <ParagraphText text={s.body} className="text-base text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
