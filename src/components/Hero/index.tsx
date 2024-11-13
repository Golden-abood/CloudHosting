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
        <div className="container items-center md:flex md:justify-between">
          <div className="md:max-w-[60%] text-center md:text-start md:pt-16">
            <div className="pt-5  xs:pt-20 md:pt-0">
              <Title
                title="Power Your Applications with Reliable Cloud Hosting"
                classes="text-4xl md:text-5xl text-white font-bold relative before:absolute before:-top-10 before:lg:-top-8 xs:before:content-[url('/images/before-title.svg')] before-title xl:before:-left-[6%] lg:before:-left-[5%] md:before:left-[16%] sm:before:-left-[7%] before:left-[-5%]  sm:flex"
              />
            </div>
            <ParagraphText
              text="Seamless, scalable, and secure cloud hosting solutions designed to keep your applications running smoothly."
              classes="text-white text-lg md:text-xl mt-8 lg:max-w-[80%]"
            />
            <div className="hidden sm:flex items-center gap-x-5">
              <Button
                text="Explore Solutions"
                bgColor="transparent"
                classes="relative z-50 text-white mt-10 border-primary text-center rounded-xl mx-auto lg:mx-0 w-fit border-solid border-2 hover:!bg-primary hover:!border-white duration-500"
              />
              <Button
                text="Get Started"
                bgColor="transparent"
                classes="relative z-50 text-white mt-10 border-primary text-center rounded-xl mx-auto lg:mx-0 w-fit border-solid border-2 hover:!bg-primary hover:!border-white duration-500"
              />
            </div>
          </div>

          <div className="max-sm:mt-4 flex justify-center">
            <img
              src="/images/hero_photo.webp"
              alt=""
              className="w-[60%] md:w-[80%] sm:ml-12 rounded-3xl border-2 border-primary border-dashed"
            />
          </div>
          <div className="max-sm:flex hidden items-center gap-x-5">
            <Button
              text="Explore Solutions"
              bgColor="transparent"
              classes="relative z-50 text-white mt-10 border-primary text-center rounded-xl mx-auto lg:mx-0 w-fit border-solid border-2 hover:!bg-primary hover:!border-white duration-500"
            />
            <Button
              text="Get Started"
              bgColor="transparent"
              classes="relative z-50 text-white mt-10 border-primary text-center rounded-xl mx-auto lg:mx-0 w-fit border-solid border-2 hover:!bg-primary hover:!border-white duration-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
