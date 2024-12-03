import Image from "next/image";

const Hero = () => {
  return (
    <div className=" flex flex-col  lg:flex-row h-auto justify-between m-auto py-12  mt-7  lg:items-center">
      <div className=" lg:w-1/2 sm:px-6 px-2 mx-auto pt-14  lg:pt-5 lg:px-14 h-fit md:py-10 ">
        <h1 className="text-center md:text-start text-4xl sm:text-5xl text-[#044E83] font-extrabold tracking-wide">
          Governor Sindh
        </h1>
        <h2 className="text-center md:text-start text-[27px] sm:text-4xl text-[#044E83] pb-3 tracking-wider">
          Kamran Khan Tessori
        </h2>
        <h2 className="text-center md:text-start text-3xl sm:text-2xl md:w-[390px] text-[#2EB6E8] md:text-[2.2rem] font-[800] sm:leading-[40px] pb-4">
          Certified Cloud Applied Generative AI Engineer (GenEng)
        </h2>

        <p className="sm:text-start text-center text-[#044E83] font-[900] text-[18px] sm:text-2xl pb-3">
          Earn up to $5,000 / month{" "}
        </p>
        <p className="text-center sm:text-start text-[#044E83] font-[800] text-[20px] sm:text-2xl  sm:w-[340px] pb-6">
          Now admissions are open in Hyderabad
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <button
            className="w-full sm:w-[150px] px-6 py-3  bg-[#044E83] text-white text-center 
            border-none font-[700] rounded-[6px] "
          >
            Apply Now
          </button>
          <div className="inline-block mt-3 sm:text-start text-center mx-auto">
            <p className=" text-[#044E83] font-extrabold text-3xl sm:text-start text-center">
              562,143
            </p>
            <p className=" sm:text-start text-center ">Accepted Applications</p>
          </div>
        </div>
      </div>

      <div className=" lg:w-[40%] justify-center mt-12 items-center mb-9  flex lg:items-end lg:justify-between md:mx-auto md:justify-end">
        <Image
          className="object-cover sm:pl-4 sm:pr-0 object-center sm:ml-3 w-full h-[90vh]   
           sm:h-[90vh] min-w-[300px] sm:min-w-[400px] "
          src={"/picture/governor.png"}
          alt={"logo"}
          height={800}
          width={800}
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
