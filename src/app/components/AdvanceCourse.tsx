import Image from "next/image"
import Link from "next/link"

function AdvanceCourse() {
  return (
    <div className=" xl:w-[1350px] lg:w-[90%] w-[95%] m-auto my-10 mt-20 px-3">
      <h1 className="sm:text-4xl text-2xl sm:text-left text-center text-[#274894] font-[800] mt-10">Advanced Courses</h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 lg:gap-10 gap-5 mt-10">
        <div className=" hover:scale-105 duration-200 transition-all h-fit overflow-hidden rounded-[10px] shadow-xl shadow-[#8b88889d] flex flex-col justify-center items-center">
          <Link href={""} className="">
            <div className="">
              <Image
                className="object-cover w-full"
                src={"/picture/hero9.jpg"}
                alt={"Programming Fundamentals"}
                width={400}
                height={400}
              />
            </div>
            <div className=" flex justify-center items-center h-[70px]">
              <text className="font-bold text-[#696565]">Artificial Intelligence</text>
            </div>
          </Link>
        </div>


        <div className="h-fit overflow-hidden rounded-[10px] shadow-xl shadow-[#8b88889d] flex flex-col justify-center items-center hover:scale-105 duration-200 transition-all">
          <Link href={""} >
            <div className="">
              <Image
                className="object-cover w-full"
                src={"/picture/hero10.jpg"}
                alt={"Programming Fundamentals"}
                width={350}
                height={350}
              />
            </div>
            <div className=" flex justify-center items-center h-[70px]">
              <text className="font-bold text-[#696565]">
              Web 3 and Metaverse
</text>
            </div>
          </Link>
        </div>


        <div className="h-fit overflow-hidden rounded-[10px] shadow-xl shadow-[#8b88889d] flex flex-col justify-center items-center hover:scale-105 duration-200 transition-all">
          <Link href={""} >
            <div >
              <Image
                className="object-cover w-full"
                src={"/picture/hero11.jpg"}
                alt={"Programming Fundamentals"}
                width={350}
                height={350}
              />
            </div>
            <div className=" flex justify-center items-center h-[70px]">
              <text className="font-bold text-[#696565]">
              Cloud-Native Computing</text>
            </div>
          </Link>
        </div>


        <div className="h-fit overflow-hidden rounded-[10px] shadow-xl shadow-[#8b88889d] flex flex-col justify-center items-center hover:scale-105 duration-200 transition-all">
          <Link href={""} >
            <div className="">
              <Image
                className="object-cover w-full"
                src={"/picture/hero12.jpg"}
                alt={"Programming Fundamentals"}
                width={350}
                height={350}
              />
            </div>
            <div className=" flex justify-center items-center h-[70px]">
              <text className="font-bold text-[#696565]">
              Ambient Computing and IoT</text>
            </div>
          </Link>
        </div>



        <div className="h-fit overflow-hidden rounded-[10px] shadow-xl shadow-[#8b88889d] flex flex-col justify-center items-center hover:scale-105 duration-200 transition-all">
          <Link href={""} >
            <div className="">
              <Image
                className="object-cover w-full"
                src={"/picture/hero13.jpg"}
                alt={"Programming Fundamentals"}
                width={350}
                height={350}
              />
            </div>
            <div className=" flex justify-center items-center h-[70px]">
              <text className="font-bold text-[#696565]">
              Genomics and Bioinformatics</text>
            </div>
          </Link>
        </div>


        <div className="h-fit overflow-hidden rounded-[10px] shadow-xl shadow-[#8b88889d] flex flex-col justify-center items-center hover:scale-105 duration-200 transition-all">
          <Link href={""} >
            <div className="">
              <Image
                className="object-cover w-full"
                src={"/picture/hero14.jpg"}
                alt={"Programming Fundamentals"}
                width={350}
                height={350}
              />
            </div>
            <div className=" flex justify-center items-center h-[70px]">
              <text className="font-bold text-[#696565] text-center">
              Network Programmability and Automation</text>
            </div>
          </Link>
        </div>

      </div>

     
    </div>
  )
}

export default AdvanceCourse