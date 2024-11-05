import React from 'react';
import Doots from '../images/doots.png';

const approaches = [
    {
      id: 1,
      title: 'Optimize Pipeline Integrity:',
      description: 'From pre-commissioning to proactive pipeline maintenance, our skilled team will evaluate the integrity of your nitrogen-filled pipelines to ensure efficacy, cleanliness, and system reliability.',
    },
    {
      id: 2,
      title: 'Contaminant Protection:',
      description: 'Seal your pipeline’s defense by repelling harmful contaminants through nitrogen inertion, blanketing, and purging',
    },
    {
      id: 3,
      title: 'Prevent Leaks:',
      description: 'Through accurate and cost-effective nitrogen leak detection, our proficient engineers can quickly pinpoint precise leak locations for rapid intervention and rectification.',
    },
    {
      id: 4,
      title: 'Avoid Corrosion & Combustion Risk',
      description: 'Create an oxygen-free atmosphere that prevents oxidation and rust, while significantly extending pipeline lifespan and performance.',
    },
    {
        id: 5,
        title: 'Eliminate Moisture:',
        description: 'Purging nitrogen is the most effective way to remove water vapor and control moisture, creating the dryest possible environment for optimal nitrogen flow.',
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
