import React from 'react';
import serviceOne from '../images/serv1.png';
import serviceTwo from '../images/serv2.png';
import serviceThree from '../images/serv3.png';
import serviceFour from '../images/serv4.png';
import serviceFive from '../images/serv5.png';
import serviceSix from '../images/serv6.png';
import serviceSeven from '../images/serv7.png';
import serviceEight from '../images/serv8.png';
import serviceNine from '../images/serv9.png';
import pdf from '../images/pdf.svg'; // Ensure you import the PDF icon image
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'; // Heroicons v2

// Array holding service data
const services = [
    { id: 1, image: serviceOne, description: "Pipeline Pre-Commissioning & Commissioning.", url: '/pipeline' },
    { id: 2, image: serviceTwo, description: "Nitrogen Leak Testing", url: '/nitrogen' },
    { id: 3, image: serviceThree, description: "Nitrogen Drying", url: '/drying' },
    { id: 4, image: serviceFour, description: "Nitrogen Blanketing", url: '/nitrogena' },
    { id: 5, image: serviceFive, description: "Nitrogen Mothballing", url: '/mothballing' },
    { id: 6, image: serviceSix, description: "Air Drying", url: '/air' },
    { id: 7, image: serviceSeven, description: "Pipeline Mechanical Cleaning & Gauging", url: 'gauging' },
    { id: 8, image: serviceEight, description: "Inline Inspection of Pipelines", url: '/inspection' },
    { id: 9, image: serviceNine, description: "Using water and nitrogen.", url: '/service/water-nitrogen' },
  ];
const ServicesCNSAMain = () => {
  return (
    <div className='bg-vanish'>
      <div className="w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[0px] lg:px-[0px]">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_1fr] xl:grid-cols-[280px_1fr_1fr] lg:gap-6 xl:gap-6">
          {/* Sidebar */}
          <div>
            <div className='bg-[#FFF] shadow-md rounded-[24px] p-6 text-start'>
              <h3 className="text-lg font-semibold p-[16px]">Services</h3>
              <div className='w-100 h-[1px] bg-[#F0F4F8] my-[24px]'></div>
              <div className='flex flex-col'>
                <Link to='/services-cnsa' className='focus:bg-primary active:bg-primary p-[16px] rounded-[16px] focus:text-white active:text-white'>CNSA</Link>
                <Link to='/cpsa' className='my-[24px] focus:bg-primary active:bg-primary p-[16px] rounded-[16px] focus:text-white active:text-white'>CPSA</Link>
                <Link to='/ccsa' className='focus:bg-primary active:bg-primary p-[16px] rounded-[16px] focus:text-white active:text-white'>CCSA</Link>
                <Link to='/cwsa' className='mt-[24px] focus:bg-primary active:bg-primary p-[16px] rounded-[16px] focus:text-white active:text-white'>CWSA</Link>
              </div>
            </div>

            <div className='bg-[#FFF] shadow-md rounded-[24px] p-6 text-start mt-[40px] mb-[40px]'>
              <h3 className="text-lg font-semibold p-[16px]">Brochures and flyers</h3>
              <div className='w-100 h-[1px] bg-[#F0F4F8] my-[24px]'></div>
              <div className='flex items-center justify-between bg-primary text-white p-[16px] rounded-[16px]'>
                <div className='flex items-center space-x-2'>
                  <img 
                    src={pdf} 
                    alt='Download Icon' 
                    className=' '
                  />
                  <span>Download</span>
                </div>
                <span className='text-white'>1.5M</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-rows-3 gap-6 col-span-2">
            {/* Row 1 */}
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-6">
              {services.slice(0, 3).map((service) => (
                <div key={service.id} className="relative group">
                  <img
                    src={service.image}
                    alt='csna'
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <Link to={service.url} className="absolute top-4 right-4 w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRightIcon className='w-6 h-6' />
                  </Link>
                  <p className="absolute bottom-0 left-0 w-full text-white text-center p-4 font-semibold text-[20px]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-6">
              {services.slice(3, 6).map((service) => (
                <div key={service.id} className="relative group">
                  <img
                    src={service.image}
                    alt='csna'
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <Link to={service.url} className="absolute top-4 right-4 w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRightIcon className='w-6 h-6' />
                  </Link>
                  <p className="absolute bottom-0 left-0 w-full text-white text-center p-4 font-semibold text-[20px]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-6">
              {services.slice(6).map((service) => (
                <div key={service.id} className="relative group">
                  <img
                    src={service.image}
                    alt='csna'
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <Link to={`/service/${service.id}`} className="absolute top-4 right-4 w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRightIcon className='w-6 h-6' />
                  </Link>
                  <p className="absolute bottom-0 left-0 w-full text-white text-center p-4 font-semibold text-[20px]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCNSAMain;
