import React from 'react';

// Array of mission and vision data
const data = [
    {
      id: 1,
      title: 'Quality Policy',
   
      list: [
        'Achieve customer satisfaction by providing consistent work performance that meets or exceeds customer requirements.',
        'Commitment to continual improvement of processes and services to ensure they consistently meet or exceed requirements.',
        'Quality policy is communicated and understood at all levels through documented training and regular communication.',
        'The quality system is regularly reviewed by top management for continued suitability.',
        'Commitment to providing a safe working environment to prevent injury, damage, or loss.',
        'Active participation of employees in health and safety programs through suggestions and committee involvement.',
        'Regular reviews and revisions of policies to adapt to new challenges and maintain high standards.',
        'Comprehensive training programs to ensure all employees are competent and knowledgeable about health and safety procedures.',
      ],
      bgColor: 'bg-primary text-white'
    },
    {
      id: 2,
      title: 'Advantages',
     
      list: [
        'Ensuring the competency, awareness, and training of employees to perform tasks effectively.',
        'Employ state-of-the-art technologies for high-quality production.',
        'Timely and efficient procurement and supply management to meet production requirements.',
        'Proactive planning and customer feedback collection for continuous improvement of after-sale services.',
        'Regular job site inspections and hazard prevention measures to maintain a safe work environment.',
        'Thorough investigations of accidents and incidents to identify root causes and prevent future occurrences.',
        'Provision and enforcement of the use of appropriate personal protective equipment to ensure safety.',
        'Well-defined emergency procedures and regular drills to ensure quick and effective responses to emergencies.'
      ],
      bgColor: 'bg-vanish text-black'
    }
  ];

const ApproachDetails = () => {
  return (
    <div className="w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px] rounded-[24px]">
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-[24px]">
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

export default ApproachDetails
