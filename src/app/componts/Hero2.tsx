/* eslint-disable */

import Image from "next/image";
import Fetish from "../assets/hero1.jpg";
import { FaWindows } from "react-icons/fa";
const Hero2 = () => {
  return (
    <div className="flex bg-yellow-400 pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden">
      <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-32">
          <h2 className="text-4xl lg:text-5xl text-center md:text-left font-extrabold text-black leading-tight">
            Connect with Successful Singles
          </h2>
          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Discover a community of high-achieving individuals who share your
            drive and ambition. Whether you're looking for a partner who
            understands the demands of success or simply seeking a meaningful
            connection with like-minded singles, you'll find your perfect match
            here.
          </h3>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <button className="w-full flex items-center gap-x-2 sm:w-40 px-4 py-3 rounded font-semibold text-md  bg-black text-white ">
              <FaWindows />
              Download
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end rounded-2xl mb-3">
          <Image src={Fetish} className="object-cover rounded-2xl" alt={""} />
        </div>
      </div>
    </div>
  );
};

export default Hero2;

/* eslint-enable */
