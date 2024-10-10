import React, { useState } from 'react';

const ContactMap = () => {
  // Define the map locations
  const locations = [
    {
      name: "San Francisco",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.014277758856!2d-122.4064174846813!3d37.78583477975831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c212a37c5%3A0xa76a54be1a52b087!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1632953952186!5m2!1sen!2sus",
    },
    {
      name: "New York",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.489215003525!2d-74.0060151846058!3d40.71277527932935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af7b81a71f%3A0x2b8a9f3c4eaf78d4!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1632954477324!5m2!1sen!2sus",
    },
    {
      name: "Los Angeles",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.723312150645!2d-118.2540541847699!3d34.0522353806037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6ccf49f8cf3%3A0x5c1d2267607f3d7d!2sLos+Angeles%2C+CA!5e0!3m2!1sen!2sus!4v1632954522581!5m2!1sen!2sus",
    },
    {
      name: "Paris",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.293124914541!2d2.292292116053543!3d48.85884437928748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdc5c5e9f1f%3A0x12bf9bf6431b3307!2sEiffel+Tower!5e0!3m2!1sen!2sus!4v1632954552387!5m2!1sen!2sus",
    },
    {
      name: "London",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1454.706460511107!2d-0.1276475503341006!3d51.50735098631756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3229357e55%3A0xa1ac6d41623a5b63!2sLondon%2C+UK!5e0!3m2!1sen!2sus!4v1632954584626!5m2!1sen!2sus",
    },
  ];

  const [currentMap, setCurrentMap] = useState(locations[0].url);

  return (
    <div className="w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]">
      {/* Responsive 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] h-full">
        {/* Google Map Embedding and Buttons */}
        <div className="flex flex-col items-center h-full">
          {/* Buttons for Changing Map */}
          <div className="grid grid-cols-3 gap-4  lg:grid-cols-5 xl:grid-cols-5 mb-[24px]">
  {locations.map((location, index) => (
    <button
      key={index}
      onClick={() => setCurrentMap(location.url)}
      className="px-[3px] py-[13px] text-[16px] border border-gray-500 text-gray-500 rounded-md hover:bg-primary hover:text-white focus:outline-none focus:border-red-500 focus:text-red-500 active:bg-red-500 active:border-red-500 active:text-white transition-colors duration-300"
    >
      {location.name}
    </button>
  ))}
</div>

          {/* Map */}
          <div className="flex justify-center w-full h-full"> {/* Full-width and height */}
            <iframe
              src={currentMap}
              width="100%"
              height="100%"  
              allowFullScreen=""
              loading="lazy"
              className="border-none rounded-2xl"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-start h-full">
          <form className="w-full h-full">
            {/* Name */}
            <div className="mb-[48px]">
              <label htmlFor="name" className="block text-left text-[20px] text-secondary mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-1 border-b border-gray-300 focus:outline-none focus:border-primary"
              />
            </div>
            
            {/* Email */}
            <div className="mb-[48px]">
              <label htmlFor="email" className="block text-left text-[20px] text-secondary mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-1 border-b border-gray-300 focus:outline-none focus:border-primary"
              />
            </div>
            
            {/* Phone */}
            <div className="mb-[48px]">
              <label htmlFor="phone" className="block text-left text-[20px] text-secondary mb-1">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-4 py-1 border-b border-gray-300 focus:outline-none focus:border-primary"
              />
            </div>
            
            {/* Message */}
            <div className="mb-[48px]">
              <label htmlFor="message" className="block text-left text-[20px] text-secondary mb-1">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-1 border-b border-gray-300 focus:outline-none focus:border-primary"
                rows="5"
              ></textarea>
            </div>
            
         {/* Submit Button */}
<button className=" items-start flex w-auto px-[48px] py-[13px]  rounded-[8px] bg-primary text-[#FFF]">
  Send 
</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
