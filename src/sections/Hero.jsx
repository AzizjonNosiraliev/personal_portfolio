"use client";
import React, { useEffect, useState } from "react";
import { Pacifico } from "next/font/google";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "Hallo",
  "Ciao",
  "Olá",
  "こんにちは",
  "안녕하세요",
  "مرحبا",
  "नमस्ते",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  // Cycle through greetings every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="">
      <div
        className={`container w-full h-screen relative mx-auto flex flex-col-reverse justify-center items-center md:flex-row bg-[url('/images/background_img.png')] bg-cover bg-[80%] md:bg-center lg:bg-center ${inter.className}`}
      >
        <div className="w-150 flex items-center justify-center text-center md:text-start ">
          <h1 className="text-white text-[23px]">
            <span
              key={greetings[index]}
              className={`${pacifico.className} text-[40px] bg-gradient-to-r from-orange-700 via-orange-400 to-yellow-300 bg-clip-text text-transparent leading-[2]`}
              style={{
                display: "inline-block",
                whiteSpace: "pre",
                opacity: 0,
                transform: "translateX(-40px)",
                animation: "fadeInLeft 0.7s forwards",
              }}
            >
              {greetings[index] + " "}
            </span>
            <br />
            <span>I am a fullstack web developer</span>
          </h1>
        </div>
        <div className="w-150 p-10 -mt-30 flex items-center justify-center">
          <div
            className="w-35 h-35 rounded-2xl rotate-45 flex items-center justify-center bg-amber-50 "
            style={{
              boxShadow:
                "0 8px 20px 20px rgba(0,0,0,1), 0 10px 30px 30px rgba(0,0,0,1)",
            }}
          >
            {/* <img src="/images/menu.jpg" className="-rotate-45" alt="" /> */}
          </div>
        </div>
      </div>
      {/* this style block for the animation */}
      <style>
        {`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
}
