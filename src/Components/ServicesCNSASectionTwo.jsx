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
          Eliminate Moisture:
          </h2>

      <ul className='list-disc list-inside'>
            {/* First Paragraph with ellipses */}
            <li className="my-[2.5rem] text-[16px] text-start">
            Cutting-Edge Technology: Our technicians will arrive at your facility armed with the latest in nitrogen service technology, including highpressure nitrogen units and LN2 tanks with ambient vaporizers.          </li>

          {/* Second Paragraph with ellipses */}
          <li className="mt-[2.5rem] text-[16px] text-start">
          Trained Talent: We hire the industry’s most skilled and experienced nitrogen specialists, capable of addressing complex pipeline challenges while adapting to our clients’ distinct needs.          </li>
          <li className="mt-[2.5rem] text-[16px] text-start">
          Certified Excellence: Continuous Services Arabia is AramcoApproved and certified to deliver the highest quality nitrogen services while adhering to the strictest international industry standards and benchmarks        </li>
      </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesCNSASectionTwo;
