import Image from "next/image";
import Button from "./Base/Button";
import ParagraphText from "./Base/ParagraphText";
import Title from "./Base/Title";
import Input from "./Base/Input";

const ContactForm = () => {
  const items = [
    {
      icon: "/images/contact/icon-1.svg",
      title: "+ 1800 145 276",
      text: "Free support",
    },
    {
      icon: "/images/contact/icon-2.svg",
      title: "finsweet@gmail.com",
      text: "Help Email support",
    },
    {
      icon: "/images/contact/icon-3.svg",
      title: "sales@finsweet.com",
      text: "Sales Enquiry",
    },
  ];
  return (
    <div className="container lg:px-32 py-16">
      <div className="text-center lg:text-start">
        <Title
          title="Drop us a message"
          className="text-3xl md:text-4xl font-bold"
        />
        <ParagraphText
          text="We will get back to you as soon as possible."
          className="text-lg pt-4 "
        />
      </div>
      <div className="lg:flex justify-start gap-x-10 xl:gap-x-64 pt-14">
        <form>
          <div className="lg:flex gap-x-4">
            <Input placeholder="Full Name" className="w-full lg:w-72 mb-2" />
            <Input placeholder="Company Name" className="w-full lg:w-72 mb-2" />
          </div>

          <div className="mb-2">
            <Input placeholder="Work Email" className="!w-full" />
          </div>

          <div className="mb-2">
            <Input placeholder="Subject" className="!w-full" />
          </div>

          <div className="lg:mt-28">
            <Input
              placeholder="Message"
              className="!w-full focus:outline-none"
            />
          </div>

          <Button
            text="Send"
            bgColor="#ec912b"
            block={true}
            className="mt-5 text-center lg:text-start text-white"
          />
        </form>
        <div className="pt-10 lg:pt-0">
          {items.map((item) => (
            <div className="flex items-center gap-x-6 mb-9">
              <Image
                width="48"
                src={item.icon}
                className="cursor-pointer"
                alt="icon"
                height={0}
              />
              <div>
                <Title title={item.title} />
                <ParagraphText text={item.text} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
