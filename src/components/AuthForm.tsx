import Card from "./Auth/LoginCard";
import NavBar from "./NavBar";
import LoginCard from "./Auth/LoginCard";
function AuthFrom() {
  return (
    <div className="bg-black mi-h-screen">
      <div className="flex md:!flex-row flex-col justify-between md:items-start mt-24 container md:!pr-0">
        <LoginCard />
        <div className="sticky hidden md:flex !md:-right-16 md:max-w-[70%]">
          <img src="/images/Layer_1.svg" className="mt-10 md:mt-24" />
        </div>
      </div>
      <div className="sticky md:hidden">
        <img src="/images/Layer_1.svg" className="mt-10 w-full" />
      </div>
    </div>
  );
}

export default AuthFrom;
