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
    require('../images/logo1.png'),
    require('../images/logo4.png'),
    require('../images/logo2.png'),
  ];

  return (
    <div className='w-[95%] mx-auto shadow-md rounded-[12px] bg-vanish py-[2.0625rem] my-[2.5rem]'>
      <Swiper
        className='flex justify-center items-center'
        modules={[Autoplay]} // Register the Autoplay module
        autoplay={{
          delay: 2000, // 2 seconds delay between slides
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
        slidesPerView={7.5} // Show 7 full logos and part of another
        spaceBetween={128} // Set space between slides to 0 for better spacing control
        loop={true} // Enable infinite loop
        breakpoints={{
          640: {
            slidesPerView: 3.5, // 3 logos on small screens
            spaceBetween: 10, // Adjust space between slides on small screens
          },
          768: {
            slidesPerView: 4.5, // 4 logos on medium screens
            spaceBetween: 32, // Adjust space between slides on medium screens
          },
          1024: {
            slidesPerView: 7.5, // 7 logos on large screens
            spaceBetween: 128, // Space between logos on large screens
          },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={logo} alt={`logo-${index}`} className="mx-auto" /> {/* Center logo */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
