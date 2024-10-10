import React from 'react';
import overview from "../images/ccsast.png";

const CCSASectionThree = () => {
  return (
    <div className="shadow-md rounded-[24px] bg-vanish p-10 my-[2.5rem] px-[16px] w-[95%] mx-auto py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-x-20">
      

        {/* First Column: Headline, Text, and Button */}
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left order-2 md:order-2">
          {/* Heading */}
          <h2 className="text-[16px] text-start">
          We deliver bespoke chemical cleaning strategies tailored to the unique requirements of each pipeline system, plant, or terminal. By deeply understanding the specific challenges of our clients, we ensure optimal performance, minimize downtime, and enhance long-term reliability. Our comprehensive services leverage advanced chemical technologies from initial planning through ongoing maintenance, meticulously designed to exceed client expectations and achieve excellence in every project.          </h2>

         

          

  
        </div>
          {/* Second Column: Image */}
          <div className="md:w-1/2 flex items-center justify-center order-1 md:order-1 mb-[1.5rem]">
          <img src={overview} alt="Descriptive text" />
        </div>
      </div>
    </div>
  )
}

export default CCSASectionThree;
