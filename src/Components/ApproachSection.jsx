import React from 'react';
import Doots from '../images/doots.png';

// Array of approach data
const approaches = [
  {
    id: 1,
    title: 'INNOVATIVE SOLUTIONS',
    description: 'We leverage the latest technologies and advanced methodologies to deliver state-of-the-art solutions tailored to the unique needs of our clients.',
  },
  {
    id: 2,
    title: 'SUSTAINABILITY',
    description: 'Our commitment to environmental stewardship drives us to implement sustainable practices that benefit both our clients and the communities we serve.',
  },
  {
    id: 3,
    title: 'EXCELLENCE IN SERVICE',
    description: 'We maintain the highest standards of quality and safety, ensuring unparalleled service and support for our clients.',
  },
  {
    id: 4,
    title: 'CLIENT-CENTRIC',
    description: 'We build enduring partnerships based on trust, understanding, and mutual success, delivering customized solutions that drive operational success.',
  }
];

const ApproachSection = () => {
  return (
    <div className='bg-vanish'>
      <div className="w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]">
        
        {/* Responsive 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Iterate over the array to generate columns dynamically */}
          {approaches.map((approach) => (
            <div key={approach.id} className="flex flex-col items-start text-start">
              <div className="flex items-center justify-start mb-4">
                <img src={Doots} alt="Doots" className="mr-3" />
                <h3 className="text-[20px] font-semibold">{approach.title}</h3>
              </div>
              <p className="text-[16px] text-span">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;
