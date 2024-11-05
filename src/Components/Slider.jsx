import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Import Swiper CSS
import { Autoplay } from 'swiper/modules'; // Correct module import

const Slider = () => {
  const logos = [
    require('../images/Nesma Partners.png'),
    require('../images/qur.png'),
    require('../images/Rezyat Group.jpg'),
    require('../images/ROSEN Group.jpg'),
    require('../images/Saudi Aramco.png'),
    require('../images/3- Saudi Chevron Phillips Company.jpg'),
    require('../images/4- China Petroleum & Chemical Corporation.png'),
    require('../images/Kuwait Joint Operation.jpg'),
    require('../images/12-New-Jobs-Vacancies-at-China-Petroleum-Pipeline-Engineering-Tanzania-CPP.png'),
    require('../images/al fanar.png'),
    require('../images/Al-Rushaid Construction Co. Ltd (ARCC).jpg'),
    require('../images/AL RASHID TRADIN &  CONTRACTING CO.LTD RTCC (6).jpg'),
    require('../images/Contracting and Trading Company.jpg'),
    require('../images/den.png'),
    require('../images/Kent.png'),
    require('../images/Kuwait Joint Operation.jpg'),
    require('../images/Larsen & Toubro (10).jpg'),
    require('../images/NASSER S. AL-HAJRI CORP. NSH (13).jpg'),
    require('../images/Saudi Aramco.png'),
    require('../images/Tecnicas Reunidas (1).jpg'),
    require('../images/Zamil Offshore (9).jpg'),
    require('../images/ZOMCO (8).jpg'),
    require('../images/SAIPEM.png'),
    require('../images/SEPCO.jpg'),
    require('../images/SISCO.png'),
    require('../images/Surveyer, Nenniger & Chenevert.png'),
  ];

  // Create a new array by duplicating the logos for looping effect
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos]; // Duplicate for a smooth loop

  return (
    <div className='w-[95%] mx-auto shadow-md rounded-[12px] bg-vanish py-[2.0625rem] my-[2.5rem]'>
      <Swiper
        className='flex justify-center items-center'
        modules={[Autoplay]} // Register the Autoplay module
        autoplay={{
          delay: 2000, // 2 seconds delay between slides
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
        loop={true} // Enable infinite loop
        slidesPerView={2} // Default to 2 slides per view for small screens
        spaceBetween={5} // Space between slides
        breakpoints={{
          375: {
            slidesPerView: 2, // Show 2 logos on small screens
            spaceBetween: 4, // Adjust space between slides
          },
          640: {
            slidesPerView: 3, // Show 3 logos on medium small screens
            spaceBetween: 5, // Space between slides
          },
          768: {
            slidesPerView: 4.5, // Show 4 logos on medium screens
            spaceBetween: 32, // Space between slides on medium screens
          },
          1024: {
            slidesPerView: 7.5, // Show 7 logos on large screens
            spaceBetween: 128, // Space between logos on large screens
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={logo} alt={`logo-${index}`} className="mx-auto" /> {/* Center logo */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
