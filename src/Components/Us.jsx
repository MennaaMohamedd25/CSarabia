import React from 'react';
import us from '../images/us.png';

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
            Build better online communities and improve software. Make supply chains more efficient and understand business relationships better. Use outside help to save money and improve online services. Create easy-to-use websites and apps that work on different devices. Manage information and people more effectively. Use resources wisely.
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
