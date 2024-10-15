import React from 'react'

const data = [
    {
      id: 1,
      title: 'Service details',
   
      list: [
        'Connects pipes without the need for welding or X-ray inspection.',
        'Compatible with 3-inch to 12-inch line pipe, API 5L PSL-2, including all grades. Suitable for Seamless and ERW pipes.',
        'Can connect internally or externally coated pipes without damaging the coating, as well as bare pipes.',
        'Provides 100% factory-applied coating from start to finish.',
        'Requires no significant pipe end preparation or modification for pipes.',
        'Does not create any internal flow restriction or pipe overlap.',
        'Enables pipeline construction to be 2 to 4 times faster than with stick welding. Installation time is less than 60 seconds per joint.',
        'Fully capable under Piping Codes ANSI/ASME B31.3, B31.4, B31.8, CAN/CSA Z183, Z184.',
      ],
      bgColor: 'bg-primary text-white'
    },
    {
      id: 2,
      title: 'The Benefits',
     
      list: [
        'Customer Commitment At Continuous Water Services Arabia, our clients are at the heart of everything we do. We are dedicated to providing exceptional service and support, ensuring that our solutions not only meet but exceed your expectations. Our team of experts is always ready to assist with technical guidance, operational insights, and after-sales service, ensuring seamless integration and optimal performance of our technologies.',
      
        'Future Initiatives Looking ahead, CWSA is committed to continuous innovation and expansion of our services. We are actively exploring new technologies and partnerships to enhance our offerings and address the evolving challenges of the water management sector. Our focus remains on developing sustainable and efficient solutions that contribute to a cleaner and more sustainable environment.',
        'Get in Touch Ready to revolutionize your water management processes? Contact us today to learn more about how CWSA and Stauper Water Technologies can enhance your operations. Our team is here to provide personalized consultations and demonstrate how our cutting-edge solutions can meet your specific needs.'
      ],
      bgColor: 'bg-vanish text-black'
    }
  ];

const CPSAInfo = () => {
  return (
    <div className="w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]rounded-[24px]">
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-[24px] text-start">
      {/* Loop through the data array to display each section */}
      {data.map((item) => (
        <div
          key={item.id}
          className={`flex-1 md:text-left p-[40px] rounded-[32px] ${item.bgColor}`}
        >
          {/* Image beside h2 */}
          <div className="flex items-center mb-4">
            <h2 className="text-[24px] xl:text-[28px] font-semibold">{item.title}</h2>
          </div>
          {/* Unordered list for mission or vision with bullets */}
          <ul className="list-disc text-[16px] pl-5 space-y-3">
            {item.list.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
  )
}

export default CPSAInfo
