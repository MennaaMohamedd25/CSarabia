import React from 'react';
import atombg from '../images/atom.png'; // Adjust the path based on your file structure

const Atom = () => {
  const columns = [
    {
      title: 'Sustainability',
      description: 'We adhere to a set of ecofriendly practices that exceed industry standards while deeply benefitting the communities we serve.',
    },
    {
      title: 'Strategy ',
      description: 'Our time-tested wisdom and profound understanding of regional demands solidifies our stance as the region’s oil & gas leader.',
    },
    {
      title: 'Presence',
      description: 'The name CS ARABIA is synonymous with technical expertise and process precision across the Gulf and Middle East region.',
    },
  ];

  return (
    <div 
      className="relative bg-cover bg-center  flex h-auto items-end justify-between xl:h-[1200px] lg:h-[1200px] md:h-[1200px]" 
      style={{ backgroundImage: `url(${atombg})` }} 
    >
      {/* Dark overlay for small and extra small screens */}
      <div className="absolute inset-0 bg-black opacity-50 md:hidden"></div> {/* Adjust opacity as needed */}

      {/* Content */}
      <div className='relative z-[5] w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]'>
        <h2 className='text-[20px] font-bold text-[#FFF] w-auto mb-8 xl:w-[550px] xl:text-[32px] lg:w-[548px] lg:text-[32px]'>
        A Saudi Force to be Reckoned With
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
