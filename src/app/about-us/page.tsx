import AboutUsCard from "@/components/AboutUs/Card";
import ParagraphText from "@/components/Base/ParagraphText";
import Title from "@/components/Base/Title";
import Image from "next/image";

const aboutPage = () => {
  return (
    <div className="bg-black overflow-hidden">
      <div className="container pt-48 pb-32 relative about_gradient">
        <div className="text-center pb-40 relative z-10">
          <Title
            title="Lorem ipsum dolor sit amet, consetetur sa"
            classes="text-3xl md:text-5xl"
          />
          <ParagraphText
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
            classes="pt-6 text-lg md:max-w-[58%] mx-auto"
          />
        </div>
        <div className="md:flex items-center justify-between relative">
          <div className="md:max-w-[50%] text-center md:text-start">
            <Title title="Our Mission" active={true} classes="text-2xl" />
            <Title
              title="We are proud of our products"
              classes="text-3xl md:text-5xl pt-6 indent-1"
            />
            <ParagraphText
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, "
              classes="py-3 mt-7"
            />
          </div>
          <div className="md:w-[35%]">
            <Image
              width="308"
              className="relative mx-auto md:mx-0 mt-5 md:mt-0"
              src="/images/About/photo-1.svg"
              alt="photo"
              height={0}
            />
          </div>
        </div>
        <div className="md:flex items-center lg:items-start justify-between pt-32">
          <div className="md:w-[35%] hidden md:block">
            <Image
              width="429"
              className="relative"
              src="/images/About/photo-2.svg"
              alt="photo"
              height={0}
            />
          </div>
          <div className="md:max-w-[50%] text-center md:text-start">
            <Title title="Our Vision" active={true} classes="text-2xl" />
            <Title
              title="We are proud of our products"
              classes="text-3xl md:text-5xl pt-6 indent-1"
            />
            <ParagraphText
              text="Bridge stands as a promise, not just a platform. It guarantees that your model reaches your vast user base, complemented by an intuitive UI. With state-of-the-art concept, system design, infrastructure, security, and devops, Bridge is always ready for uninterrupted feature integration. It offers models administrators a comprehensive panel to monitor user satisfaction and usage, easily enable/disable models or versions, upload new model iterations with zero downtime, and provides integrated license, billing, and subscription management to let admins give access to end customers over their modules."
              classes="py-3 mt-7"
            />
          </div>
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <AboutUsCard />
      </div>
      {/* <AboutUsOurTeam /> */}
    </div>
  );
};

export default aboutPage;