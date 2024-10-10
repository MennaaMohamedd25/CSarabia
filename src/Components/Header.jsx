import React, { useEffect, useState } from "react";
import sliderOne from "../images/headerbg.jpg";
import sliderTwo from "../images/headerbg4.png"; 
import sliderThree from "../images/headerbg3.png"; 

// Array of slider content including images, titles, descriptions, and button links
const slides = [
  {
    image: sliderOne,
    title: "CNSA",
    description: "Elevating industrial standards with comprehensive nitrogen solutions tailored for efficiency and safety, CNSA leads with innovation in every application.",
    buttonText: "Learn More",
    buttonLink: "/services-cnsa",
  },
  {
    image: sliderTwo,
    title: "CPSA",
    description: "Pioneering advanced pressure swing adsorption solutions to meet global demands for gas separation efficiency and reliability.",
    buttonText: "Learn More",
    buttonLink: "/cpsa",
  },
  {
    image: sliderThree,
    title: "CCSA",
    description: "Committed to cutting-edge carbon capture technologies, ensuring a sustainable future with reduced carbon emissions for industries worldwide.",
    buttonText: "Learn More",
    buttonLink: "/ccsa",
  },
];

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Preload images by creating an Image object and assigning the src
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []); // No need for loadImages variable

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentImage(index); // Set current image to clicked dot's index
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center transition-opacity duration-1000"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${slides[currentImage].image}) lightgray 50% / cover no-repeat`,
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center h-full px-[16px]">
        <h1
          className="
            text-[80px]
            text-center
            font-extrabold
            leading-[100%]
            text-[#FFF]
            m-0
            md:text-[120px] 
            lg:text-[180px]   
            xl:text-[200px]    
          "
          style={{
            mixBlendMode: "exclusion",
          }}
        >
          {slides[currentImage].title} {/* Dynamically update title */}
        </h1>

        <p
          className="
            w-auto
            my-[2rem]      
            text-white           
            text-[16px]             
            text-center  
            md:text-[18px]    
            lg:w-[832px] lg:text-[20px]    
            xl:w-[832px]  xl:text-[20px]  
          "
        >
          {slides[currentImage].description} {/* Dynamically update description */}
        </p>
        <a href={slides[currentImage].buttonLink} className="buttonTwo">
          <span className="buttonText">{slides[currentImage].buttonText}</span> {/* Dynamically update button text */}
        </a>

        {/* Dots for slider navigation */}
        <div className="flex justify-center mt-[2rem] gap-[24px] ">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-[40px] h-[6px] rounded-full mx-1 cursor-pointer transition-all duration-300 ${
                currentImage === index ? "bg-primary" : "bg-[#FFF]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
