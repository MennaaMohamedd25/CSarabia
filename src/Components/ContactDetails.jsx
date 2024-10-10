import React from 'react';
import LocationWhile from '../images/c1.svg';
import PhoneWhile from '../images/c2.svg';
import MessageWhile from '../images/c3.svg';
import LocationBlack from '../images/cb1.svg';
import PhoneBlack from '../images/cb2.svg';
import MessageBlack from '../images/cb3.svg';

const contactData = [
  {
    title: 'KSA (Head office)',
    address: 'Dammam, Abdullah Fouad Energy Park.',
    imageL: LocationWhile,
    number: '+966 13 804 7902',
    imageN: PhoneWhile,
    email: 'info@cnsarabia.com',
    imageM: MessageWhile,
  },
  {
    title: 'United States',
    address: 'SAN JACINTO BUILDING, Austin, TX 78701 United States',
    imageL: LocationBlack,
    number: '+1 (877) 284 0404',
    imageN: PhoneBlack,
    email: 'jsimard@canadiannitrogen.com',
    imageM: MessageBlack,
  },
  {
    title: 'Canada',
    address: 'McCool St, Crossfield, AB T0M 0S0, Canada',
    imageL: LocationBlack,
    number: '+9647755999989',
    imageN: PhoneBlack,
    email: 'tpirie@canadiannitrogen.com',
    imageM: MessageBlack,
  },
  {
    title: 'Iraq',
    address: 'Baghdad Melbourne VIC 3000 IRAQ',
    imageL: LocationBlack,
    number: '+9647755999989',
    imageN: PhoneBlack,
    email: 'mahmoud.majeed@cnsarabia.com',
    imageM: MessageBlack,
  },
  {
    title: 'kuwait',
    address: 'X4V7+9R9, Ali Sabah Al Salem, kuwait',
    imageL: LocationBlack,
    number: '+9647755999989',
    imageN: PhoneBlack,
    email: 'mahmoud.majeed@cnsarabia.com',
    imageM: MessageBlack,
  },

];

const ContactDetails = () => {
  return (
    <div className="w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]">
      {/* Responsive Grid with 2 rows and 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactData.map((contact, index) => (
          <div
            key={index}
            className={`rounded-[32px] p-[40px] ${
              index === 0 ? 'bg-primary' : 'bg-gray-100'
            }`}
          >
            {/* Title */}
            <h3
              className={`text-xl font-semibold mb-[32px] ${
                index === 0 ? 'text-white' : 'text-secondery'
              }`}
            >
              {contact.title}
            </h3>
            {/* Address */}
            <div className="flex items-center justify-start gap-4 mb-[32px]">
              <img
                src={contact.imageL}
                alt="Location"
                className="w-6 h-6"
              />
              <p
                className={`${
                  index === 0 ? 'text-white' : 'text-secondery'
                }`}
              >
                {contact.address}
              </p>
            </div>
            {/* Phone Number */}
            <div className="flex items-center justify-start gap-4 mb-[32px]">
              <img
                src={contact.imageN}
                alt="Phone"
                className="w-6 h-6"
              />
              <p
                className={`${
                  index === 0 ? 'text-white' : 'text-secondery'
                }`}
              >
                {contact.number}
              </p>
            </div>
            {/* Email */}
            <div className="flex items-center justify-start gap-4 mb-2">
              <img
                src={contact.imageM}
                alt="Message"
                className="w-6 h-6"
              />
              <p
                className={`${
                  index === 0 ? 'text-white' : 'text-secondery'
                }`}
              >
                {contact.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
