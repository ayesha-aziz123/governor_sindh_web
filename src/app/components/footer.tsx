import Link from "next/link";
import { CiMail } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" w-[100%] mt-7 bg-[#ececec]  ">
      <div className=" flex justify-start sm:justify-evenly ml-5 sm:m-0   lg:h-[25rem]  flex-wrap ">
        <ul className="mt-[70px]  ">
          <p className="font-bold my-4">Core Courses</p>
          <a className="block my-2">Programming Fundamentals</a>
          <a className="block my-2">Web2 Using NextJS</a>
          <a className="block my-2">Earn as You Learn</a>
        </ul>
        <ul className="mt-[70px] ">
          <p className="font-bold  my-4">Advanced Courses</p>
          <a className="block  my-2">Web 3 and Metaverse</a>
          <a className="block  my-2">Cloud-Native Computing</a>
          <a className="block  my-2">
            Artificial Intelligence (AI) and Deep Learning
          </a>
          <a className="block  my-2">Ambient Computing and IoT</a>
          <a className="block  my-2">Genomics and Bioinformatics</a>
          <a className="block  my-2">Network Programmability and Automation</a>
        </ul>

        <ul className="mt-[70px] ">
          <p className="font-bold  my-4">Social Links</p>
          <ul className="flex gap-4  my-2">
            <Link href={"/"} className="a">
              <FaFacebook className="icon1 text-blue-700 bg-white  rounded-full inline-flex text-[28px] " />
            </Link>
            <Link href={"/"}>
              <FaYoutube className=" icon2  text-white p-1 bg-red-600 rounded-full inline-flex  text-[28px]  " />
            </Link>
            <Link href={"/"}>
              <FaTwitter className="icon3  text-white bg-sky-500 p-1 rounded-full inline-flex   text-[28px]  " />
            </Link>
            <Link href={"/"}>
              <FaInstagram className="icon4  text-white p-1 bg-pink-500 rounded-full inline-flex  text-[28px] " />
            </Link>
            <Link href={"/"}>
              <FaTiktok className="icon5  text-white rounded-full bg-black inline-flex p-1 text-[28px]  " />
            </Link>
          </ul>

          <div className="mt-5 mb-12 sm:mb-0">
            <a>
              <CiMail className="inline-flex text-2xl" />
              education@governorsindh.com
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}
