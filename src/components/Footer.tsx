import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative z-10 bg-black pt-20">
      <Image
        src="/images/logo.svg"
        className="sm:hidden mx-auto mb-10 cursor-pointer"
        width="150"
        alt="logo"
        height={0}
      />
      <div className="container md:pb-24">
        {/* <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-2">
        <h3 className="font-semibold text-lg text-white">Company</h3>
        <BaseParagraphText
          v-for="item in items"
          :text="item"
          className="my-2 cursor-pointer"
        />
      </div>
      <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-2">
        <h3 className="font-semibold text-lg text-white">Resources</h3>
        <BaseParagraphText
          v-for="item in resources"
          :text="item"
          className="my-2 cursor-pointer"
        />
      </div> */}

        <div className="hidden sm:block sm:col-span-4 lg:col-span-8 relative before:content-[''] before:absolute before:bg-white before:bottom-[10px] before:left-0 before:w-[20px] before-h-[2px]">
          <div>
            <Image
              src="/images/logo.svg"
              height={0}
              width="150"
              className="mx-auto cursor-pointer"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-x-3 xl:gap-x-5 justify-center pb-20 relative before:absolute before:top-0 before:h-[1px] before:lg:left-36 before:lg:w-1/4 md:before:w-1/5 md:before:left-28 before:mt-2 before:bg-dark after:absolute after:top-0 after:h-[1px] after:lg:right-36 after:lg:w-1/4 md:after:w-1/5 md:after:right-28 after:mt-2 after:bg-dark">
        <p className="text-white text-sm">© Copyright CalibroAI</p>
        {/* 
        <Image
        v-if="display"
        width="20"
        src="/images/Facebook.svg"
        className="cursor-pointer opacity-60"
      />
      <Image
        v-if="display"
        width="20"
        src="/images/Twitter.svg"
        className="cursor-pointer opacity-60"
      />
      <Image
        v-if="display"
        width="20"
        src="/images/Instagram.svg"
        className="cursor-pointer opacity-60"
      />
     --> */}
        {/* <Image
          width="20"
          src="/images/linkdin.svg"
          className="cursor-pointer"
          alt="linkidin"
        /> */}
      </div>
    </div>
  );
};

export default Footer;
