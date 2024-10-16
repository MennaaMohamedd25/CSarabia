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
import { Link, useLocation } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'; 
import pdfOne from '../Pdfs/iso9001.pdf';
import pdfTwo from '../Pdfs/iso45001.pdf';
import pdfThree from '../Pdfs/iso14001.pdf';
import pdfFour from '../Pdfs/QUALITY MANUAL.pdf';
import pdfFive from '../Pdfs/Health, Safety and Environment Policy.pdf';
import pdfSix from '../Pdfs/HEALTH & SAFETY MANUAL.pdf';
import pdfSeven from '../Pdfs/Gifts and Hospitality Policy.pdf';
import pdfEight from '../Pdfs/Conflict of Interest Policy.pdf';
import pdfNine from '../Pdfs/Code of Conduct Policy.pdf';
import pdfTen from '../Pdfs/Anti Corruption Policy.pdf';
import Annual from '../Pdfs/Surfactant Based Chemical cleaning.docx';

// Array holding service data
const services = [
  { id: 1, image: serviceOne, description: "Pipeline Pre-Commissioning & Commissioning.", url: '/pipeline' },
  { id: 2, image: serviceTwo, description: "Nitrogen Leak Testing", url: '/nitrogen' },
  { id: 3, image: serviceThree, description: "Nitrogen Drying", url: '/drying' },
  { id: 4, image: serviceFour, description: "Nitrogen Blanketing", url: '/nitrogena' },
  { id: 5, image: serviceFive, description: "Nitrogen Mothballing", url: '/mothballing' },
  { id: 6, image: serviceSix, description: "Air Drying", url: '/air' },
  { id: 7, image: serviceSeven, description: "Pipeline Scrapper Mechanical Cleaning & Gauging", url: '/gauging' },
  { id: 8, image: serviceEight, description: "Inline Inspection of Pipelines", url: '/inspection' },
  { id: 9, image: serviceNine, description: "De-Cruding: Using water and nitrogen.", url: '/nitrogen' },
];

const ServicesCNSAMain = () => {
  const location = useLocation(); // Get current location

  // Download PDF
  const handleDownloadAll = () => {
    const pdfFiles = [
      pdfOne,
      pdfTwo,
      pdfThree,
      pdfFour,
      pdfFive,
      pdfSix,
      pdfSeven,
      pdfEight,
      pdfNine,
      pdfTen,
      Annual
    ];
    pdfFiles.forEach((pdfFile) => {
      const link = document.createElement('a');
      link.href = pdfFile;
      link.download = pdfFile.split('/').pop(); // Use the file name as the download name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div className='bg-vanish'>
      <div className="w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[0px] lg:px-[0px]">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_1fr] xl:grid-cols-[280px_1fr_1fr] lg:gap-6 xl:gap-6">
          {/* Sidebar */}
          <div>
            <div className='bg-[#FFF] shadow-md rounded-[24px] p-6 text-start'>
              <h3 className="text-lg font-semibold p-[16px]">Services</h3>
              <div className='w-full h-[1px] bg-[#F0F4F8] my-[24px]'></div>
              <div className='flex flex-col'>
                <Link 
                  to='/services-cnsa' 
                  className={`focus:bg-primary active:bg-primary p-[16px] rounded-[16px] 
                    ${location.pathname === '/services-cnsa' ? 'bg-primary text-white' : ''}`}
                >
                  CNSA
                </Link>
                <Link to='/cpsa' className='my-[24px] focus:bg-primary active:bg-primary p-[16px] rounded-[16px] focus:text-white active:text-white'>
                  CPSA
                </Link>
                <Link to='/ccsa' className='focus:bg-primary active:bg-primary p-[16px] rounded-[16px] focus:text-white active:text-white'>
                  CCSA
                </Link>
                <Link to='/cwsa' className='mt-[24px] focus:bg-primary active:bg-primary p-[16px] rounded-[16px] focus:text-white active:text-white'>
                  CWSA
                </Link>
              </div>
            </div>

            <div className='bg-[#FFF] shadow-md rounded-[24px] p-6 text-start mt-[40px] mb-[40px]'>
              <h3 className="text-lg font-semibold p-[16px]">Brochures and flyers</h3>
              <div className='w-full h-[1px] bg-[#F0F4F8] my-[24px]'></div>
              <button className='flex items-center justify-between bg-primary text-white p-[16px] rounded-[16px] cursor-pointer' onClick={handleDownloadAll}>
                <div className='flex items-center space-x-2'>
                  <img 
                    src={pdf} 
                    alt='Download Icon' 
                  />
                  <span>Download</span>
                </div>
                <span className='text-white'>15M</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-rows-3 gap-6 col-span-2">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 3).map((service) => (
                <div key={service.id} className="relative group">
                  <img
                    src={service.image}
                    alt='Service'
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <Link to={service.url} className="absolute top-4 right-4 w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRightIcon className='w-6 h-6' />
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
                    alt='Service'
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <Link to={service.url} className="absolute top-4 right-4 w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRightIcon className='w-6 h-6' />
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
                    alt='Service'
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <Link to={service.url}  className="absolute top-4 right-4 w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRightIcon className='w-6 h-6' />
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
    </div>
  );
};

export default ServicesCNSAMain;
