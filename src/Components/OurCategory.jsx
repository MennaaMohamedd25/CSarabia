import React from 'react';
import workOne from '../images/work_card.png';
import workTwo from '../images/work_card (1).png';
import workThree from '../images/work_card (2).png';

const OurCategory = () => {
  const categories = [
    { 
      image: workOne, 
      title: 'Skilled Engineers', 
      description: 'Our team of highly trained engineers brings unparalleled expertise to every project, ensuring innovative solutions and precision in execution.' 
    },
    {  
      image: workTwo, 
      title: 'Modern Machines', 
      description: 'Equipped with the latest in technology, our modern machines enable us to tackle complex challenges with efficiency and reliability.' 
    },
    {  
      image: workThree, 
      title: 'Quality Service', 
      description: 'Quality Service At the core of CSARABIA, we are committed to delivering exceptional service, characterized by meticulous attention to detail and a steadfast dedication to excellence.' 
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
