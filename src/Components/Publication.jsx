import React from 'react';
import pdfIcon from '../images/pdf.png';

// Import the PDFs
// import Anti from '../Pdfs/Anti Corruption Policy.pdf';
import Conduct from '../Pdfs/Code of Conduct Policy.pdf';
// import Conflict from '../Pdfs/Conflict of Interest Policy.pdf';
import Gifts from '../Pdfs/Gifts and Hospitality Policy.pdf';
import Health from '../Pdfs/HEALTH & SAFETY MANUAL.pdf';
import HealthPolicy from '../Pdfs/Health, Safety and Environment Policy.pdf';
import IsoOne from '../Pdfs/ISO - 14001.pdf';
import IsoTwo from '../Pdfs/ISO - 45001.pdf';
import IsoThree from '../Pdfs/ISO - 9001.pdf';
import Quaility from '../Pdfs/QUALITY MANUAL.pdf';
import Chimical from '../Pdfs/Surfactant Based Chemical cleaning.docx';
import Flotaion from '../Pdfs/Understanding How the Compact Flotation Unit Works.docx';
import Nitrogin from '../Pdfs/Understanding How the Nitrogen Generation Unit Works.docx';
import Seal from '../Pdfs/Understanding How the Positive Seal Coupling Works.docx';
// Function to download a specific PDF
const downloadPdf = (pdfFile, fileName) => {
  const link = document.createElement('a');
  link.href = pdfFile;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Function to download multiple PDFs (ISO series)
const downloadAllIsos = () => {
  downloadPdf(IsoOne, 'ISO-14001.pdf');
  downloadPdf(IsoTwo, 'ISO-45001.pdf');
  downloadPdf(IsoThree, 'ISO-9001.pdf');
};

const Publication = () => {
  // Approximate PDF sizes (replace with actual sizes)
  const pdfSizes = {
    all: "15MB",
    annual: "1.2MB",
    sustainability: "900KB",
    statistical: "850KB",
    energyOutlook: "1.1MB",
    menna:'2.4MB',
    Conduct:'3.1',
    gifts:'1.5'
  };

  return (
    <div className='w-[95%] mx-auto py-10'>
      <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold text-secondery mb-[2.5rem]'>Publications</h2>

      <div className='flex flex-col md:flex-row md:gap-6'>
        {/* First Column with Downloadable Titles */}
        <div className='flex-1 flex flex-col justify-between space-y-[8px] mb-6 md:mb-0 md:mr-4'>
          {[
            { title: "Understanding how the Nitrogen Generation Unit works", pdf: Nitrogin, fileName: 'Nitrogen_Generation.pdf' },
            { title: "Understanding how the Positive Seal coupling works", pdf: Seal, fileName: 'Positive_Seal_Coupling.pdf' },
            { title: "Understanding how the Compact Floatation Unit works", pdf: Flotaion, fileName: 'Compact_Floatation_Unit.pdf' },
            { title: " How the Surfactant Chemical Cleaning is carried out", pdf: Chimical, fileName: 'Surfactant_Cleaning.pdf' },
          ].map((doc, index) => (
            <div
              key={index}
              className='rounded-[32px] overflow-hidden transition-all duration-300 ease-in-out cursor-pointer'
              onClick={() => downloadPdf(doc.pdf, doc.fileName)}
            >
              <div className='flex justify-between items-center px-[40px] py-[30px] bg-vanish'>
                <h3 className='font-medium text-secondery text-[16px]'>{doc.title}</h3>
                <span><img src={pdfIcon} alt='pdf' className='w-[30px]' /></span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Column for Other Downloads */}
        <div className="flex-1 space-y-[2rem] bg-vanish rounded-[32px] p-[2.5rem] flex flex-col justify-between">
          {/* Download All PDFs Button */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center' >
              <span><img src={pdfIcon} alt='pdf' className='w-[33.33px]' /></span>
              <span className='ml-3 text-[16px] font-[700] lg:text-[24px] xl:text-[24px]'>Download PDF</span>
            </div>
         
          </div>

          <hr className='border-gray-300 my-[2rem]' />

          <p className='text-secondery font-[500] text-start'>Other Downloads</p>

          {/* PDF Info Section */}
          <div className='flex flex-col space-y-6'>
            {/* Annual Report Button */}
            <div className='flex items-center justify-between'>
            <button className='flex items-center' onClick={downloadAllIsos}>
                <span><img src={pdfIcon} alt='pdf' className='w-[30px]' /></span>
                <span className='ml-3 text-secondery'>ISO</span>
              </button>
              <span className='text-secondery'>{pdfSizes.sustainability}</span>
            </div>

            {/* Sustainability Report Button */}
            <div className='flex items-center justify-between'>
              <button className='flex items-center' onClick={() => downloadPdf(Quaility, 'Quaility_Report.pdf')}>
                <span><img src={pdfIcon} alt='pdf' className='w-[30px]' /></span>
                <span className='ml-3 text-secondery'>Quality Manual</span>
              </button>
              <span className='text-secondery'>{pdfSizes.statistical}</span>
            </div>

            {/* Statistical Report Button */}
            <div className='flex items-center justify-between'>
              <button className='flex items-center' onClick={() => downloadPdf(HealthPolicy, 'HealthPolicy_Report.pdf')}>
                <span><img src={pdfIcon} alt='pdf' className='w-[30px]' /></span>
                <span className='ml-3 text-secondery'>Anti corruption policy</span>
              </button>
              <span className='text-secondery'>{pdfSizes.energyOutlook}</span>
            </div>

            {/* Energy Outlook Button */}
            <div className='flex items-center justify-between'>
              <button className='flex items-center' onClick={() => downloadPdf(Gifts, 'Gifts.pdf')}>
                <span><img src={pdfIcon} alt='pdf' className='w-[30px]' /></span>
                <span className='ml-3 text-secondery'>Code of Conduct</span>
              </button>
              <span className='text-secondery'>{pdfSizes.menna}</span>
            </div>
             {/* Energy Outlook Button */}
            <div className='flex items-center justify-between'>
              <button className='flex items-center' onClick={() => downloadPdf(Conduct, 'Conflict.pdf')}>
                <span><img src={pdfIcon} alt='pdf' className='w-[30px]' /></span>
                <span className='ml-3 text-secondery'>Conflict of Interest</span>
              </button>
              <span className='text-secondery'>{pdfSizes.Conduct}</span>
            </div>
             {/* Energy Outlook Button */}
             <div className='flex items-center justify-between'>
              <button className='flex items-center' onClick={() => downloadPdf(Gifts, 'Energy_Outlook.pdf')}>
                <span><img src={pdfIcon} alt='pdf' className='w-[30px]' /></span>
                <span className='ml-3 text-secondery'>Gifts and Hospitality</span>
              </button>
              <span className='text-secondery'>{pdfSizes.gifts}</span>
            </div>
               {/* Energy Outlook Button */}
               <div className='flex items-center justify-between'>
              <button className='flex items-center' onClick={() => downloadPdf(Health, 'Energy_Outlook.pdf')}>
                <span><img src={pdfIcon} alt='pdf' className='w-[30px]' /></span>
                <span className='ml-3 text-secondery text-start'>Health and Safety for Environment policy</span>
              </button>
              <span className='text-secondery'>{pdfSizes.annual}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
