import React from 'react';
import Doots from '../images/doots.png';

const approaches = [
    {
      id: 1,
      title: 'Exceptional Oil Removal Efficiency:',
      description: 'Staupers technology offers an unparalleled capability to eliminate up to 99.5% of oil from water, ensuring cleaner outputs and environmental compliance. This exceptional performance underscores Staupers commitment to delivering top-tier water treatment solutions that meet the stringent demands of the oil and gas industry.',
    },
    {
      id: 2,
      title: 'Achieving Near-Zero Discharge Levels',
      description: 'Staupers technology significantly reduces environmental impact by pushing discharge levels toward 0 ppm, setting a new standard in water treatment efficiency and compliance. This capability ensures that operations meet even the most stringent environmental regulations, supporting a sustainable future in industrial processes.',
    },
    {
      id: 3,
      title: 'Versatility in Treatment',
      description: 'Stauper’s technology excels by offering flexibility in operation, stability in performance, and the added capability to effectively remove solids from water. This multi-faceted approach enhances the adaptability and efficiency of water treatment processes, meeting diverse operational needs with superior results.',
    },
    
 
  ];

const CWSASectionTwo = () => {
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

export default CWSASectionTwo
