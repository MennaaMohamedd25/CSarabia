import React from 'react';
import headerBgImage from '../images/headerbg4.png'; // Import your background image
import { Link } from 'react-router-dom';
import CPSALogo from "../images/Group 11.svg";

const CPSAHeader = () => {
  return (
    <div
    className="relative h-screen bg-cover bg-center transition-opacity duration-1000"
    style={{
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${headerBgImage}) lightgray 50% / cover no-repeat`,
    }}
  >
    <div className="absolute inset-0 flex flex-col items-center justify-center h-full px-[16px]">
   <img src={CPSALogo} alt='cpsa' />

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
Welding-Free Pipeline Connections Through Positive Seal Coupling     </p>
      <Link to='/contact-us' className="buttonTwo">
        <span className="buttonText">Contact Us</span>
      </Link>
    </div>
  </div>
  )
}

export default CPSAHeader
