import React from "react";
import Title from "./Base/Title";
import ParagraphText from "./Base/ParagraphText";
import Button from "./Base/Button";
import { MotionDiv } from "./MotionDiv";
import {
  aboutLeftImage,
  aboutRightImage,
  arrow,
  missionCard,
  solutionTitle,
  visionCard,
} from "../../utils/variants";

const BridgeStory = () => {
  return (
    <div className="container pt-20 lg:pt-8">
      <MotionDiv
        variants={solutionTitle}
        initial="hiden"
        whileInView="visible"
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <Title
          title="Unlocking the Full Potential of AI Models – Step by Step"
          className="text-2xl md:text-3xl text-center md:text-start"
        />
      </MotionDiv>
      <div className="container pt-10">
        <div>
          <Title
            title="Phase 1"
            active={true}
            className="text-2xl text-center md:text-start"
          />
          <div className="md:flex items-center justify-between relative">
            <MotionDiv
              variants={missionCard}
              initial="hiden"
              whileInView="visible"
              transition={{
                ease: "easeInOut",
                duration: 0.5,
              }}
              className="md:max-w-[50%] text-center md:text-start"
            >
              <Title
                title="Engineers and Data Scientists in Diverse Fields"
                className="text-3xl lg:text-5xl pt-5"
              />
              <Title
                title="For AI innovators pushing boundaries in sectors from finance to healthcare, our platform offers the tools to take machine learning models from concept to impactful solutions. When they’re ready to scale, Bridge provides the infrastructure needed to unlock their models’ potential for a broader audience."
                className="py-3 mt-5 md:mt-0"
              />
            </MotionDiv>
            <img
              src="/images/Arrow-02.svg"
              className="absolute w-[25%] top-[50%] lg:top-[37%] left-[42%] lg:left-[40%] hidden md:block"
            />
            <MotionDiv
              variants={aboutRightImage}
              initial="hiden"
              whileInView="visible"
              transition={{
                ease: "easeInOut",
                duration: 0.5,
              }}
              className="md:w-[35%] relative bridge_story_gradi"
            >
              <img
                className="relative w-[350px] border-primary border-2 rounded-2xl mx-auto mt-5 md:mt-0"
                src="/images/phase_1.png"
              />
            </MotionDiv>
          </div>
        </div>
        <div className="md:flex items-center lg:items-start justify-between pt-32">
          <MotionDiv
            variants={aboutLeftImage}
            initial="hiden"
            whileInView="visible"
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="md:w-[35%] hidden md:block"
          >
            <img
              className="relative w-[350px] border-primary border-2 rounded-2xl mx-auto"
              src="/images/phase_2.png"
            />
          </MotionDiv>
          <MotionDiv
            variants={visionCard}
            initial="hiden"
            whileInView="visible"
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="md:max-w-[50%] text-center md:text-start"
          >
            <Title title="Phase 2" active={true} className="text-2xl" />
            <Title
              title="More than Just a Platform – A Bridge to Success"
              className="text-3xl lg:text-5xl pt-5"
            />
            <ParagraphText
              text="Bridge ensures that your model reaches end-users with ease and efficiency. With an intuitive interface, real-time performance monitoring, and seamless feature integration, administrators can manage model versions, update features without downtime, and provide user-specific access with integrated billing and subscriptions."
              className="py-3 mt-5 md:mt-0"
            />
          </MotionDiv>
          <MotionDiv
            variants={aboutLeftImage}
            initial="hiden"
            whileInView="visible"
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="md:w-[35%] md:hidden mt-5 md:mt-0"
          >
            <img
              className="relative w-[350px] border-primary border-2 rounded-2xl mx-auto"
              src="/images/phase_2.png"
            />
          </MotionDiv>
        </div>
        <div className="md:flex items-center lg:items-start justify-between pt-32 relative">
          <MotionDiv
            variants={missionCard}
            initial="hiden"
            whileInView="visible"
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="md:max-w-[50%] text-center md:text-start"
          >
            <Title title="Phase 3" active={true} className="text-2xl" />
            <Title
              title="A Streamlined Experience for End Users"
              className="text-3xl lg:text-5xl pt-5"
            />
            <ParagraphText
              text="End-users seek simplicity and reliability, and Bridge delivers just that. They can quickly access the model, enjoy its benefits, and even provide feedback to drive further improvements. This closes the loop, ensuring that both technical users and end users benefit from a seamless experience."
              className="py-3 mt-5 md:mt-0"
            />
          </MotionDiv>
          <MotionDiv
            variants={arrow}
            initial="hiden"
            whileInView="visible"
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            <img
              src="/images/arrow-left-2.svg"
              className="absolute w-[7%] top-[20%] left-[55%] hidden md:block"
            />
          </MotionDiv>
          <MotionDiv
            variants={aboutRightImage}
            initial="hiden"
            whileInView="visible"
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="md:w-[35%] mt-5 md:mt-0"
          >
            <img
              className="relative w-[350px] border-primary border-2 rounded-2xl mx-auto"
              src="/images/phase_3.png"
            />
          </MotionDiv>
        </div>
        <Button
          text="Discover More"
          bgColor="#ec912b"
          className="mt-5 text-center md:text-start"
        />
      </div>
    </div>
  );
};

export default BridgeStory;
