import React from 'react';
import Doots from '../images/doots.png';

const approaches = [
    {
      id: 1,
      title: 'Comprehensive Pipeline Services',
      description: 'CNSA delivers end-to-end nitrogen solutions for pipeline integrity management, from meticulous pre-commissioning to strategic maintenance operations, ensuring longevity and optimal performance.',
    },
    {
      id: 2,
      title: 'Excellence in Quality and Safety',
      description: 'Our unwavering dedication to quality drives us to exceed customer expectations consistently, prioritizing safety and reliability in every service we provide.',
    },
    {
      id: 3,
      title: 'Technological Edge',
      description: 'Equipped with advanced mobile high-pressure nitrogen units and LN2 tanks featuring ambient vaporizers, CNSA is poised to efficiently satisfy a broad spectrum of client requirements.',
    },
    {
      id: 4,
      title: 'Team of Specialists',
      description: 'Our cadre of extensively trained professionals stands ready to address the most intricate challenges in pipeline nitrogen services with expertise and precision.',
    },
    {
        id: 5,
        title: 'Endorsed by Excellence',
        description: 'Proud to be an Aramco-approved vendor, CNSA aligns its operations with the pinnacle of industry standards and best practices for assured service quality.',
      }
  ];

const ServicesCNSADetails = () => {
  return (
    <div className='bg-vanish'>
    <div className="w-[95%] mx-auto text-center px-[16px] py-10">
      
      {/* Responsive 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
  )
}

export default ServicesCNSADetails
