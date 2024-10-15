import React from 'react';
import overview from '../images/cpsa.png';
// PDFS
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
import pdf from '../images/pdf.svg'; // Ensure you import the PDF icon image


const CPSAMain = () => {

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
        <div className='w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]'>
          <div className="flex flex-col md:flex-row justify-between items-center gap-x-20">
            {/* Second Column: Image */}
            <div className="md:w-1/2 flex items-center justify-center order-2 md:order-2 mb-[1.5rem]">
  <img src={overview} alt="Descriptive " className="rounded-[24px]" />
</div>
    
            {/* First Column: Headline, Text, and Button */}
            <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left order-1 md:order-1">
              {/* Heading */}
              <p className="text-[16px] text-start">
              CPSA, nestled within CSARABIA's dynamic ecosystem, stands as a beacon of innovation and excellence in the pipeline services sector.
              </p>
    
     
                {/* First Paragraph with ellipses */}
                <p className="my-[2.5rem] text-[16px] text-start">
                With a focus on harnessing state-of-the-art Positive Seal Coupling technology, CPSA transcends traditional methods by eliminating the need for welding, thus enhancing the safety, efficiency, and reliability of pipeline construction and maintenance.               </p>
    
              {/* Second Paragraph with ellipses */}
              <p className="text-[16px] text-start">
              This approach not only streamlines operations but also ensures seamless, robust connections.               </p>
              <p className="my-[2.5rem] text-[16px] text-start">
              Catering to a broad spectrum of environments, from the rigorous demands of offshore platforms to the nuanced needs of onshore projects, CPSA’s comprehensive solutions underscore our commitment to maintaining pipeline integrity.             </p>
              <p className=" text-[16px] text-start">
              Our pioneering spirit and unwavering dedication to quality set new industry standards, making CPSA the go-to partner for entities seeking unparalleled pipeline expertise. CPSA holds the exclusive supply and installation rights for this patented technology in Saudi Arabia and the Middle East in partnership with Jetair International, cementing its status as a leader in the field          </p>
              <button className='flex items-center justify-between bg-primary mt-[2.5rem] text-white p-[16px] rounded-[16px] cursor-pointer' onClick={handleDownloadAll}>
                <div className='flex items-center space-x-4'>
                  <img 
                    src={pdf} 
                    alt='Download Icon' 
                  />
                  <span>Download</span>
                </div>
                <span className='text-white ml-4 '>15M</span>
              </button>
            </div>
          </div>
        </div>
  )
}

export default CPSAMain
