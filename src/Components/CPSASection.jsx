import React from 'react'
import Doots from '../images/doots.png';

const approaches = [
    {
      id: 1,
      title: 'Enhanced Safety',
      description: 'PSC technology eliminates the need for welding, significantly reducing the risk of accidents and ensuring a safer working environment during pipeline installation and maintenance.',
    },
    {
      id: 2,
      title: 'Improved Efficiency',
      description: 'OBy streamlining the connection process, PSC enhances operational efficiency, saving time and reducing labor costs, while maintaining high standards of quality and reliability.',
    },
    {
      id: 3,
      title: 'Corrosion Resistance',
      description: 'The robust design of PSC ensures maximum coating integrity and eliminates internal corrosion risks, extending the lifespan of pipelines and reducing maintenance requirements.',
    },
    {
      id: 4,
      title: 'Versatile Applications',
      description: 'PSC is suitable for a wide range of environments and industries, from offshore oil platforms to onshore water treatment plants, making it a versatile solution for various pipeline needs.',
    }
  ];

const CPSASection = () => {
  return (
    <div className='bg-vanish'>
      <div className="w-[95%] mx-auto text-center px-[16px] py-10">
        
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
  )
}

export default CPSASection
