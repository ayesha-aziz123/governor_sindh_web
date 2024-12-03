"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown, IoMdClose, IoMdMenu } from "react-icons/io";

const navLinks = [
  {
    id: 1,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    link: "/",
    title: "Apply",
  },
  {
    id: 3,
    link: "/",
    title: "Jobs",
  },
  {
    id: 4,
    link: "/",
    title: "Result",
  },
];

export default function Header() {
  const [showMenu, setShowmenu] = useState(false);
  const [isMenuopen, setMenuOpen] = useState(false);

  function toggle() {
    setMenuOpen(!isMenuopen);
  }
  useEffect(() => {
    const sidebar = document.querySelector(".navbar") as HTMLElement;

    if (sidebar) {
      if (isMenuopen) {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "none";
      }
    }
  }, [isMenuopen]);

  return (
    <div className="container  max-w-[900px] h-auto ">
      <div className=" w-[100%] fixed top-0 z-10  flex flex-wrap  justify-evenly items-center bg-[#044E83] text-white py-4 sm:pt-5 sm:pb-5">
        <div className="logo left-3 top-8  absolute lg:left-20 sm:top-6  ">
          <Image
            src={"/picture/logo.png"}
            alt={"logo"}
            height={200}
            width={200}
            className="object-contain h-20 w-20 sm:h-24 sm:w-24"
          ></Image>
        </div>

        <h1 className="sm:block hidden text-[12px] text-start  lg:text-xl  ml-0 font-bold sm:ml-16 text-[#B9D8F3]">
          Tuition Free Education Program on Latest Technologies
        </h1>
        <div className="heading  block sm:hidden">
          <h1
            className=" text-[19px] text-start  
         lg:text-xl  ml-0 font-bold sm:ml-16 text-[#B9D8F3]"
          >
            Tuition Free Program
          </h1>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5 z-50 text-[#FAF9F6] lg:gap-10">
          {navLinks.map((item) => (
            <Link href={item.link} key={item.id}>
              <div className="capitalize ">{item.title}</div>
            </Link>
          ))}
          <div
            onClick={() => setShowmenu(!showMenu)}
            className="relative cursor-pointer "
          >
            <div className="flex items-center justify-center capitalize">
              Courses
              <IoIosArrowDown className="pl-2 size-5" />
            </div>
            {showMenu && (
              <div className="my absolute right-0 mt-1 w-44 rounded-lg shadow-2xl shadow-[#605f5f] bg-white text-black">
                <div className="p-5 bg-zinc-50 h-[300px]  sm:h-auto overflow-y-auto">
                  <h1 className="font-bold text-xl pb-2">Core Courses</h1>
                  <p className="py-1">Programming Fundamentals</p>
                  <p className="py-1">Web2 Using Nextjs</p>
                  <p className="py-1">Earn as you learn</p>
                  <hr className="my-1 " />
                  <h1 className="font-bold text-xl py-3">Advanced Courses</h1>
                  <p className="py-1 ">Web3 and Metaverse</p>
                  <p className="py-1">Cloud-Native computing</p>
                  <p className="py-1">
                    Artficial Intelligence (AI) and Deep Learning{" "}
                  </p>
                  <p className="py-1">Ambient Computing and loT</p>
                  <p className="py-1">Genomics and Bioinformatics</p>
                  <p className="py-1">Network programmability and Automation</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="fixed md:hidden top-0 navbar pt-20  z-40  min-h-[100vh] w-full bg-[#044E83] ">
        <ul className=" flex flex-col justify-center items-start gap-y-6  font-[600] text-white">
          <li className="pl-5 ">
            <Link href={"/"}>Home</Link>
          </li>
          <hr className="h-[1px] bg-[#044E83] w-[90%] mx-3" />
          <li className="pl-5">
            <Link href={""}>Apply</Link>
          </li>
          <hr className="h-[1px] bg-[#044E83] w-[90%] mx-3" />
          <li className="pl-5">
            <Link href={""}>Jobs</Link>npm
          </li>
          <hr className="h-[1px] bg-[#044E83] w-[90%] mx-3" />
          <li className="pl-5">
            <Link href={""}>Result</Link>
          </li>
          <hr className="h-[1px] bg-[#044E83] w-[90%] mx-3" />
        </ul>
        <div
          onClick={() => setShowmenu(!showMenu)}
          className="mx-3 py-3 cursor-pointer "
        >
          <div className="text-white flex items-center ml-2 justify-between font-[600]">
            courses
            <IoIosArrowDown size={16} />
          </div>
        </div>
        <div
          className={`mx-3 overflow-y-auto  rounded-xl bg-[#216FA7] text-white ${
            showMenu ? "h-[250px]" : "h-0 overflow-hidden"
          }`}
        >
          <div className="px-2">
            <h1 className=" mt-3 px-2 text-center text-xl font-bold">
              Core Courses
            </h1>
            <p className="py-3">Programming Fundamentals</p>
            <hr className="h-[1px] bg-[#044E83] w-[100%]" />
            <p className="py-3">Web2 Using Nextjs</p>
            <hr className="h-[1px] bg-[#044E83] w-[100%] " />
            <p className="py-3">Earn as you learn</p>
            <hr className="h-[1px] bg-[#044E83] w-[100%] " />
            <h1 className="font-bold text-center text-xl py-3 ">
              Advanced Courses
            </h1>
            <p className="py-3 ">Web3 and Metaverse</p>
            <hr className="h-[1px] bg-[#044E83] w-[100%] " />
            <p className="py-3">Cloud-Native computing</p>
            <hr className="h-[1px] bg-[#044E83] w-[100%] " />

            <p className="py-3">
              Artficial Intelligence (AI) and Deep Learning{" "}
            </p>
            <hr className="h-[1px] bg-[#044E83] w-[100%] " />
            <p className="py-3">Ambient Computing and loT</p>
            <hr className="h-[1px] bg-[#286184] w-[100%] " />
            <p className="py-3">Genomics and Bioinformatics</p>
            <hr className="h-[1px] bg-[#044E83] w-[100%] " />

            <p className="py-3">Network programmability and Automation</p>
          </div>
        </div>
      </div>

      {/* Icon toggle for Mobile Menu */}
      <div
        onClick={toggle}
        className="md:hidden fixed block z-50 text-white cursor-pointer top-4 right-3"
      >
        {isMenuopen ? (
          <IoMdClose size={30} className="z-50" /> // Close Icon
        ) : (
          <IoMdMenu size={30} className="z-50" /> // Menu Icon
        )}
      </div>
    </div>
  );
}
