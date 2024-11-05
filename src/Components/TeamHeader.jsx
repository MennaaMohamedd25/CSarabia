import React from "react";

const TeamHeader = () => {
  return (
    <div className="w-[95%] mx-auto text-center px-[16px] py-10 my-[8rem] xl:mt-[10rem] lg:mt-[10rem] md:mt-[8rem]">
      {/* Red dot with text */}
      <div className="flex items-center mb-4 justify-center">
        <span className="w-[8px] h-[8px] bg-primary  rounded-full mr-2"></span>
        <p className="text-secondery  ">Our Team</p>
      </div>

      {/* H2 heading */}
      <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[70px] lg:text-[70px] md:text-[50px]">
        "Bringing <span className="text-primary">Skilled</span> Engineers to
        Your Project."{" "}
      </h2>

      {/* Lorem text */}
      <p className="text-[20px] opacity-[0.4]">
      Only the finest engineers pass CS ARABIA’s meticulous hiring and vetting process. We invite deeply skilled and rigorously trained industrial specialists to join our team, working collaboratively to set industry benchmarks that others strive to replicate. You can learn more about these remarkable industry veterans below. Their cross-sector experience helps us do more for the client pool we serve, supporting sustainable growth and extraordinary operational success, today and tomorrow
      </p>
    </div>
  );
};

export default TeamHeader;
