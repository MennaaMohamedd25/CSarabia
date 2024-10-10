import React from 'react';
import overview from '../images/overview.png';

const OverviewMain = () => {
  return (
    <div className='w-[95%] mx-auto shadow-md rounded-[24px] bg-vanish p-10 my-[2.5rem] py-[2.5rem] px-[16px] lg:px-[5rem] xl:px-[5rem]'>
      <div className="flex flex-col md:flex-row justify-between items-center gap-x-20">
        {/* Second Column: Image */}
        <div className="md:w-1/2 flex items-center justify-center order-1 md:order-2 mb-[1.5rem]">
          <img src={overview} alt="Descriptive text" />
        </div>

        {/* First Column: Headline, Text, and Button */}
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left order-2 md:order-1">
          {/* Red dot and text */}
          <div className="flex items-center mb-4">
            <span className="w-[8px] h-[8px] bg-primary rounded-full inline-block mr-2"></span>
            <p className="text-secondery text-[24px]">Our Culture</p>
          </div>

          {/* Heading */}
          <h2 className="my-[2.5rem] text-[16px] xl:text-[20px] lg:text-[20px] text-start">
            "Empowering People, Fostering Excellence, Together as Family."
          </h2>

          {/* Lorem ipsum text */}
          <p className="text-[16px] xl:text-[20px] lg:text-[20px] text-start">
            At CS Arabia, we pride ourselves on fostering a company culture that feels like a family. Our culture is built on mutual respect, collaboration, and a shared commitment to excellence. We believe that our people are our greatest asset, and we are dedicated to their growth and development in both transformational and transactional ways.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OverviewMain;
