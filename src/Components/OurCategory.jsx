import React from 'react';
import workOne from '../images/work_card.png';
import workTwo from '../images/work_card (1).png';
import workThree from '../images/work_card (2).png';

const OurCategory = () => {
  const categories = [
    { 
      image: workOne, 
      title: 'SKILL', 
      description: 'Work with the industry’s finest chemical engineers, nitrogen service specialists, and water treatment experts who prioritize safety, quality, and technical precision in everything they do.' 
    },
    {  
      image: workThree, 
      title: 'TECHNOLOGY', 
      description: 'Continuous Services Arabia spares no expense in procuring the most sophisticated machinery and technology to ensure we can deliver the results you expect without unnecessary setbacks or delays.' 
    },
    {  
      image: workTwo, 
      title: 'QUALITY', 
      description: 'Service excellence is the lifeblood that pulses at the heart of the Continuous Services Arabia anatomy. We are obsessed with attention to detail, leaving no stone unturned to deliver non-negotiable brilliance.' 
    },
    // Add more categories as needed
  ];

  return (
    <div className='bg-vanish my-[2.5rem]'>
      <div className='w-[95%] mx-auto py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {categories.map((category, index) => (
            <div key={index} className='relative'>
              <img 
                src={category.image} 
                alt={category.title} 
                className='w-full object-cover mb-4 rounded' 
              />
              <div className='absolute bottom-10 left-0 right-0  text-white p-4 flex flex-col justify-center' style={{ height: '100px' }}>
                <h3 className='text-lg font-bold mb-2'>{category.title}</h3>
                <p className='text-sm'>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCategory;
