import Hero from "@/components/Hero/index";
import Solutions from "@/components/Solutions";
import Title from "@/components/Base/Title";
import Button from "@/components/Base/Button";
import ParagraphText from "@/components/Base/ParagraphText";
import Ready from "@/components/Ready";
import BridgeStory from "@/components/BridgeStory";
import { MotionDiv } from "@/components/MotionDiv";
import { descoverBtn, solutionTitle } from "../../utils/variants";

export default function Home() {
  // const cards = [
  //   {
  //     icon: "/images/pricing/icon-1.svg",
  //     title: "Regular",
  //     description: "Starter Plan",
  //     features: [
  //       "Limited Projects",
  //       "Regular Support Business",
  //       "1 month Free Trial",
  //       "3GB storage",
  //       "Ads Preview",
  //     ],
  //     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  //     price: "Free",
  //     desc: "For Limited Period",
  //   },
  //   {
  //     icon: "/images/pricing/icon-(10).svg",
  //     title: "Plantinum",
  //     description: "For the best results",
  //     features: [
  //       "Limited Projects",
  //       "Regular Support Business",
  //       "1 month Free Trial",
  //       "20GB storage",
  //       "Ads Preview",
  //     ],
  //     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  //     price: `${active.value ? "$342" : "500$"}`,
  //     desc: "For Limited Period",
  //   },
  //   {
  //     icon: "/images/pricing/icon-3.svg",
  //     title: "Standard",
  //     description: "Most popular",
  //     features: [
  //       "Limited Projects",
  //       "Regular Support Business",
  //       "1 month Free Trial",
  //       "10GB storage",
  //       "Ads Preview",
  //     ],
  //     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  //     price: `${active.value ? "234$" : "500$"}`,
  //     desc: "Billing Monthly",
  //   },
  // ];
  return (
    <div className="overflow-hidden">
      <section className="sm:py-8">
        <Hero />
      </section>
      <section className="pt-20 pb-2">
        <Solutions />
      </section>
      <section className="pt-40 pb-2">
        <MotionDiv
          variants={solutionTitle}
          initial="hiden"
          whileInView="visible"
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <Title
            title="Accelerate ML Model Deployment with Cloud-Powered Efficiency"
            className="hidden md:block text-center text-5xl"
          />
        </MotionDiv>
        <MotionDiv
          variants={solutionTitle}
          initial="hiden"
          whileInView="visible"
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="container "
        >
          <Title
            title="Accelerate ML Model Deployment with Cloud-Powered Efficiency"
            className="md:hidden text-center text-3xl"
          />
          <ParagraphText
            text="Bring your machine learning models to life with our cloud hosting platform designed specifically for scalable and reliable AI deployment. From seamless feature integration to real-time monitoring, our platform ensures your models reach peak performance with minimal hassle. Unlock the full potential of your models and deliver real value to your end users with enhanced security, fast deployments, and powerful analytics tools."
            className="text-center pb-16 mt-10 md:mt-14 md:px-10 shadow-text"
          />
          <MotionDiv
            variants={descoverBtn}
            initial="hiden"
            whileInView="visible"
            whileHover="hover"
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="flex justify-center"
          >
            <Button
              text="Discover More"
              bgColor="#ec912b"
              className="text-center md:mt-6"
            />
          </MotionDiv>
        </MotionDiv>
        <section className="pt-20 md:pb-48">
          <BridgeStory />
        </section>
      </section>
      <section>
        <div className="grid grid-cols-1 mt-16 md:grid-cols-3 gap-x-8">
          {/* <PricingNewCard card={cards[1]} className="col-span-2 back-gradi" /> */}
        </div>
      </section>
      <section className="py-40 relative container">
        <div className="gradient_ready">
          <Ready />
        </div>
      </section>
    </div>
  );
}
