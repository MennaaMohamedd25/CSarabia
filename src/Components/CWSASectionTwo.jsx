import React from 'react';
import Doots from '../images/doots.png';

const approaches = [
    {
      id: 1,
      title: '99.95% Efficacy',
      description: 'Our exceptional de-oiling success is rooted in our exclusive partnership with Stauper Water Technologies. With 50% higher efficiency and a 50% lower footprint, CS ARABIA is a pioneer in the separation of oil, gas, and solids from produced water, a catalyst for safe disposal or reuse.',
    },
    {
      id: 2,
      title: 'Environmental Compliance ',
      description: 'Aside from lowering costs, Stauper’s oil-water separation technology showcases a near-zero discharge of almost 0 ppm. This mitigates environmental pollution by keeping contaminants away from water sources. We are proud to be in a position to use our technical expertise to preserve natural resources and leave a better world behind for future generations.',
    },
    {
      id: 3,
      title: 'High Capacity:',
      description: 'Only CS ARABIA can handle extraordinarily high volumes of fluid, without compromising efficiency or performance. Stauper’s advanced oil-water separation technology means we can apply the method to high water volumes across a broad range of sectors.. This multi-faceted approach enhances the adaptability and efficiency of water treatment processes, meeting diverse operational needs with superior results.',
    },
    {
      id: 4,
      title: 'Scientific Precision',
      description: 'Combining centrifugal forces and fluid dynamics in a robust and maintenance-free system, Staupers Compact Flotation Unit ensures efficient separation of oil droplets and gas bubbles from produced water.',
    },
    {
      id: 5,
      title: 'Flexible Technology Integration:',
      description: 'CS ARABIA puts its clients in control. Choose between a plug-and-play solution, or retrofit existing vessels to improve flow capacity and de-oiling without resorting to costly chemicals or vessel recertification',
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
