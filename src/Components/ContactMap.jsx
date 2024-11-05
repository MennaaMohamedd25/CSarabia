import React, { useState } from 'react';

const ContactMap = () => {
  // Define the map locations
  const locations = [
    {
      name: "Kingdom of Saudi Arabia",
      url: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d694999.0583378462!2d49.988631!3d26.270716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssa!4v1697559093711!5m2!1sen!2ssa",
    },
    {
      name: "USA",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117229.15620714986!2d-98.1133861!3d30.2700743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ca64805d0a3f%3A0x4f4f12d36c8f45e1!2sAustin%2C%20TX%2078747%2C%20USA!5e0!3m2!1sen!2sus!4v1632954477324!5m2!1sen!2sus",
    },
    {
      name: "Canada",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9365601.73915857!2d-139.5155813!3d51.4134686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5378d4cfdded7a97%3A0x95cdb124598041b4!2s51%C2%B024%2748.5%22N%20114%C2%B001%2740.1%22W!5e0!3m2!1sen!2sus!4v1694614902855!5m2!1sen!2sus",
    },
    {
      name: "Iraq",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173856.682944338!2d44.17988824359794!3d33.30159232513862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15578198d3f1c6b7%3A0x5a8f32fa65e16e9f!2sBaghdad!5e0!3m2!1sen!2sus!4v1632954444876!5m2!1sen!2sus",
    },
    {
      name: "kuwait",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5915.632751332516!2d48.11457388021535!3d28.993529681802994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf08d319b6f5c7%3A0x3cfb7518e3c1fa0d!2sKuwait!5e0!3m2!1sen!2sus!4v1632954584626!5m2!1sen!2sus",
    },
  ];

  const [currentMap, setCurrentMap] = useState(locations[0].url);

  return (
    <div className="w-[95%] mx-auto  py-[2.5rem] text-center md:text-left ">
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
      className="px-[12px] py-[5px] text-[14px] border border-gray-500 text-gray-500 rounded-md hover:bg-primarye focus:outline-none focus:border-red-500 focus:text-red-500 active:bg-red-500 active:border-red-500 active:text-white transition-colors duration-300"
    >
      {location.name}
    </button>
  ))}
</div>

          {/* Map */}
          <div className="flex justify-center w-full h-full"> {/* Full-width and height */}
            <iframe title="map"
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
