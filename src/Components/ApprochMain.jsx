import React from 'react';
import ApproachOne from '../images/App1.png';
import ApproachTwo from '../images/App2.png';
import ApproachThree from '../images/App3.png';
import ApproachFour from '../images/App4.png';
import ApproachFive from '../images/App5.png';
import ApproachSix from '../images/App6.png';
import Doots from '../images/doots.png'; // Image to be used instead of dot

// Array of image, title, and description data
const approaches = [
  {
    id: 1,
    image: ApproachOne,
    title: 'Innovative Solutions',
    description: 'We leverage the latest technologies and advanced methodologies to provide state-of-the-art nitrogen, pipeline, water, and chemical solutions. Our focus on innovation ensures that we deliver efficient, safe, and reliable services.'
  },
  {
    id: 2,
    image: ApproachTwo,
    title: 'Sustainability',
    description: 'Environmental stewardship is at the core of our operations. We prioritize sustainable practices and solutions that minimize environmental impact and promote the well-being of the communities we serve.'
  },
  {
    id: 3,
    image: ApproachThree,
    title: 'Excellence in Service',
    description: 'Our team is dedicated to maintaining the highest standards of quality and safety. We strive for excellence in every project, ensuring that our clients receive unparalleled service and support.'
  },
  {
    id: 4,
    image: ApproachFour,
    title: 'Client-Centric Approach',
    description: 'We build enduring partnerships based on trust, expertise, and mutual success. Understanding our clients’ unique needs allows us to deliver customized solutions that drive their operational success.'
  },
  {
    id: 5,
    image: ApproachFive,
    title: 'Regional Expertise',
    description: 'With a deep understanding of the regional market dynamics and challenges, we tailor our solutions to address the specific needs of the Gulf and Middle East regions. This local insight, combined with global standards, enables us to provide superior service.'
  },
  {
    id: 6,
    image: ApproachSix,
    title: 'Commitment to Growth',
    description: 'We invest in our people and their development, fostering a culture of continuous improvement and innovation. Our commitment to growth extends to our clients and partners, ensuring that we all thrive together.'
  }
];

const ApprochMain = () => {
  return (
<div className=' bg-vanish'>

<div className="w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]">
      <h2 className="text-[24px] md:text-5xl lg:text-[56px] xl:text-[56px] font-bold text-secondery mb-10 text-start">Key Aspects of Our Approach</h2>

      {/* Responsive 2 rows, 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {approaches.map((approach) => (
          <div key={approach.id} className="flex flex-col text-start">
            <img src={approach.image} alt={approach.title} className="mb-[40px]" />
            <div className="flex items-center mb-2">
              {/* Replace dot with image */}
              <span className="mr-[24px] relative">
                <img 
                  src={Doots} 
                  alt="Doots" 
                  className=""
                />
              </span>
              <h3 className="text-[30px] font-bold ">{approach.title}</h3>
            </div>
            <p className="text-[16px] mt-[23px] text-span">{approach.description}</p>
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default ApprochMain;
