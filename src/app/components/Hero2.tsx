import React from "react";
import Image from "next/image";

const Hero2 = () => {
  return (
    <div className=" h-full w-[100%] lg:w-[95%]  mx-auto  text-center px-104  ">
      <div className="w-full">
        <h1 className=" text-[#044E83] font-bold text-3xl ">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur Developing Billion-Dollar Valued Developers and
          Solopreneurs
        </h1>
        <p className="pt-9 pb-6 px-4 sm:text-xl text-justify">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>

        <div className="grid md:grid-cols-3 mt-5 gap-y-6 sm:gap-x-3 px-3  sm:ml-0  sm:mr-0 m w-full">
          <div className="">
            <Image
              src={"/picture/hero1.jpg"}
              alt={"hero1"}
              height={896}
              width={1088}
              className="rounded-[8px] w-full h-[300px] object-cover shadow-xl  shadow-zinc-700 "
            />
          </div>

          <div>
            <Image
              src={"/picture/hero2.jpg"}
              alt={"hero2"}
              height={375}
              width={500}
              className="rounded-[8px] w-full h-[300px] object-cover shadow-xl  shadow-zinc-700"
            />
          </div>

          <div>
            <Image
              src={"/picture/hero3.jpg"}
              alt={"hero3"}
              height={896}
              width={1088}
              className="rounded-[8px] w-full h-[300px] object-cover shadow-xl shadow-zinc-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
