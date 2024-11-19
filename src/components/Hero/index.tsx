import Title from "../Base/Title";
import ParagraphText from "../Base/ParagraphText";
import Button from "../Base/Button";
import Image from "next/image";
import Script from "next/script";
import { MotionDiv } from "../MotionDiv";
import {
  heroTitle,
  herDesc,
  heroBtns,
  heroImage,
} from "../../../utils/variants";
const Hero = () => {
  return (
    <>
      <canvas
        id="animation_bg"
        className="absolute w-full h-full bg-black opacity-30"
      />
      <div>
        <div className="container items-center md:flex md:justify-between">
          <div className="md:max-w-[60%] text-center md:text-start md:pt-16">
            <MotionDiv
              variants={heroTitle}
              initial="hiden"
              animate="visible"
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0 }}
              className="pt-5 xs:pt-20 md:pt-0"
            >
              <Title
                title="Power Your Applications with Reliable Cloud Hosting"
                className="text-4xl md:text-5xl text-white font-bold relative before:absolute before:-top-10 before:lg:-top-8 xs:before:content-[url('/images/before-title.svg')] before-title xl:before:-left-[6%] lg:before:-left-[5%] md:before:left-[16%] sm:before:-left-[7%] before:left-[-5%]  sm:flex"
              />
            </MotionDiv>
            <MotionDiv
              variants={herDesc}
              initial="hiden"
              animate="visible"
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <ParagraphText
                text="Seamless, scalable, and secure cloud hosting solutions designed to keep your applications running smoothly."
                className="text-white text-lg md:text-xl mt-8 lg:max-w-[80%]"
              />
            </MotionDiv>
            <div className="hidden sm:flex items-center gap-x-5">
              <MotionDiv
                variants={heroBtns}
                initial="hiden"
                animate="visible"
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Button
                  text="Explore Solutions"
                  bgColor="transparent"
                  className="relative z-50 text-white mt-10 border-primary text-center rounded-xl mx-auto lg:mx-0 w-fit border-solid border-2 hover:!bg-primary hover:!border-white duration-500"
                />
              </MotionDiv>
              <MotionDiv
                variants={heroBtns}
                initial="hiden"
                animate="visible"
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <Button
                  text="Get Started"
                  bgColor="transparent"
                  className="relative z-50 text-white mt-10 border-primary text-center rounded-xl mx-auto lg:mx-0 w-fit border-solid border-2 hover:!bg-primary hover:!border-white duration-500"
                />
              </MotionDiv>
            </div>
          </div>

          <MotionDiv
            variants={heroImage}
            initial="hiden"
            animate="visible"
            transition={{ delay: 0.25, duration: 0.5 }}
            className="max-sm:mt-4 flex justify-center"
          >
            <img
              src="/images/hero_photo.webp"
              alt=""
              className="w-[60%] md:w-[80%] sm:ml-12 rounded-3xl border-2 border-primary border-dashed"
            />
          </MotionDiv>
          <div className="max-sm:flex hidden items-center gap-x-5">
            <Button
              text="Explore Solutions"
              bgColor="transparent"
              className="relative  text-white mt-10 border-primary text-center rounded-xl mx-auto lg:mx-0 w-fit border-solid border-2 hover:!bg-primary hover:!border-white duration-500"
            />
            <Button
              text="Get Started"
              bgColor="transparent"
              className="relative  text-white mt-10 border-primary text-center rounded-xl mx-auto lg:mx-0 w-fit border-solid border-2 hover:!bg-primary hover:!border-white duration-500"
            />
          </div>
        </div>
      </div>
      <Script src="/js/waves.js" />
    </>
  );
};

export default Hero;
