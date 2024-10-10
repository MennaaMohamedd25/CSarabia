import React from 'react';
import overview from '../images/overview.png';


const ServicesCNSASection = () => {
  return (
     <div className=' shadow-md rounded-[24px] bg-vanish p-10 my-[2.5rem]  px-[16px]  w-[95%] mx-auto  py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]'>
      <div className="flex flex-col md:flex-row justify-between items-center gap-x-20">
        {/* Second Column: Image */}
        <div className="md:w-1/2 flex items-center justify-center order-1 md:order-2 mb-[1.5rem]">
          <img src={overview} alt="Descriptive text" />
        </div>

        {/* First Column: Headline, Text, and Button */}
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left order-2 md:order-1">
        
          

          {/* Heading */}
          <h2 className=" text-[16px]  text-start">
          Our Nitrogen Services, a collaboration between Canadian Nitrogen Services Ltd. and Abdulla Fouad Energy Services Company, excel in the Gulf and Middle East. We offer cutting-edge solutions for oil, gas, petrochemical, and processing industries, prioritizing operational integrity and safety in both offshore and onshore applications.          </h2>

          {/* Lorem ipsum text */}
          <p className="my-[2.5rem] text-[16px]  text-start">
          CS Arabia's CNSA division specializes in Pipeline Pre-Commissioning and Commissioning. Our services include Nitrogen Leak Testing, Nitrogen Drying, Nitrogen Blanketing, and Nitrogen Mothballing, all designed to ensure pipeline system integrity and efficiency.          </p>
       
          <p className="text-[16px]  text-start">
          We also provide Air Drying, Pipeline Scrapper Mechanical Cleaning and Gauging, Inline Inspection of Pipelines, and De-Cruding services. These processes enhance pipeline performance, diagnose issues, and maintain system integrity.       </p>

          <p className=" mt-[2.5rem] text-[16px]  text-start">
          At CNSA, we're committed to delivering innovative, tailored solutions that meet industry demands. Our focus on safety, reliability, and efficiency establishes us as a leader in advancing industry standards and operational excellence.          </p>
        </div>
      </div>
    </div>
  )
}

export default ServicesCNSASection
