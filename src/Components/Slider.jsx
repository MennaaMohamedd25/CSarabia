import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Import Swiper CSS
import { Autoplay } from 'swiper/modules'; // Correct module import

const Slider = () => {
  const logos = [
    require('../images/logo1.png'),
    require('../images/logo2.png'),
    require('../images/logo3.png'),
    require('../images/logo4.png'),
    require('../images/logo5.png'),
    
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
