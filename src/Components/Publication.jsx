import React, { useState } from 'react';
import pdfIcon from '../images/pdf.png';

// Import the PDFs
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
import Sustainability from '../Pdfs/Understanding How the Compact Flotation Unit Works.docx';
import Statistical from '../Pdfs/Understanding How the Nitrogen Generation Unit Works.docx';
import Energy from '../Pdfs/Understanding How the Positive Seal Coupling Works.docx';

// Function to download a specific PDF
const downloadPdf = (pdfFile, fileName) => {
  const link = document.createElement('a');
  link.href = pdfFile;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Accordion Component
const Accordion = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className='rounded-[32px] overflow-hidden transition-all duration-300 ease-in-out'>
      <div
        className='flex justify-between items-center px-[40px] py-[30px] cursor-pointer bg-vanish'
        onClick={onToggle}
      >
        <h3 className='font-medium text-secondery'>{title}</h3>
        <span className='text-2xl text-secondery'>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      <div
        className={`px-[40px] bg-vanish text-sm text-ts overflow-hidden transition-all duration-500 ease-in-out text-start ${isOpen ? 'max-h-[1000px] pb-[32px]' : 'max-h-0 pb-0'}`}
      >
        {isOpen && (
          <div>{content}</div>
        )}
      </div>
    </div>
  );
};

// Function to download all PDFs
const downloadAllPdfs = () => {
  const pdfFiles = [
    pdfOne, pdfTwo, pdfThree, pdfFour, pdfFive, 
    pdfSix, pdfSeven, pdfEight, pdfNine, pdfTen
  ];

  pdfFiles.forEach((pdfFile, index) => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = `document_${index + 1}.pdf`; // Customize the file name if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};

// Main Publication Component
const Publication = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Approximate PDF sizes (replace with actual sizes)
  const pdfSizes = {
    all: "15MB",
    annual: "1.2MB",
    sustainability: "900KB",
    statistical: "850KB",
    energyOutlook: "1.1MB",
    chairmanMessage: "700KB"
  };

  return (
    <div className='w-[95%] mx-auto py-10'>
      <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold text-secondery mb-[2.5rem]'>Publications</h2>

      <div className='flex flex-col md:flex-row md:gap-6'>
        {/* Accordion Section */}
        <div className='flex-1 flex flex-col justify-between space-y-[8px] mb-6 md:mb-0 md:mr-4'>
          <Accordion
            title="Petroleum Engineering"
            content="Synergistically build professional communities vis-a-vis best-of-breed paradigms. Quickly empower world-class networks with prospective methodologies."
            isOpen={openIndex === 0}
            onToggle={() => handleToggle(0)}
          />
          <Accordion
            title="International Trade"
            content="Synergistically build professional communities vis-a-vis best-of-breed paradigms. Quickly empower world-class networks with prospective methodologies."
            isOpen={openIndex === 1}
            onToggle={() => handleToggle(1)}
          />
          <Accordion
            title="Chemicals and Refining"
            content="Synergistically build professional communities vis-a-vis best-of-breed paradigms. Quickly empower world-class networks with prospective methodologies."
            isOpen={openIndex === 2}
            onToggle={() => handleToggle(2)}
          />
        </div>

        {/* Download PDF Section */}
        <div className="flex-1 space-y-[2rem] bg-vanish rounded-[32px] p-[2.5rem] flex flex-col justify-between">
          {/* Download All PDFs Button */}
          <div className='flex items-center justify-between'>
            <button className='flex items-center menna' onClick={downloadAllPdfs}>
              <span><img src={pdfIcon} alt='pdf' className='w-[33.33px]' /></span>
              <span className='ml-3 text-[16px] font-[700] lg:text-[24px] xl:text-[24px]'>Download PDF</span>
            </button>
            <span className='text-secondery'>{pdfSizes.all}</span>
          </div>

          <hr className='border-gray-300 my-[2rem]' />

          <p className='text-secondery font-[500] text-start'>Other Downloads</p>

          {/* PDF Info Section */}
          <div className='flex flex-col space-y-6'>
            {/* Annual Report Button */}
            <div className='flex items-center justify-between'>
              <button className='flex items-center' onClick={() => downloadPdf(Annual, 'Annual_Report.pdf')}>
                <span><img src={pdfIcon} alt='pdf' className='w-[30px]' /></span>
                <span className='ml-3 text-secondery'>Annual Report</span>
              </button>
              <span className='text-secondery'>{pdfSizes.annual}</span>
            </div>

            {/* Sustainability Report Button */}
            <div className='flex items-center justify-between'>
              <button className='flex items-center' onClick={() => downloadPdf(Sustainability, 'Sustainability_Report.pdf')}>
                <span><img src={pdfIcon} alt='pdf' className='w-[30px]' /></span>
                <span className='ml-3 text-secondery'>Sustainability Report</span>
              </button>
              <span className='text-secondery'>{pdfSizes.sustainability}</span>
            </div>

            {/* Statistical Report Button */}
            <div className='flex items-center justify-between'>
              <button className='flex items-center' onClick={() => downloadPdf(Statistical, 'Statistical_Report.pdf')}>
                <span><img src={pdfIcon} alt='pdf' className='w-[30px]' /></span>
                <span className='ml-3 text-secondery'>Statistical Report</span>
              </button>
              <span className='text-secondery'>{pdfSizes.statistical}</span>
            </div>

            {/* Energy Outlook Button */}
            <div className='flex items-center justify-between'>
              <button className='flex items-center' onClick={() => downloadPdf(Energy, 'Energy_Outlook.pdf')}>
                <span><img src={pdfIcon} alt='pdf' className='w-[30px]' /></span>
                <span className='ml-3 text-secondery'>Energy Outlook</span>
              </button>
              <span className='text-secondery'>{pdfSizes.energyOutlook}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
