import React, { useState } from 'react';
import pdf from '../images/pdf.png';

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
        className={`px-[40px] bg-vanish text-sm text-ts overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] pb-[32px]' : 'max-h-0 pb-0'}`}
      >
        {isOpen && (
          <div>{content}</div>
        )}
      </div>
    </div>
  );
};

// Main Publication Component
const Publication = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]'>
      <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold text-secondery mb-[2.5rem]'>Publications</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Accordion Section */}
        <div className='flex flex-col justify-evenly space-y-[8px]'> {/* Reduced space-y to 8px for smaller gaps */}
          {/* Accordion 1 */}
          <Accordion
            title="Petrolium Engineering"
            content="Synergistically build professional communities vis-a-vis best-of-breed paradigms. Quickly empower world-class networks with prospective methodologies. Enthusiastically morph cross functional web-readiness via virtual niche markets. Synergistically enhance one-to-one partnerships after go forward metrics. Competently facilitate alternative networks for fully tested internal or organic sources. Synergistically disintermediate an expanded array of niche markets through value-added value. Dynamically communicate cost effective results after intuitive scenarios. Distinctively impact synergistic experiences."
            isOpen={openIndex === 0}
            onToggle={() => handleToggle(0)}
          />

          {/* Accordion 2 */}
          <Accordion
            title="International Trade"
            content="Synergistically build professional communities vis-a-vis best-of-breed paradigms. Quickly empower world-class networks with prospective methodologies. Enthusiastically morph cross functional web-readiness via virtual niche markets. Synergistically enhance one-to-one partnerships after go forward metrics. Competently facilitate alternative networks for fully tested internal or organic sources. Synergistically disintermediate an expanded array of niche markets through value-added value. Dynamically communicate cost effective results after intuitive scenarios. Distinctively impact synergistic experiences."
            isOpen={openIndex === 1}
            onToggle={() => handleToggle(1)}
          />

          {/* Accordion 3 */}
          <Accordion
            title="Chemicals and Refining"
            content="Synergistically build professional communities vis-a-vis best-of-breed paradigms. Quickly empower world-class networks with prospective methodologies. Enthusiastically morph cross functional web-readiness via virtual niche markets. Synergistically enhance one-to-one partnerships after go forward metrics. Competently facilitate alternative networks for fully tested internal or organic sources. Synergistically disintermediate an expanded array of niche markets through value-added value. Dynamically communicate cost effective results after intuitive scenarios. Distinctively impact synergistic experiences."
            isOpen={openIndex === 2}
            onToggle={() => handleToggle(2)}
          />
        </div>

        {/* Download PDF Section */}
        <div className='space-y-[2rem] bg-vanish rounded-[32px] p-[2.5rem] flex flex-col justify-between'>
          {/* Download Section */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <span><img src={pdf} alt='pdf' className='w-[33.33px]' /></span>
              <span className='ml-3 text-[24px] font-[700]'>Download PDF</span>
            </div>
            <span className='text-secondery'>1.5M</span>
          </div>

          <hr className='border-gray-300 my-[2rem]' />

          {/* PDF Info */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <span><img src={pdf} alt='pdf' className='w-[30px]' /></span>
              <span className='ml-3 text-secondery'>Annual Report</span>
            </div>
            <span className='text-secondery'>1.5M</span>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <span><img src={pdf} alt='pdf' className='w-[30px]' /></span>
              <span className='ml-3 text-secondery'>Sustainability Report</span>
            </div>
            <span className='text-secondery'>1.5M</span>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <span><img src={pdf} alt='pdf' className='w-[30px]' /></span>
              <span className='ml-3 text-secondery'>Statistical Report</span>
            </div>
            <span className='text-secondery'>1.5M</span>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <span><img src={pdf} alt='pdf' className='w-[30px]' /></span>
              <span className='ml-3 text-secondery'>Energy Outlook</span>
            </div>
            <span className='text-secondery'>1.5M</span>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <span><img src={pdf} alt='pdf' className='w-[30px]' /></span>
              <span className='ml-3 text-secondery'>Chairman’s Message</span>
            </div>
            <span className='text-secondery'>1.5M</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
