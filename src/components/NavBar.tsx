"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Base/Button";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import MobileNav from "./Mobile/Nav";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Login from "./Dialogs/Login";
import Register from "./Dialogs/Register";
const NavBar = () => {
  const links = ["Home", "About Us", "Articles", "Contact"];
  const [showMenu, setShowMenu] = useState(false);

  const toggle = (): void => setShowMenu((prev) => !prev);

  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="bg-black min-h-16">
      <nav className="container flex items-center justify-between py-7 md:py-5">
        <Link href={"/"}>
          <img
            src="/images/cloud_logo.webp"
            className="w-[60px] xs:w-[100px] cursor-pointer rounded-full border-2 border-primary "
            alt="logo"
          />
        </Link>
        {pathName != "/admin" ? (
          <>
            <ul className="hidden lg:flex gap-x-8">
              {links.map((link) => (
                <li className="cursor-pointer">
                  <Link
                    className="text-base font-semibold text-white transition-colors duration-500 hover:text-primary"
                    href={
                      link === "Home"
                        ? "/"
                        : link === "About Us"
                        ? "about-us"
                        : link.toLowerCase()
                    }
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden lg:block space-x-6">
              <Register>
                <Button
                  classes="!text-white !border-primary  !border-[1px] py-[12px] px-12 !bg-transparent hover:!bg-primary hover:!text-black duration-500"
                  text="Register"
                />
              </Register>
              <Login>
                <Button
                  text="Login"
                  classes="!text-white !border-white !border-[1px] py-[12px] !bg-transparent hover:!bg-white hover:!text-black duration-500"
                />
              </Login>
            </div>
          </>
        ) : (
          <div className="flex gap-x-4 ">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-primary">CN</AvatarFallback>
            </Avatar>
            <p className="text-white">Golden Abood</p>
          </div>
        )}
        <nav className="z-40 flex items-center justify-between lg:hidden">
          <div>
            <Icon
              color={"white"}
              path={mdiMenu}
              size={1.5}
              className="cursor-pointer"
              onClick={() => toggle()}
            />
            {showMenu && <MobileNav setPrevState={() => toggle()} />}
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavBar;
