import React from 'react';
import atombg from '../images/atom.png'; // Adjust the path based on your file structure

const Atom = () => {
  const columns = [
    {
      title: 'Commitment to Sustainability',
      description: 'Sustainability is at the core of our operations. We are committed to implementing environmentally responsible practices and technologies that reduce our carbon footprint and promote the long-term health of the communities we serve. Our solutions are designed to not only meet but exceed industry standards for environmental performance.',
    },
    {
      title: 'Strategic Advantage',
      description: 'The collaboration between Canadian Nitrogen Services Ltd. and Abdullah Fouad Energy Services brings together decades of experience and a deep understanding of both global trends and regional demands. This strategic alliance allows us to offer unparalleled service quality and innovation, positioning CS Arabia as a leader in the oil and gas sector.',
    },
    {
      title: 'Regional Focus',
      description: 'With a strong presence across the Gulf and Middle East regions, CS Arabia is uniquely positioned to address the specific challenges and opportunities within these markets. Our local expertise, combined with our global reach, enables us to deliver customized solutions that drive success for our clients.',
    },
  ];

  return (
    <div 
      className="relative bg-cover bg-center h-[1290px] flex items-end justify-between xl:h-[1200px] lg:h-[1200px] md:h-[1200px] " 
      style={{ backgroundImage: `url(${atombg})` }} 
    >
   
      {/* Content */}
      <div className='relative z-[5px] w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]'>
        <h2 className='text-[20px] font-bold text-[#FFF] w-auto mb-8 xl:w-[550px] xl:text-[32px] lg:w-[548px] lg:text-[32px]'>
          CS Arabia: Pioneering Excellence in Nitrogen, Pipeline, Water, and Chemical Solutions for the Oil and Gas Industry
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
          {columns.map((column, index) => (
            <div key={index} className="space-y-4 text-center md:text-left xl:text-left lg:text-left">
              <h2 className="text-[19px] font-medium xl:text-[24px] lg:text-[24px]">{column.title}</h2>
              <p className='text-[16px]'>{column.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Atom;
