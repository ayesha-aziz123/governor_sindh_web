import Image from "next/image";
import Link from "next/link";

function Course() {
  return (
    <div className=" xl:w-[1300px] lg:w-[90%] w-[95%] m-auto px-3 my-10 mt-20">
      <h1 className="sm:text-4xl text-2xl sm:text-left text-center text-[#274894] font-[800] mt-10">Core Courses Sequence</h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 lg:gap-10 gap-5 mt-10">
        <div className="h-fit overflow-hidden rounded-[10px] shadow-xl shadow-[#8b88889d] flex flex-col justify-center items-center hover:scale-105 duration-200 transition-all">
          <Link href={""}>
            <div className="">
              <Image
                className="object-cover w-full"
                src={"/picture/hero6.jpg"}
                alt={"Programming Fundamentals"}
                width={350}
                height={350}
              />
            </div>
            <div className=" flex justify-center items-center h-[70px]">
              <text className="font-bold text-[#696565]">Programming Fundamentals</text>
            </div>
          </Link>
        </div>


        <div className="h-fit overflow-hidden rounded-[10px] shadow-xl shadow-[#8b88889d] flex flex-col justify-center items-center hover:scale-105 duration-200 transition-all">
          <Link href={""}>
            <div className="">
              <Image
                className="object-cover w-full"
                src={"/picture/hero7.jpg"}
                alt={"Programming Fundamentals"}
                width={350}
                height={350}
              />
            </div>
            <div className=" flex justify-center items-center h-[70px]">
              <text className="font-bold text-[#696565]">
              Web2 Using NextJS</text>
            </div>
          </Link>
        </div>


        <div className="h-fit overflow-hidden rounded-[10px] shadow-xl shadow-[#8b88889d] flex flex-col justify-center items-center hover:scale-105 duration-200 transition-all">
          <Link href={""}>
            <div className="">
              <Image
                className="object-cover w-full"
                src={"/picture/hero8.jpg"}
                alt={"Programming Fundamentals"}
                width={350}
                height={350}
              />
            </div>
            <div className=" flex justify-center items-center h-[70px]">
              <text className="font-bold text-[#696565]">
              Earn as You Learn</text>
            </div>
          </Link>
        </div>

      </div>

     
    </div>
  );
}

export default Course;
