import React from 'react';
import Doots from '../images/doots.png';


const approaches = [
    {
      id: 1,
      title: 'State-of-the-Art Technology',
      description: 'Employing cutting-edge chemical technologies and methods to ensure efficient and environmentally responsible cleaning.',
    },
    {
      id: 2,
      title: 'Tailored Chemical Solutions Efficiency',
      description: 'Developing customized cleaning strategies in partnership with clients to specifically address their unique operational needs.',
    },
    {
      id: 3,
      title: 'Full-Service Capability',
      description: 'Providing a broad range of chemical cleaning services from routine maintenance to critical emergency responses.',
    },
    {
        id: 4,
        title: 'Dedicated to Sustainability',
        description: 'Prioritizing ecological responsibility in all projects to minimize environmental impacts.',
      },
      {
        id: 5,
        title: 'Guaranteed Quality',
        description: 'Upholding the highest standards of operational excellence with stringent quality controls and expert execution.',
      },
      {
        id: 6,
        title: 'Client-Centric Approach',
        description: 'Building lasting relationships based on trust and satisfaction, striving to exceed expectations in every project..',
      },
 
  ];

const CCSASectioTwo = () => {
  return (
    <div className='bg-vanish'>
    <div className="w-[95%] mx-auto text-center px-[16px] py-10">
      
      {/* Responsive 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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

export default CCSASectioTwo

