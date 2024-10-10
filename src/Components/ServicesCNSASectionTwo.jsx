import React from 'react';
import overview from '../images/Frame 1000002594.png';

const ServicesCNSASectionTwo = () => {
  return (
    <div className='w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]'>
      <div className="flex flex-col md:flex-row justify-between items-center gap-x-20">
        {/* Second Column: Image */}
        <div className="md:w-1/2 flex items-center justify-center order-1 md:order-1 mb-[1.5rem]">
          <img src={overview} alt="Descriptive text" />
        </div>

        {/* First Column: Headline, Text, and Button */}
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left order-2 md:order-2">
          {/* Heading */}
          <h2 className="text-[16px] xl:text-[24px] lg:text-[24px] text-start font-bold">
            The market
          </h2>

      <ul className='list-disc list-inside'>
            {/* First Paragraph with ellipses */}
            <li className="my-[2.5rem] text-[16px] text-start">
            CNSA’s Nitrogen Services are engineered to optimize the integrity and efficiency of not just pipeline operations but extend their scope to a wide range of industry applications. Central to our services is a spectrum of advanced nitrogen-based applications critical for various operational needs. We provide precise Nitrogen Leak Testing to mitigate leaks and potential hazards, Nitrogen Purging and Blanketing to maintain stable and inert conditions, and Nitrogen Drying to eliminate moisture and prevent corrosion. These services, vital across the oil, gas, and petrochemical sectors, ensure the longevity and reliability of infrastructure...
          </li>

          {/* Second Paragraph with ellipses */}
          <li className="mt-[2.5rem] text-[16px] text-start">
            Our CNSA division is equipped with a comprehensive range of equipment including compressors, nitrogen generation units (NGUs), LNG 180 pumps, hydrotest pumps, water filling pumps, chemical mixing pumps, and manifolds. This extensive array of tools allows us to offer one-stop solutions for all your industrial needs. By integrating state-of-the-art technologies with the expertise of our seasoned professionals, CNSA is committed to adapting to the evolving demands of our clients. We deliver excellence and support the achievement of strategic industrial objectives, ensuring optimal performance and safety in all applications...
          </li>
      </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesCNSASectionTwo;
