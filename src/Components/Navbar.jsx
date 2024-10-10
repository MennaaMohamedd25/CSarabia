import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import logo from "../images/OBJECTS.svg";
import Icon1 from "../images/Frame.svg";
import Icon2 from "../images/Frame (1).svg";
import Icon3 from "../images/Frame (2).svg";
import Icon4 from "../images/Frame (3).svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is active

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null); // Close if already open
    } else {
      setActiveDropdown(dropdown); // Open the new dropdown
    }
  };

  return (
    <nav className="w-[95%] mx-auto shadow-md rounded-[12px] px-[24px] fixed top-5 py-5 bg-[#1A1A1A] xl:bg-[rgba(28,28,28,0.80)] xl:py-[10px] lg:xl:bg-[rgba(28,28,28,0.80)] lg:py-[10px] z-10 inset-x-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-10">
          {/* Logo */}
      <Link to='/'  >    <img src={logo} alt="logo" /></Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-[#FFFFFF]">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className="text-[#FFFFFF] flex items-center"
              >
                Services
                {activeDropdown === "services" ? (
                  <ChevronUpIcon className="h-5 w-5 ml-1" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 ml-1 " />
                )}
              </button>
              {activeDropdown === "services" && (
                <div className="absolute bg-[#1A1A1A] text-[#FFF] shadow-md mt-5 rounded-2xl py-5">
                  <Link to="services-cnsa" className="block px-4 py-2 hover:bg-primary w-40">
                    CNSA
                  </Link>
                  <Link to="cpsa" className="block px-4 py-2 hover:bg-primary w-40">
                    CPSA
                  </Link>
                  <Link to="ccsa" className="block px-4 py-2 hover:bg-primary w-40">
                    CCSA
                  </Link>
                  <Link to="cwsa" className="block px-4 py-2 hover:bg-primary w-40">
                    CWSA
                  </Link>
                </div>
              )}
            </div>
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
                <div className="absolute bg-[#1A1A1A] text-[#FFF] shadow-md mt-5 rounded-2xl py-5">
                  <Link to="company-overview" className="block px-4 py-2 hover:bg-primary w-60">
                    Company overview
                  </Link>
                  <Link to="team" className="block px-4 py-2 hover:bg-primary w-60">
                    Our teams
                  </Link>
                  <Link to="mission&vision" className="block px-4 py-2 hover:bg-primary w-60">
                    Mission and vision
                  </Link>
                  <Link to="approach" className="block px-4 py-2 hover:bg-primary w-60">
                    Our approach
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* links */}
        <div className="items-center space-x-10 hidden md:flex">
          <Link to="#">
            <img src={Icon1} alt="Icon 1" />
          </Link>
          <Link to="#">
            <img src={Icon2} alt="Icon 2" />
          </Link>
          <Link to="#">
            <img src={Icon3} alt="Icon 3" />
          </Link>
          <Link to="#">
            <img src={Icon4} alt="Icon 4" />
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
        <div className="py-[20.8px]">
          <Link to="/" className="block text-[#FFF] hover:text-primary">
            Home
          </Link>
          <Link to="services-cnsa" className="block text-[#FFF] hover:text-primary my-[1.3rem]">
            CNSA
          </Link>
          <Link to="cpsa" className="block text-[#FFF] hover:text-primary">
            CPSA
          </Link>
          <Link to="ccsa" className="block text-[#FFF] hover:text-primary my-[1.3rem]">
            CCSA
          </Link>
          <Link to="cwsa" className="block text-[#FFF] hover:text-primary">
            CWSA
          </Link>
          <Link to="company-overview" className="block text-[#FFF] hover:text-primary my-[1.3rem]">
            Company overview
          </Link>
          <Link href="team" className="block text-[#FFF] hover:text-primary">
            Our teams
          </Link>
          <Link href="mission&vision" className="block text-[#FFF] hover:text-primary my-[1.3rem]">
            Mission and vision
          </Link>
          <Link to="approach" className="block text-[#FFF] hover:text-primary mb-[1.3rem]">
            Our approach
          </Link>

          {/* <div className="flex my-[1.3rem] gap-6">
            <img src={Icon1} alt="Icon 1" />
            <img src={Icon2} alt="Icon 2" />
            <img src={Icon3} alt="Icon 3" />
            <img src={Icon4} alt="Icon 4" />
          </div> */}

          <Link to='contact-us' className="bg-primary text=[16px] text-[#FFFF] px-4 py-2 rounded-lg ">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
