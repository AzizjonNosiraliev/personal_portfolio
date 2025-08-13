"use client";
import React, { useState } from "react";
import { navigate } from "@/constants";
import { Monoton, Orbitron } from "next/font/google";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "./Button";
import DropdownMenu from "./DropdownMenu";

const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
});
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    if (openMenu) {
      setOpenMenu(false);
      enablePageScroll();
    } else {
      setOpenMenu(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (openMenu) {
      setOpenMenu(false);
      enablePageScroll();
    }
    return;
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-neutral-600:backdrop-blur-md lg:bg-[#000000]/70 ${
        openMenu ? "bg-[#08000c]" : "bg-[#0a0011]/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-5">
        <a
          href="#"
          className={`w-[12rem] xl:mr-8 text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ${monoton.className}`}
        >
          Azizjon
        </a>
        <nav
          className={`${
            openMenu ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 
          bg-[#06000a] lg:static lg:flex lg:ml-auto lg:bg-transparent`}
        >
          <div className="relative z-3 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigate.map((item) => (
              <a
                key={item.id}
                href={item.link}
                onClick={handleClick}
                className={`block relative text-2xl text-[#fff] transition-colors duration-400 ${
                  openMenu ? "hover:text-white" : "hover:text-purple-500"
                } uppercase px-10 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:leading-5 lg:font-semibold xl:px-12 ${
                  orbitron.className
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <DropdownMenu />
        </nav>
        <Button onButtonClick={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
