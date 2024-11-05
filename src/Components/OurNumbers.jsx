import React from 'react';
import iconOne from '../images/Vector1.png';
import iconTwo from '../images/Vector2.png';
import iconThree from '../images/Vector3.png';
import iconFour from '../images/Vector4.png';

const OurNumbers = () => {
  const numbersData = [
    { images: iconOne, title: '100+', description: ' AramcoApproved' },
    { images: iconTwo, title: '140+', description: ' International Team Members' },
    { images: iconThree, title: '120+', description: ' Clients Served Worldwide' },
    { images: iconFour, title: '12+', description: ' Years of Experience' },
  ];

  return (
    <div className="w-[95%] mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {numbersData.map((item, index) => (
          <div
            key={index}
            className={`text-center p-[2.5rem] rounded-[32px] shadow text-secondary transition-all duration-500 ease-in-out ${
              index === 0 ? 'bg-primary text-[#FFF]' : 'bg-vanish'
            } ''`}
          >
            <img src={item.images} alt='icons' className='m-auto w-[38px]' />
            <h2 className="text-[2rem] font-bold my-[1rem] xl:text-[3rem] lg:text-[3rem]">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurNumbers;
