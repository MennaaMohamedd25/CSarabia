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
          Continuous Water Services Arabia, your gateway to pioneering water management technologies. As the exclusive agent for Stauper Water Technologies in Kuwait, Bahrain, and Iraq, we specialize in deploying Stauper's Compact Flotation Unit (CFU). 
          </h2>

          {/* Lorem ipsum text */}
          <p className="my-[2.5rem] text-[16px]  text-start">
          These advanced solutions, part of Stauper's patented portfolio, offer robust and low maintenance systems for treating produced water in oil and gas extraction. 
          </p>

          <p className="text-[16px]  text-start">
          Designed to handle high oil content and complex water chemistries, our systems are ideal for both space and weight-sensitive projects, enhancing operational efficiency while championing environmental sustainability
          </p>

          <p className=" mt-[2.5rem] text-[16px]  text-start">
          The Stauper CFU is globally recognized as the Best Available Technology by leading operators due to its innovative design. Its patented SCC technology distinguishes it from competitors by ensuring highly efficient, stable, and robust separation of oil and gas from water through a unique water flow pattern. Additionally, the SCC's versatility allows for retrofitting into existing water separation vessels, enhancing their efficiency and capacity. This feature facilitates straightforward, cost-effective upgrades and debottlenecking, accommodating increased water production while meeting strict discharge requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CWSASection;
