import React from 'react';
import overview from "../images/ccsasection.png";



const CCSASection = () => {


  return (
    <div className="shadow-md rounded-[24px] bg-vanish p-10 my-[2.5rem] px-[16px] w-[95%] mx-auto py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-x-20">
        {/* Second Column: Image */}
        <div className="md:w-1/2 flex items-center justify-center order-1 md:order-2 mb-[1.5rem]">
          <img src={overview} alt="Descriptive text" />
        </div>

        {/* First Column: Headline, Text, and Button */}
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left order-2 md:order-1">
          {/* Heading */}
          <h2 className="text-[16px] text-start">
            Chemical Cleaning Services Arabia. Here at CCSA, we lead the charge in delivering comprehensive chemical cleaning solutions for pipelines, plants, and terminals, including GOSP and GGM facilities.
          </h2>

          {/* Text */}
          <p className="my-[2.5rem] text-[16px] text-start">
            Our foundation is built on a vision of operational excellence combined with stringent environmental stewardship.
          </p>

          <p className="text-[16px] text-start mb-6">
            We are committed to setting industry standards, aspiring to be synonymous with sustainable practices and ensuring unparalleled client satisfaction and environmental care.
          </p>


        </div>
      </div>
    </div>
  )
}

export default CCSASection;
