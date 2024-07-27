import Title from "../Base/Title";
import ParagraphText from "../Base/ParagraphText";
import Button from "../Base/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* <canvas
        id="animation_bg"
        className="absolute w-full h-full bg-black opacity-50"
      /> */}
      <div>
        <div className="container items-center lg:flex lg:justify-between">
          <div className="lg:max-w-[60%] text-center lg:text-start lg:pt-16">
            <div className="pt-20 md:pt-0">
              <Title
                title="Bridge the ML production gap wit Bridge!"
                classes="text-4xl md:text-5xl text-white font-bold relative before:absolute before:-top-10 before:lg:-top-8 before:content-[url('/images/before-title.svg')] before-title xl:before:-left-[6%] lg:before:-left-[5%] md:before:left-[16%] sm:before:-left-[7%] before:left-[-5%]  sm:flex"
              />
            </div>
            <ParagraphText
              text="Take your ML models from conception to widespread use effortlessly.
          Deploy, manage, monitor, and ensure correct and friendly usage with
          CalibroAI ..."
              classes="text-white text-lg md:text-xl mt-8 lg:max-w-[80%]"
            />
            <Button
              text="Learn More"
              bgColor="transparent"
              classes="relative z-50 text-white mt-10 border-primary text-center rounded-xl mx-auto lg:mx-0 w-fit border-solid border-[1px]"
            />
          </div>

          <div className="relative z-50 flex-col items-center justify-center mt-16 lg:mr-20 lg:mt-0 gradient">
            <Image
              width="250"
              className="relative mx-auto z-3 -mb-36 animate-move"
              alt="icon"
              src="/images/arrow-up.png"
              height={0}
            />

            <Image
              width="220"
              className="relative z-10 mx-auto -mb-12"
              alt="icon"
              src="/images/brain-2.png"
              height={0}
            />
            <Image
              width="280"
              className="relative mx-auto lg:mx-0"
              alt="icon"
              src="/images/floor.png"
              height={0}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
