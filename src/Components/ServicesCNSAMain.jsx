import React from "react";
import serviceOne from "../images/serv1.png";
import serviceTwo from "../images/serv2.png";
import serviceThree from "../images/serv3.png";
import serviceFour from "../images/serv4.png";
import serviceFive from "../images/serv5.png";
import serviceSix from "../images/serv6.png";
import serviceSeven from "../images/serv7.png";
import serviceEight from "../images/serv8.png";
import serviceNine from "../images/serv9.png";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

// Array holding service data
const services = [
  {
    id: 1,
    image: serviceOne,
    description: "Pipeline Pre-Commissioning & Commissioning.",
    url: "/pipeline",
  },
  {
    id: 2,
    image: serviceTwo,
    description: "Nitrogen Leak Testing",
    url: "/nitrogen",
  },
  {
    id: 3,
    image: serviceThree,
    description: "Nitrogen Drying",
    url: "/drying",
  },
  {
    id: 4,
    image: serviceFour,
    description: "Nitrogen Blanketing",
    url: "/nitrogena",
  },
  {
    id: 5,
    image: serviceFive,
    description: "Nitrogen Mothballing",
    url: "/mothballing",
  },
  { id: 6, image: serviceSix, description: "Air Drying", url: "/air" },
  {
    id: 7,
    image: serviceSeven,
    description: "Pipeline Scrapper Mechanical Cleaning & Gauging",
    url: "/gauging",
  },
  {
    id: 8,
    image: serviceEight,
    description: "Inline Inspection of Pipelines",
    url: "/inspection",
  },
  {
    id: 9,
    image: serviceNine,
    description: "De-Cruding: Using water and nitrogen.",
    url: "/cruding",
  },
];

const ServicesCNSAMain = () => {
  return (
    <div className="bg-vanish">
      <div className="w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[0px] lg:px-[0px]">
        {/* Main Content */}
        <div className="grid grid-rows-3 gap-6 col-span-2">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className="relative group">
                <img
                  src={service.image}
                  alt="Service"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <Link
                  to={service.url}
                  className="absolute top-4 right-4 w-[40px] h-[40px] border text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-white"
                >
                  <ArrowRightIcon className="w-6 h-6 transform transition-transform duration-200 group-hover:-rotate-45" />
                </Link>
                <p className="absolute bottom-0 left-0 w-full text-white text-center p-4 font-semibold text-[16px] md:text-[20px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(3, 6).map((service) => (
              <div key={service.id} className="relative group">
                <img
                  src={service.image}
                  alt="Service"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <Link
                  to={service.url}
                  className="absolute top-4 right-4 w-[40px] h-[40px] border text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-white"
                >
                  <ArrowRightIcon className="w-6 h-6 transform transition-transform duration-200 group-hover:-rotate-45" />
                </Link>
                <p className="absolute bottom-0 left-0 w-full text-white text-center p-4 font-semibold text-[16px] md:text-[20px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(6).map((service) => (
              <div key={service.id} className="relative group">
                <img
                  src={service.image}
                  alt="Service"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <Link
                  to={service.url}
                  className="absolute top-4 right-4 w-[40px] h-[40px] border text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-white"
                >
                  <ArrowRightIcon className="w-6 h-6 transform transition-transform duration-200 group-hover:-rotate-45" />
                </Link>
                <p className="absolute bottom-0 left-0 w-full text-white text-center p-4 font-semibold text-[16px] md:text-[20px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCNSAMain;
