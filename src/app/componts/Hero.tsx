import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWindows } from "react-icons/fa";
import BC from "../assets/bc2.jpg"

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={BC}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4 text-yellow-400">
          Private Dating for Elite Singles
        </h1>
        <p className="text-lg text-yellow-400 mb-8 italic">
          Its Better On App, Download Now!
        </p>
        <a
          href="#"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-x-2"
        >
          <FaWindows /> Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
