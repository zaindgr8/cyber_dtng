import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWindows } from "react-icons/fa";
import BC from "../assets/dhrkn.jpg";
const Hero3 = () => {
  return (
    <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden bg-yellow-400">
      <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full p-16   md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={BC}
            className="  rounded-2xl "
            alt={""}
          />
        </div>

        <div className="w-full md:w-1/2 lg:pr-32">
          <h2 className="text-3xl font-extrabold text-center md:text-left text-black ">
            Premier and Fastest Expanding High-Class Dating Platform
          </h2>
          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Experience unparalleled connections on the leading platform for
            elite singles. Join our rapidly growing community of high-class
            individuals seeking meaningful relationships. Discover the perfect
            match in an exclusive, sophisticated environment designed for
            success.
          </h3>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <a
              href="#"
              className="bg-white text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-x-2"
            >
              <FaWindows /> Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
