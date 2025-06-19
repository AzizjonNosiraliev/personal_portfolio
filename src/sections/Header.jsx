import React from "react";

export default function Header() {
  return (
    <div className="relative">
      <div
        className="relative text-dark pb-[100rem] p-5 bg-no-repeat 
        bg-cover w-full h-full"
        id="header"
      >
        {/* <div className='absolute bg-contain bg-no-repeat bg-[url(/images/screen.png)] w-[63%] h-100 pt-0'></div> */}
        <img
          src="/images/macbook.png"
          alt="MacBook"
          className="hidden md:block w-[100%] h-full"
        />
        <img
          src="/images/iphone.png"
          alt="iPhone"
          className="block md:hidden w-500 h-auto"
        />
      </div>
    </div>
  );
}
