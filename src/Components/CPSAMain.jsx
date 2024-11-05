import React from "react";
import overview from "../images/cpsa.png";

const CPSAMain = () => {
  return (
    <div className="shadow-md rounded-[24px] bg-vanish p-10 my-[2.5rem]  px-[16px]  w-[95%] mx-auto  py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-x-20">
        {/* Second Column: Image */}
        <div className="md:w-1/2 flex items-center justify-center order-2 md:order-2 mb-[1.5rem]">
          <img src={overview} alt="Descriptive " className="rounded-[24px]" />
        </div>

        {/* First Column: Headline, Text, and Button */}
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left order-1 md:order-1">
          {/* Heading */}
          <p className="text-[16px] text-start">
            CS ARABIA has built a decade-strong reputation on foundations of
            innovation, and our pipeline connection solutions are no exception.{" "}
          </p>

          {/* First Paragraph with ellipses */}
          <p className="my-[2.5rem] text-[16px] text-start">
          As regional leaders in pipeline services, our clients choose us to save time, money, and effort. 
          </p>

          {/* Second Paragraph with ellipses */}
          <p className="text-[16px] text-start">
          And now, in partnership with Jetair International, we are upholding our long-standing promise of excellence through the implementation of a Positive Seal Coupling System (PSC) that lets us connect pipelines without any welding required. First developed in 1979, PSC brings a revolutionary and high-strength approach to traditional welding. 
          </p>
          <p className="my-[2.5rem] text-[16px] text-start">
          With minimal pre-work or post-connection inspection needed, PSC accelerates a conventionally slow and costly process while ensuring superior results in comparison. 
          </p>
          <p className=" text-[16px] text-start">
          Our Positive Seal Coupling System has been subjected to rigorous third-party testing to ensure superior results suitable for even the highest-pressure environments
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

export default CPSAMain;
