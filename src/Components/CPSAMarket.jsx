import React from 'react';
import marketOne from '../images/market1.png';
import marketTwo from '../images/market2.png';
import marketThree from '../images/market3.png';
import marketFour from '../images/market4.png';

// Data array for the market items
const marketData = [
  {
    id: 1,
    image: marketOne,
    title: 'Oil and Gas Industry',
    point1: 'Onshore and Offshore Platforms: The PSC system is ideal for both onshore and offshore oil and gas pipelines, offering enhanced safety and reliability in challenging environments. Its ability to maintain coating integrity and prevent internal corrosion makes it particularly valuable in these high-stakes settings.',
    point2: 'Hydrocarbon Transportation: Ensuring the safe and efficient transportation of hydrocarbons, the PSC system mitigates the risks associated with traditional welding, such as leaks and structural weaknesses.',
  },
  {
    id: 2,
    image: marketTwo,
    title: 'Water and Wastewater Management',
    point1: 'Water Injection Pipelines: In water injection systems, particularly in oil recovery processes, the PSC technology ensures robust and leak-proof connections, crucial for maintaining system pressure and efficiency.',
    point2: 'Wastewater Treatment: The PSC system’s corrosion-resistant properties make it an excellent choice for pipelines in wastewater treatment plants, where exposure to corrosive substances is common.',
  },
  {
    id: 3,
    image: marketThree,
    title: 'Chemical and Petrochemical Industries',
    point1: 'Chemical Transportation: The need for safe and secure pipeline connections is paramount in chemical transportation. PSC technology provides a reliable solution, minimizing the risk of leaks and contamination.',
    point2: 'Petrochemical Processing: In environments where hazardous materials are processed, the PSC system’s ability to prevent corrosion and maintain structural integrity is invaluable.',
  },
  {
    id: 4,
    image: marketFour,
    title: 'Industrial and Manufacturing Sectors',
    point1: 'Factory Pipelines: For manufacturing plants requiring robust pipeline networks, PSC technology offers a dependable and efficient alternative to traditional welding methods, ensuring long-term durability and reduced maintenance costs.',
    point2: 'Cooling and Heating Systems: The versatility of the PSC system makes it suitable for pipelines in industrial cooling and heating systems, where secure and leak-proof connections are essential.',
  },
];

const CPSAMarket = () => {
  return (
    <div className='w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]'>
        <h2 className='text-[24px] w-100 font-bold xl:text-[48px] xl:w-[832px] lg:w-[832px] lg:text-[48px] mb-[40px]'>Market Applications of Positive Seal Coupling :</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {marketData.map((item) => (
          <div key={item.id} className='flex flex-col items-start text-start'>
            <img src={item.image} alt={item.title} className='rounded-[24px] w-full h-auto' />
            <h3 className='mt-4 text-[24px] font-bold'>{item.title}</h3>
            <ul className='list-disc list-inside mt-4'>
              <li className='mb-4 text-secondery'>{item.point1}</li>
              <li className=' text-secondery'>{item.point2}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CPSAMarket;
