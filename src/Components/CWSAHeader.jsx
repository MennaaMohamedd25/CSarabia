import React from 'react';
import headerBgImage from '../images/headerbg3.png'; 
import { Link } from 'react-router-dom';
import CWSALogo from "../images/Group 12.svg";

const CWSAHeader = () => {
  return (
    <div
    className="relative h-screen bg-cover bg-center transition-opacity duration-1000"
    style={{
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${headerBgImage}) lightgray 50% / cover no-repeat`,
    }}
  >
    <div className="absolute inset-0 flex flex-col items-center justify-center h-full px-[16px]">
    <img src={CWSALogo} alt='cwsa'/>

      <p
        className="
          w-auto
          my-[2rem]      
          text-white           
          text-[16px]             
          text-center  
          md:text-[18px]    
          lg:w-[832px] lg:text-[20px]    
          xl:w-[832px]  xl:text-[20px]  
        "
      >
Arabia’s Leading Continuous Water Services The Future of Waste-water Treatment in the Kingdom    </p>
      <Link to='/contact-us' className="buttonTwo">
        <span className="buttonText">Contact Us</span>
      </Link>
    </div>
  </div>
  )
}

export default CWSAHeader
