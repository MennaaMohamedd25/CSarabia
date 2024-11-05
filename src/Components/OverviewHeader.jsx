import React from "react";

const Overview = () => {
  return (
    <div className="w-[95%] mx-auto text-center px-[16px] py-10 my-[8rem] xl:mt-[10rem] lg:mt-[10rem] md:mt-[8rem]">
      {/* Red dot with text */}
      <div className="flex items-center mb-4 justify-center">
        <span className="w-[8px] h-[8px] bg-primary  rounded-full mr-2"></span>
        <p className="text-secondery  ">Company Overview</p>
      </div>

      {/* H2 heading */}
      <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[70px] lg:text-[70px] md:text-[50px]">
        Powering Industrial<span className="text-primary">Excellence</span>{" "}
        Since 2012."
      </h2>

      {/* Lorem text */}
      <p className="text-[20px] opacity-[0.4]">
      CS ARABIA: A LEGACY IN MOTION. A CULTURE OF EXCELLENCE.
      </p>
    </div>
  );
};

export default Overview;
