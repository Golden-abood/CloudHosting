import NavBar from "@/components/NavBar";
import React from "react";

const layout = () => {
  return (
    <div className="bg-black mi-h-screen">
      <div className="container pt-10">
        <NavBar />
      </div>
      <div className="flex md:!flex-row flex-col justify-between md:items-start mt-24 container md:!pr-0">
        <AuthCard className="md:w-[600px] px-6 py-6 rounded-3xl" />
        <div className="sticky hidden md:flex !md:-right-16 md:max-w-[70%]">
          <img src="/images/login.svg" className="mt-10 md:mt-36" />
        </div>
      </div>
      <div className="sticky md:hidden">
        <img src="/images/login.svg" className="mt-10 w-full" />
      </div>
    </div>
  );
};

export default layout;
