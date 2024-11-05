import React from 'react';
import eyeIcon from '../images/eyeicon.png';
import mapIcon from '../images/mapicon.png';

// Array of mission and vision data
const data = [
  {
    id: 1,
    title: 'Our Vision',
    icon: eyeIcon,
    list: [
      'To nurture long-standing client relationships, and establish new ones, anchored in trust, a devotion to mutual success, and a shared commitment to environmental sustainability.',
      'Innovation: Constantly developing and integrating cutting-edge technologies.',
      'Sustainability: Prioritizing environmentally responsible practices and solutions.',
      'Excellence: Maintaining the highest standards of quality and safety in all operations.',
      'Leadership: Setting benchmarks in the industry through visionary strategies and actions.',
      'Regional Focus: Tailoring solutions to meet the specific needs of the Gulf and Middle East regions.'
    ],
    bgColor: 'bg-primary text-white'
  },
  {
    id: 2,
    title: 'Our Mission',
    icon: mapIcon,
    list: [
      'To maintain our decade-strong stance as the region’s leading provider of premium industrial service solutions, for the benefit of our international client base.',
      'Empowerment: Providing advanced solutions that enhance operational efficiency.',
      'Partnerships: Building long-term relationships based on trust and mutual success.',
      'Expertise: Leveraging deep industry knowledge and technical proficiency.',
      'Service Quality: Delivering unparalleled service that exceeds client expectations.',
      'Operational Success: Supporting clients in achieving their operational goals.',
      'Sustainable Development: Promoting practices that ensure long-term environmental and economic sustainability.',
      'Regional Insight: Applying a thorough understanding of local market dynamics and global best practices'
    ],
    bgColor: 'bg-vanish text-black'
  }
];

const MissionMain = () => {
  return (
    <div className="w-[95%] mx-auto  py-[2.5rem]  text-left ">
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-[24px]">
        {/* Loop through the data array to display each section */}
        {data.map((item) => (
          <div
            key={item.id}
            className={`flex-1 md:text-left p-[40px] rounded-[32px] ${item.bgColor}`}
          >
            {/* Image beside h2 */}
            <div className="flex items-center mb-4">
              <img src={item.icon} alt={`${item.title} Icon`} className="w-[24px] h-[24px] mr-2" />
              <h2 className="text-[24px] xl:text-[28px] font-semibold">{item.title}</h2>
            </div>
            {/* Unordered list for mission or vision with bullets */}
            <ul className="list-disc text-[16px] pl-5 space-y-3">
              {item.list.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionMain;
