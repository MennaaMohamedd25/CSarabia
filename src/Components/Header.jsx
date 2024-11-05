import React, { useEffect, useState } from "react";
import sliderOne from "../images/headerbg.jpg";
import sliderTwo from "../images/headerbg4.png"; 
import sliderThree from "../images/headerbg3.png"; 
import sliderFour from "../images/ccsa.png"; 
import CNSALogo from "../images/Group 10.svg";
import CPSALogo from "../images/Group 11.svg";
import CWSALogo from "../images/Group 12.svg";
import CCSALogo from "../images/Group 13.svg";


// Array of slider content including images, titles, descriptions, and button links
const slides = [
  {
    image: sliderOne,
    src: CNSALogo,
    description: "Elevating industrial standards with comprehensive nitrogen solutions tailored for efficiency and safety, CNSA leads with innovation in every application.",
    buttonText: "Learn More",
    buttonLink: "/services-cnsa",
  },
  {
    image: sliderTwo,
    src: CPSALogo,
    description: "Delivering cutting-edge pressure swing adsorption systems to meet global gas separation demands with reliability and precision.",
    buttonText: "Learn More",
    buttonLink: "/cpsa",
  },
  {
    image: sliderThree,
    src: CWSALogo,
    description: "Driving sustainability through advanced carbon capture technology, helping industries lower emissions and ensure a greener future.",
    buttonText: "Learn More",
    buttonLink: "/cwsa",
  },
  {
    image: sliderFour,
    src: CCSALogo,
    description: "Providing advanced chemical solutions to optimize operational efficiency and elevate performance.",
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

      <img src={slides[currentImage].src} title={slides[currentImage].title} alt="" />       

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
