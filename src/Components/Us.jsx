import React from "react";
import us from "../images/us.png";

const Us = () => {
  return (
    <div className="w-[95%] mx-auto shadow-md rounded-[24px] bg-vanish px-[16px] py-[2.5rem] xl:px-[5rem] lg:px-[5rem]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-x-20">
        {/* First Column: Headline, Text, and Button */}
        <div className="md:w-1/2 mb-[40px] md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold text-secondery mb-0">
            Who we <span className="text-primary">are</span>
          </h1>
          <p className="text-span leading-[1.5rem] my-[2.5rem]">
            Saudi Arabia’s Premier Partner in Industrial Services and Solutions
            Welcome to CS ARABIA, the Kingdom’s most experienced provider of
            nitrogen services, pipeline solutions, water treatment, and safe
            chemical decontamination.{" "}
          </p>
          <p className="text-span leading-[1.5rem] my-[2.5rem]">
          The Regional Leader in Oil & Gas Industry Innovation Since its formation in 2012, CS ARABIA swiftly cemented its spot as an undisputed leader in oil and gas sector excellence. We do not follow trends, we create them – performing ongoing due diligence to stay at the forefront of industry advancements for the benefit of our clients.
          </p>
          <button className="buttonOne">
            <span className="buttonText">About Us</span>
          </button>
        </div>

        {/* Second Column: Image */}
        <div className="md:w-1/2 flex items-center justify-center">
          <img src={us} alt="Descriptive text" />
        </div>
      </div>
    </div>
  );
};

export default Us;
