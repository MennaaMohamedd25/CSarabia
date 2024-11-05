import React from "react";
import overview from "../images/overview.png";

const ServicesCNSASection = () => {
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
          As Arabian leaders in nitrogen services, we know better than anyone the importance of sophisticated nitrogen solutions for the oil and gas industry.
          </h2>

          {/* Lorem ipsum text */}
          <p className="my-[2.5rem] text-[16px]  text-start">
          In collaboration with Canadian Nitrogen Services and Abdulla Fouad Energy Services, CS ARABIA sets the golden benchmark for the region’s oil, gas, petrochemical, and processing sectors. 
          </p>

          <p className="text-[16px]  text-start">
          While other companies aim to meet your expectations, we are here to surpass them from end to end. CS ARABIA balances time-tested wisdom with emerging industry advancements to bring you the highest standards in safety and operational integrity. 
          </p>

          <p className=" mt-[2.5rem] text-[16px]  text-start">
          Proudly serving a vast network of local and international clientele, we are passionate about creating safe working environments by improving pipeline integrity and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCNSASection;
