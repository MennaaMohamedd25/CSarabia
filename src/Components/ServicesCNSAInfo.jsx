import React from 'react';
// Array of mission and vision data
const data = [
    {
      id: 1,
      title: 'Comprehensive Solutions',
   
      list: [
        'Comprehensive Solutions: One-stop solutions for all industrial needs, including compressors, nitrogen generation units, LNG 180 pumps, hydrotest pumps, water filling pumps, chemical mixing pumps, and manifolds.',
        'Advanced Technology: Utilization of state-of-the-art equipment and cutting-edge technology to ensure the highest standards of service and reliability.',
        'Expertise and Experience: A team of seasoned professionals with extensive experience in the oil, gas, and petrochemical sectors, delivering exceptional results.',
        'Safety and Integrity: Commitment to safety and operational integrity through precise Nitrogen Leak Testing, Purging, Blanketing, and Drying services.',
        'Tailored Solutions: Customized services to meet the unique demands of each client, ensuring optimal performance and efficiency.',
        'Industry Leadership: A proven track record of excellence and leadership in both offshore and onshore applications.',
        'Infrastructure Longevity: Ensuring the longevity and reliability of infrastructure through meticulous maintenance and inspection services.',
        'Customer Focus: Dedication to understanding and adapting to the evolving needs of clients, supporting the achievement of their strategic industrial objectives.',
      ],
      bgColor: 'bg-primary text-white'
    },
    {
      id: 2,
      title: 'The Benefits',
     
      list: [
        'Enhanced Safety: Our advanced nitrogen applications create inert atmospheres that mitigate combustion risks, ensuring the highest levels of safety during operations.',
        'Operational Efficiency: With our comprehensive range of services, including nitrogen leak testing, air drying, and de-cruding, we ensure pipelines are clean, dry, and free from contaminants, enhancing their performance and reliability.',
        'Tailored Solutions: We provide bespoke services that cater to the specific demands of the oil, gas, petrochemical, and processing industries, ensuring optimal results for each unique project.',
        'Advanced Technology: Utilizing state-of-the-art equipment such as nitrogen generation units, compressors, and advanced inspection tools, we deliver precise and effective solutions.',
        'Extended Asset Life: Our techniques, including nitrogen mothballing and pipeline scrapper mechanical cleaning, help in preserving and maintaining industrial assets, extending their operational life.',
        'Expertise and Experience: Leveraging the combined strengths of Canadian Nitrogen Services Ltd. and Abdullah Fouad Energy Services Company, CNSA brings unparalleled expertise and experience to every project.',
        'Compliance and Standards: We adhere to stringent industry standards, ensuring all operations meet regulatory requirements and maintain the highest quality and safety benchmarks.',
      ],
      bgColor: 'bg-vanish text-black'
    }
  ];

const ServicesCNSAInfo = () => {
  return (
    <div className="w-[95%] mx-auto  py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px] rounded-[24px]">
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

export default ServicesCNSAInfo
