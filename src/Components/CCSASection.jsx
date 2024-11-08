import React from "react";
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
            While there is no shortage of chemical cleaning services in Saudi
            Arabia, there is only one name that is hailed for chemical treatment
            mastery that delivers superior results without harming the
            environment.{" "}
          </h2>

          {/* Text */}
          <p className="my-[2.5rem] text-[16px] text-start">
            CS ARABIA offers the widest and most advanced suite of chemical
            cleaning, treatment, and decontamination solutions for pipelines,
            plants, and terminals.{" "}
          </p>

          <p className="text-[16px] text-start mb-6">
            We are honored to be the pinnacle destination for an elite pool of
            clients all across the region who know they don’t need to go
            anywhere else for advanced chemical treatment.{" "}
          </p>
          <p className="text-[16px] text-start mb-6">
          CS ARABIA stands unmatched as an undisputed leader in state-of-the-art, eco-friendly chemical treatment solutions, with the goal of optimizing performance while contributing to a more sustainable future for all.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CCSASection;
