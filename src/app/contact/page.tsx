import Button from "@/components/Base/Button";
import Title from "@/components/Base/Title";
import ContactForm from "@/components/ContactForm";
import Ready from "../../components/Ready";

const contactPage = () => {
  return (
    <div className="bg-grey overflow-hidden">
      <Title
        title="Get in touch with us"
        classes="text-4xl md:text-6xl !font-bold pt-24 pb-16 flex justify-center"
      />
      <div className="bg-black">
        <ContactForm />
      </div>
      <div className="container pt-28 py-32 relative">
        <Ready className="relative pt-10 gradi">
          <Button text="View Pricing" classes="mt-12 relative z-10" />
        </Ready>
      </div>
    </div>
  );
};

export default contactPage;
