"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Base/Button";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import MobileNav from "./Mobile/Nav";
import { useState } from "react";

const NavBar = () => {
  const links = ["Home", "About Us", "Articles", "Contact"];
  const [showMenu, setShowMenu] = useState(false);

  const toggle = (): void => setShowMenu((prev) => !prev);

  return (
    <div className="bg-black min-h-16">
      <nav className="container flex items-center justify-between py-7 md:py-5">
        <Image
          width="140"
          src="/images/logo.svg"
          className="cursor-pointer"
          alt="logo"
          height={0}
        />
        <ul className="hidden lg:flex gap-x-8">
          {links.map((link) => (
            <li className="cursor-pointer">
              <Link
                className="text-base font-semibold text-white transition-colors hover:text-primary"
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
          <Button
            classes="!text-white !border-primary  !border-[1px] py-[12px] px-12 !bg-transparent hover:!bg-primary hover:!text-black duration-500"
            text="request a demo"
          />
          <Button
            text="Login"
            classes="!text-white !border-white !border-[1px] py-[12px] !bg-transparent hover:!bg-white hover:!text-black duration-500"
          />
        </div>
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
