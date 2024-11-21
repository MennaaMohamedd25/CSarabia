import React from 'react';
import logo from '../images/footerlogo.svg';
import logoT from '../images/Frame (3).svg';

import { Link } from 'react-router-dom';

const socialMediaLogos = [
  { src: logoT, alt: 'twitter' },

];

const servicesLinks = [
  { name: 'CNSA', path: 'services-cnsa' },
  { name: 'CPSA', path: 'cpsa' },
  { name: 'CCSA', path: 'ccsa' },
  { name: 'CWSA', path: 'cwsa' },
];

const aboutLinks = [
  { name: 'Company overview', path: 'company-overview' },
  { name: 'Our teams', path: 'team' },
  { name: 'Mission and vision', path: 'mission&vision' },
  { name: 'Our approach', path: 'approach' },
];

const FooterTwo = () => {
  return (
    <>
      <div className='relative my-[0px] lg:my-[18rem] xl:my-[18rem] w-[95%] mx-auto '>
      <div 
  className="
 
    bg-primary 
    w-full 
    max-w-[1240px] 
    mx-auto 
    relative 
    right-0 
    left-0 
    rounded-[24px] 
    text-center 
    text-[#FFF] 
    xl:absolute 

    lg:absolute

    pt-20    
    lg:pt-[80px]    
    pb-14    
    lg:pb-[55px]    
    px-10    
    
  " 
  style={{
    top: 'calc(50% - 260px)', 
  }}
>

          <h2 className='font-bold text-[40px]'>Ptotect your infrastinfrastructure</h2>
          <p className='mt-[16px] mb-[48px] mx-auto'>As new nitrogen service providers emerge, Continuous Services Arabia remains the Kingdom’s premier destination for advanced nitrogen leak detection and pressure testing. Contact us to learn how we can pinpoint hidden leaks and maintain the integrity of your pipeline flow.</p>
          <Link to='contact-us' className="bg-secondery text=[16px] text-[#FFFF] px-[40px] py-[18px] rounded-[50px]">
            Contact Us
          </Link>
        </div>
      </div>

      <footer className="w-full bg-vanish text-white pt-[2rem] pb-[2rem] text-center xl:text-start xl:pt-[190px] lg:text-start lg:pt-[190px] mt-[40px]"> {/* Set footer as relative */}
        <div className='w-[95%] mx-auto px-[16px] lg:px-[24px] xl:px-[24px]'>  
          <div className="flex flex-col md:flex-row justify-between">
            {/* First Column */}
            <div className="flex-col items-center justify-center md:justify-start mb-4 md:mb-0 ">
              <img src={logo} alt='logo csarabia' className='m-auto xl:ml-0 lg:ml-0'/>
              <p className="my-[2rem] w-[302px] text-secondery sm:mx-auto xs:mx-auto">
              Building a legacy of service excellence and technical precision for the future of Saudi Arabia’s oil & gas sector.              </p>
              <div className='flex space-x-2 mb-[2rem] gap-6 justify-center xl:justify-normal lg:justify-normal'>
  {socialMediaLogos.map((logo, index) => (
    <Link to='#' key={index} className='bg-secondery rounded-full p-2 flex items-center justify-center'>
      <img src={logo.src} alt={logo.alt} className='h-6 w-6' />
    </Link>
  ))}
</div>

            </div>

            {/* Second Column with 3 Sub-columns */}
            <div className="flex flex-col md:flex-row justify-between w-full md:w-auto gap-8 lg:gap-[6rem] xl:gap-[6rem]">
              {/* Services Column */}
              <div className="flex flex-col mb-4 md:mb-0">
                <h3 className="font-semibold mb-2 text-secondery text-[18px]">Services</h3>
                <ul>
                  {servicesLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="text-secondery text-[14px] hover:text-primary ease-in-out">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Us Column */}
              <div className="flex flex-col mb-4 md:mb-0">
                <h3 className="font-semibold mb-2 text-secondery text-[18px]">About Us</h3>
                <ul>
                  {aboutLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.path} className="text-secondery text-[14px] hover:text-primary ease-in-out">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subscribe to Newsletter Column */}
              <div className="flex flex-col mb-4 md:mb-0 items-center xl:items-start lg:items-start">
                <h3 className="font-semibold mb-2 text-secondery text-[18px]">Subscribe to Newsletter</h3>
                <div className="flex items-center" style={{ width: '320px', padding: '16px 0px' }}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 p-[16px] bg-secondery text-white placeholder-white focus:outline-none" 
                    style={{ borderRadius: '8px 0px 0px 8px', height: '56px' }} // Set a fixed height
                  />
                  <button className="bg-primary text-white p-[16px]" style={{ borderRadius: '0px 8px 8px 0px', height: '56px' }}>
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='w-[100%] h-[1px] bg-[#B8B8B8] my-[3rem]'></div>

          <p className='text-secondery text-center'>© Copyright 2024, All Rights Reserved by Continuous Services Arabia</p>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
