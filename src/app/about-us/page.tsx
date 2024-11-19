import AboutUsCard from "@/components/AboutUs/Card";
import ParagraphText from "@/components/Base/ParagraphText";
import Title from "@/components/Base/Title";
import Image from "next/image";
import Ready from "@/components/Ready";
import { MotionDiv } from "@/components/MotionDiv";
import {
  aboutHero,
  aboutRightImage,
  aboutLeftImage,
  missionCard,
  visionCard,
} from "../../../utils/variants";

const aboutPage = () => {
  return (
    <div className="bg-black overflow-hidden">
      <div className="container pt-48 pb-32 relative about_gradient">
        <MotionDiv
          variants={aboutHero}
          initial="hiden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="text-center pb-40 relative z-10"
        >
          <Title
            title="Lorem ipsum dolor sit amet, consetetur sa"
            className="text-3xl md:text-5xl"
          />
          <ParagraphText
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
            className="pt-6 text-lg md:max-w-[58%] mx-auto"
          />
        </MotionDiv>
        <div className="md:flex items-center justify-between relative">
          <MotionDiv
            variants={missionCard}
            initial="hiden"
            whileInView="visible"
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className="md:max-w-[50%] text-center md:text-start"
          >
            <Title title="Our Mission" active={true} className="text-2xl" />
            <Title
              title="We are proud of our products"
              className="text-3xl md:text-5xl pt-6 indent-1"
            />
            <ParagraphText
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, "
              className="py-3 mt-7"
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
            className="md:w-[35%]"
          >
            <Image
              width="308"
              className="relative mx-auto md:mx-0 mt-5 md:mt-0"
              src="/images/About/photo-1.svg"
              alt="photo"
              height={0}
            />
          </MotionDiv>
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
            <Image
              width="429"
              className="relative"
              src="/images/About/photo-2.svg"
              alt="photo"
              height={0}
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
            <Title title="Our Vision" active={true} className="text-2xl" />
            <Title
              title="We are proud of our products"
              className="text-3xl md:text-5xl pt-6 indent-1"
            />
            <ParagraphText
              text="Bridge stands as a promise, not just a platform. It guarantees that your model reaches your vast user base, complemented by an intuitive UI. With state-of-the-art concept, system design, infrastructure, security, and devops, Bridge is always ready for uninterrupted feature integration. It offers models administrators a comprehensive panel to monitor user satisfaction and usage, easily enable/disable models or versions, upload new model iterations with zero downtime, and provides integrated license, billing, and subscription management to let admins give access to end customers over their modules."
              className="py-3 mt-7"
            />
          </MotionDiv>
          <div className="md:w-[35%] md:hidden mt-5 md:mt-0">
            <Image
              width="429"
              className="relative mx-auto"
              src="/images/About/photo-2.svg"
              alt="photo"
              height={0}
            />
          </div>
        </div>
      </div>
      <AboutUsCard />
      <section className="py-40 relative container">
        <div className="gradient_ready">
          <Ready />
        </div>
      </section>
    </div>
  );
};

export default aboutPage;
