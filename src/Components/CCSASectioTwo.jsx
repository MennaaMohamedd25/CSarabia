import React from 'react';
import Doots from '../images/doots.png';


const approaches = [
    {
      id: 1,
      title: 'Sophisticated Technology',
      description: 'Our industry-leading team leverages the most advanced equipment and techniques to remove residual oil, hard water deposits, corrosion, and other unwanted impurities and contaminants from pipelines and process equipment.',
    },
    {
      id: 2,
      title: 'Customized Strategies:',
      description: 'Having provided customized chemical cleaning solutions to over 120 clients worldwide, we are no strangers to tailoring bespoke chemical cleaning strategies. Following a thorough evaluation of contaminants present and your desired cleanliness levels, we can craft a bespoke strategy to preserve the integrity of your systems.',
    },
    {
      id: 3,
      title: 'Eco-Friendly Processes:',
      description: 'Our uniquely Earth-friendly approach to chemical cleaning and decontamination ensures you achieve the results you seek with minimal ecological impact. We use environmentally-responsible products and process for your peace of mind.',
    },
    {
        id: 4,
        title: 'Human-Centered Approach:',
        description: 'Our clients pulse the heart of all we do. Our human-centric approach keep your distinct needs in mind when developing customized chemical cleaning solutions that meet the unique needs of our esteemed industrial clients',
      },
      {
        id: 5,
        title: 'Supreme Quality:',
        description: 'Continuous Services Arabia’s experience and technology means we are uniquely poised to effectively remove biofouling, sludge contaminants, and more, with results that last from initial planning to ongoing maintenance.',
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

