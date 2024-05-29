"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import Wrapper from "../Shared/Wrapper";
import { menuItems } from "@/lib/constent";
import Logo6 from "../assets/logo1.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <Wrapper>
      <nav className="flex items-center justify-between flex-wrap  m-4 md:mx-6 mx-2 md:mr-6 mr-2 ">
        <Link href="/">
          <div className="flex items-center   flex-shrink-0  gap-2   ">
            <Image src={Logo6} alt="" className=" h-[12vh] w-[15vh]" />
          </div>
        </Link>
        <div className="hidden lg:flex  xl:gap-12 gap-6 items-center  xl:text-xl leading-5   px-6 pr-6     text-gray-600  p-2 ">
          {/* {menuItems.map((item, index) => (
            <Link
              key={index}
              className="hover:text-[#d70081] "
              href={item.route || ""}
              target={item.target}
            >
              {item.title}
            </Link>
          ))} */}
          <div>Discover 5 Million+ Successful Singles Seeking Partners.</div>
        </div>

        {/* <div className="lg:hidden flex">
          <span
            onClick={toggleMenu}
            className="text-xl w-10 h-10 bg-black text-white inline-flex items-center justify-center rounded-full cursor-pointer px-3"
          >
            <FiMenu />
          </span>
        </div> */}

        {/* {showMenu && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-10">
            <div className=" flex  justify-between">
              <div className="flex  px-3 gap-2 pt-4 ">
                <Link href="/">logo</Link>
                <span className="font-bold text-2xl  pt-1  text-black  tracking-tight">
                  My Data Plans
                </span>
              </div>
              <div className=" mr-2 pt-2 ">
                <span
                  onClick={toggleMenu}
                  className="text-xl w-10 mt-2 mr-1 h-10 bg-gray-400 text-black inline-flex items-center justify-center rounded-full cursor-pointer "
                >
                  <MdClose />
                </span>
              </div>
            </div>
            <div className="flex flex-col  gap-6 px-10 pt-6  text-xl font-semibold hover:text-black text-gray-600">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  onClick={toggleMenu}
                  className="hover:text-[#EA0F7F]"
                  href={item.route || ""}
                  target={item.target}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )} */}
      </nav>
    </Wrapper>
  );
};

export default Navbar;
