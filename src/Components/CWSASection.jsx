import React from "react";
import overview from "../images/cwsa.png";



const CWSASection = () => {


  return (
    <div className=" shadow-md rounded-[24px] bg-vanish p-10 my-[2.5rem]  px-[16px]  w-[95%] mx-auto  py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-x-20">
        {/* Second Column: Image */}
        <div className="md:w-1/2 flex items-center justify-center order-1 md:order-2 mb-[1.5rem]">
          <img src={overview} alt="Descriptive text" />
        </div>

        {/* First Column: Headline, Text, and Button */}
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left order-2 md:order-1">
          {/* Heading */}
          <h2 className=" text-[16px]  text-start">
          As Saudi citizens ourselves, we share the dream for the 2030 Kingdom Vision.           </h2>

          {/* Lorem ipsum text */}
          <p className="my-[2.5rem] text-[16px]  text-start">
          We are honored to be able to contribute to our region’s water security strategy through the advanced treatment and management of produced water nationwide.           </p>

          <p className="text-[16px]  text-start">
          After more than a decade of experience and an ongoing commitment to innovation, Continuous Services Arabia works closely with its esteemed clients to desalinate produced water with remarkable precision.           </p>

          <p className=" mt-[2.5rem] text-[16px]  text-start">
          As leading authorities in water and waste-water treatment in KSA, we are proud to implement Stauper’s Compact Flotation Unit (CFU) – a significant leap from conventional oil removal methods.       
       
          </p>

          {/* <button className='flex items-center justify-between bg-primary mt-[2.5rem] text-white p-[16px] rounded-[16px] cursor-pointer' onClick={handleDownloadAll}>
                <div className='flex items-center space-x-4'>
                  <img 
                    src={pdf} 
                    alt='Download Icon' 
                  />
                  <span>Download</span>
                </div>
                <span className='text-white ml-4 '>15M</span>
              </button> */}
        </div>
      </div>
    </div>
  );
};

export default CWSASection;
