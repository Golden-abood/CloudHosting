import Button from "@/components/Base/Button";
import Title from "@/components/Base/Title";
import ContactForm from "@/components/ContactForm";
import Ready from "../../components/Ready";
import { MotionDiv } from "@/components/MotionDiv";
import { solutionTitle } from "../../../utils/variants";

const contactPage = () => {
  return (
    <div className="bg-grey overflow-hidden">
      <MotionDiv
        variants={solutionTitle}
        initial="hiden"
        animate="visible"
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <Title
          title="Get in touch with us"
          className="text-4xl md:text-6xl !font-bold pt-24 pb-16 flex justify-center"
        />
      </MotionDiv>
      <div className="bg-black">
        <ContactForm />
      </div>
      <div className="container pt-28 py-32 relative">
        <Ready className="relative pt-10 gradi">
          <Button text="View Pricing" className="mt-12 relative z-10" />
        </Ready>
      </div>
    </div>
  );
};

export default contactPage;
