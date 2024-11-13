import { useRouter } from "next/navigation";

const MobileNav = () => {
  const router = useRouter();
  const pushRouter = (route: string): void => {
    // push router
    router.push(`/${route}`);
    // close menu
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-30 flex-col items-center w-screen h-screen overflow-hidden mobile-nav">
        <div className="block my-24" onClick={() => pushRouter("/")}>
          <img
            className="mx-auto cursor-pointer"
            src="/images/logo.png"
            alt=""
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-y-10">
          <div
            className="text-3xl font-bold text-white opacity-0 cursor-pointer nav-link-1"
            onClick={() => pushRouter("Product")}
          >
            Product
          </div>

          <div
            className="text-3xl font-bold text-white opacity-0 cursor-pointer nav-link-2"
            onClick={() => pushRouter("Pricing")}
          >
            Pricing
          </div>

          <div
            className="text-3xl font-bold text-white opacity-0 cursor-pointer nav-link-3"
            onClick={() => pushRouter("about-us")}
          >
            About Us
          </div>
          <div
            className="text-3xl font-bold text-white opacity-0 cursor-pointer nav-link-4"
            onClick={() => pushRouter("FAQ")}
          >
            FAQ
          </div>
          <div
            className="text-3xl font-bold text-white opacity-0 cursor-pointer nav-link-5"
            onClick={() => pushRouter("contact")}
          >
            Contact
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
