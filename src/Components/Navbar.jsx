import React, { useState } from "react"; 
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import logo from "../images/OBJECTS.svg";
import servOne from "../images/sevlogo.svg";
import servTwo from "../images/sevlogo2.svg";
import servThree from "../images/sevlogo3.svg";
import servFour from "../images/sevlogo4.svg";
import { Link } from "react-router-dom";
import Icon4 from "../images/Frame (3).svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is active

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHover = (text) => {
    setHoverText(text);
  };

  const handleHoverOut = () => {
    setHoverText("");
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null); // Close if already open
    } else {
      setActiveDropdown(dropdown); // Open the new dropdown
    }
  };

  const closeDropdownAndSelectLink = (dropdown, link) => {
    setActiveDropdown(null); // Close the dropdown
    window.location.href = link; // Navigate to the selected link
  };

  return (
    <nav className="w-[95%] mx-auto shadow-md rounded-[12px] px-[24px] fixed top-2 py-5 bg-[#1A1A1A] xl:bg-[rgba(28,28,28,0.80)] xl:py-[10px] lg:xl:bg-[rgba(28,28,28,0.80)] lg:py-[10px] z-10 inset-x-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <Link to="/" className="flex flex-col space-y-[0.8rem]">
            <div className="flex-shrink-0">
              <img src={logo} alt="logo" className="ml-[5px] xl:ml-0 lg:ml-0 md:ml-0" />
            </div>
            <p className="text-white hidden md:flex">Continuous Services Arabia</p>
          </Link>
          <div className="h-[25px] w-[2px] border-l-4 border-ts mt-2 hidden md:flex"></div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-[#FFFFFF] relative"
              onMouseEnter={() => handleHover("Home")}
              onMouseLeave={handleHoverOut}
            >
              Home
            </Link>

            <Link
              to="ccsa"
              className="relative"
              onMouseEnter={() => handleHover("Continuous Chemicals Services Arabia")}
              onMouseLeave={handleHoverOut}
            >
              <img src={servOne} alt="ccsa" className="w-[65px]" />
              {hoverText === "Continuous Chemicals Services Arabia" && (
                <span className="absolute left-0 top-full mt-1 w-max bg-[#1A1A1A] text-white text-sm px-2 py-1 rounded-md">
                  {hoverText}
                </span>
              )}
            </Link>
            <Link
              to="services-cnsa"
              className="relative"
              onMouseEnter={() => handleHover("Continuous Nitrogen Services Arabia")}
              onMouseLeave={handleHoverOut}
            >
              <img src={servTwo} alt="cnsa" className="w-[65px]" />
              {hoverText === "Continuous Nitrogen Services Arabia" && (
                <span className="absolute left-0 top-full mt-1 w-max bg-[#1A1A1A] text-white text-sm px-2 py-1 rounded-md">
                  {hoverText}
                </span>
              )}
            </Link>
            <Link
              to="cpsa"
              className="relative"
              onMouseEnter={() => handleHover("Continuous Pipelines Services Arabia")}
              onMouseLeave={handleHoverOut}
            >
              <img src={servThree} alt="cpsa" className="w-[65px]" />
              {hoverText === "Continuous Pipelines Services Arabia" && (
                <span className="absolute left-0 top-full mt-1 w-max bg-[#1A1A1A] text-white text-sm px-2 py-1 rounded-md">
                  {hoverText}
                </span>
              )}
            </Link>
            <Link
              to="cwsa"
              className="relative"
              onMouseEnter={() => handleHover("Continuous Water Services Arabia")}
              onMouseLeave={handleHoverOut}
            >
              <img src={servFour} alt="cwsa" className="w-[65px]" />
              {hoverText === "Continuous Water Services Arabia" && (
                <span className="absolute left-0 top-full mt-1 w-max bg-[#1A1A1A] text-white text-sm px-2 py-1 rounded-md">
                  {hoverText}
                </span>
              )}
            </Link>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="text-[#FFFFFF] flex items-center"
              >
                About
                {activeDropdown === "about" ? (
                  <ChevronUpIcon className="h-5 w-5 ml-1" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 ml-1" />
                )}
              </button>
              {activeDropdown === "about" && (
                <div className="absolute bg-[#1A1A1A] text-[#FFF] shadow-md mt-8 rounded-2xl py-5">
                  <Link 
                    to="company-overview" 
                    className="block px-4 py-2 hover:bg-primary w-60"
                    onClick={() => closeDropdownAndSelectLink("about", "/company-overview")}
                  >
                    Company overview
                  </Link>
                  <Link 
                    to="team" 
                    className="block px-4 py-2 hover:bg-primary w-60"
                    onClick={() => closeDropdownAndSelectLink("about", "/team")}
                  >
                    Our teams
                  </Link>
                  <Link 
                    to="mission&vision" 
                    className="block px-4 py-2 hover:bg-primary w-60"
                    onClick={() => closeDropdownAndSelectLink("about", "/mission&vision")}
                  >
                    Mission and vision
                  </Link>
                  <Link 
                    to="approach" 
                    className="block px-4 py-2 hover:bg-primary w-60"
                    onClick={() => closeDropdownAndSelectLink("about", "/approach")}
                  >
                    Our approach
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>


        <div className="items-center space-x-10 hidden md:flex">
     
     <Link to="#">
       <img src={Icon4} alt="Icon 4" className="w-[25px]" />
     </Link>
     <Link to='contact-us' className="bg-primary text=[16px] text-[#FFFF] px-4 py-2 rounded-lg">
       Contact Us
     </Link>
   </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#FFF] focus:outline-none">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden md:hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-[20.8px] flex flex-col items-start gap-y-4">
          <Link 
            to="/" 
            className="text-[#FFF] hover:text-primary text-center py-[8px] ml-[5px]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="ccsa" 
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <img src={servOne} alt="ccsa" className="w-[65px]" />
          </Link>
          <Link 
            to="services-cnsa" 
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <img src={servTwo} alt="cnsa" className="w-[65px]" />
          </Link>
          <Link 
            to="cpsa" 
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <img src={servThree} alt="cpsa" className="w-[65px]" />
          </Link>
          <Link 
            to="cwsa" 
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <img src={servFour} alt="cwsa" className="w-[65px]" />
          </Link>
          <Link 
            to="company-overview" 
            className="text-[#FFF] hover:text-primary text-center py-[8px] ml-[5px]"
            onClick={() => setIsOpen(false)}
          >
            Company Overview
          </Link>
          <Link 
            to="team" 
            className="text-[#FFF] hover:text-primary text-center py-[8px] ml-[5px]"
            onClick={() => setIsOpen(false)}
          >
            Our Teams
            
          </Link>
          <Link 
            to="mission&vision" 
            className="text-[#FFF] hover:text-primary text-center py-[8px] ml-[5px]"
            onClick={() => setIsOpen(false)}
          >
               Mission and vision
            
          </Link>
          <Link 
            to="approach" 
            className="text-[#FFF] hover:text-primary text-center py-[8px] ml-[5px]"
            onClick={() => setIsOpen(false)}
          >
             Our Approach
            
          </Link>
          <Link to="contact-us" className="bg-primary text-[16px] text-[#FFF] px-4 py-2 rounded-lg text-center mt-4 ml-[5px]">
    Contact Us
  </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
