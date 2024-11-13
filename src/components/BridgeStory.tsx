import React from "react";
import Title from "./Base/Title";
import ParagraphText from "./Base/ParagraphText";
import Button from "./Base/Button";

const BridgeStory = () => {
  return (
    <div className="container pt-20 lg:pt-8">
      <Title
        title="Unlocking the Full Potential of AI Models – Step by Step"
        classes="text-2xl md:text-3xl text-center md:text-start"
      />
      <div className="container pt-10">
        <Title
          title="Phase 1"
          active={true}
          classes="text-2xl text-center md:text-start"
        />
        <div className="md:flex items-center justify-between relative">
          <div className="md:max-w-[50%] text-center md:text-start">
            <Title
              title="Engineers and Data Scientists in Diverse Fields"
              classes="text-3xl lg:text-5xl pt-5"
            />
            <Title
              title="For AI innovators pushing boundaries in sectors from finance to healthcare, our platform offers the tools to take machine learning models from concept to impactful solutions. When they’re ready to scale, Bridge provides the infrastructure needed to unlock their models’ potential for a broader audience."
              classes="py-3 mt-5 md:mt-0"
            />
          </div>
          <img
            src="/images/Arrow-02.svg"
            className="absolute w-[25%] top-[50%] lg:top-[37%] left-[42%] lg:left-[40%] hidden md:block"
          />
          <div className="md:w-[35%] relative gradi">
            <img
              className="relative w-[350px] border-primary border-2 rounded-2xl mx-auto mt-5 md:mt-0"
              src="/images/phase_1.png"
            />
          </div>
        </div>
        <div className="md:flex items-center lg:items-start justify-between pt-32">
          <div className="md:w-[35%] hidden md:block">
            <img
              className="relative w-[350px] border-primary border-2 rounded-2xl mx-auto"
              src="/images/phase_2.png"
            />
          </div>
          <div className="md:max-w-[50%] text-center md:text-start">
            <Title title="Phase 2" active={true} classes="text-2xl" />
            <Title
              title="More than Just a Platform – A Bridge to Success"
              classes="text-3xl lg:text-5xl pt-5"
            />
            <ParagraphText
              text="Bridge ensures that your model reaches end-users with ease and efficiency. With an intuitive interface, real-time performance monitoring, and seamless feature integration, administrators can manage model versions, update features without downtime, and provide user-specific access with integrated billing and subscriptions."
              classes="py-3 mt-5 md:mt-0"
            />
          </div>
          <div className="md:w-[35%] md:hidden mt-5 md:mt-0">
            <img
              className="relative w-[350px] border-primary border-2 rounded-2xl mx-auto"
              src="/images/phase_2.png"
            />
          </div>
        </div>
        <div className="md:flex items-center lg:items-start justify-between pt-32 relative">
          <div className="md:max-w-[50%] text-center md:text-start">
            <Title title="Phase 3" active={true} classes="text-2xl" />
            <Title
              title="A Streamlined Experience for End Users"
              classes="text-3xl lg:text-5xl pt-5"
            />
            <ParagraphText
              text="End-users seek simplicity and reliability, and Bridge delivers just that. They can quickly access the model, enjoy its benefits, and even provide feedback to drive further improvements. This closes the loop, ensuring that both technical users and end users benefit from a seamless experience."
              classes="py-3 mt-5 md:mt-0"
            />
          </div>
          <img
            src="/images/arrow-left-2.svg"
            className="absolute w-[7%] top-[20%] left-[55%] hidden md:block"
          />
          <div className="md:w-[35%] mt-5 md:mt-0">
            <img
              className="relative w-[350px] border-primary border-2 rounded-2xl mx-auto"
              src="/images/phase_3.png"
            />
          </div>
        </div>
        <Button
          text="Discover More"
          bgColor="#ec912b"
          classes="mt-5 text-center md:text-start"
        />
      </div>
    </div>
  );
};

export default BridgeStory;