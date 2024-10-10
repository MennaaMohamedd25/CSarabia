import React from 'react';

// Separate rowData into individual arrays for each row
const row1Data = [
  {
    id: 1,
    title: 'What is Positive Seal Coupling?',
    content: 'Its a technology for joining pipes without welding, offering a secure and reliable connection.',
  },
  {
    id: 2,
    title: 'How does Positive Seal Coupling work?',
    content: 'By using a mechanical connector with an internal diameter slightly smaller than the pipe’s outer diameter, it creates a tight fit, enhancing the seal.',
  },
  {
    id: 3,
    title: 'What are the benefits of Positive Seal Coupling over traditional welding?',
    content: 'It offers increased safety, reduced project time, no need for X-ray inspection, and is environmentally friendly.',
  },
];

const row2Data = [
  {
    id: 4,
    title: 'Can Positive Seal Coupling be used on coated pipes?',
    content: 'Yes, it can connect coated pipes without damaging them.',
  },
  {
    id: 5,
    title: 'Is Positive Seal Coupling environmentally friendly?',
    content: 'Yes, it reduces the environmental impact by eliminating the need for X-ray inspections and welding.',
  },
  {
    id: 6,
    title: 'Is special training required to install Positive Seal Couplings?',
    content: 'While simpler than welding, correct installation may require training to ensure safety and performance.',
  },
];

const row3Data = [
  {
    id: 7,
    title: 'How does Positive Seal Coupling handle thermal expansion and contraction?',
    content: 'PSCs are designed to maintain a seal despite temperature-induced size changes in the pipe.',
  },
  {
    id: 8,
    title: 'What industries commonly use Positive Seal Coupling?',
    content: 'PSC is used in industries such as oil and gas, water treatment, and anywhere pipeline integrity is critical.',
  },
];

const CPSAQRA = () => {
  return (
   <div className='bg-vanish'>
     <div className='w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]rounded-[24px]'>
      <h2 className='text-[24px] font-bold text-secondery xl:text-[48px] lg:text-[48px] mb-[32px]'> FAQ</h2>
      {/* Row 1 */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {row1Data.map((item) => (
          <div
            key={item.id}
            className={`bg-[#FFF] rounded-[32px] p-[32px]  ${item.colSpan ? 'md:col-span-2' : ''}`}
          >
            <h3 className='text-[18px] font-bold text-secondery mb-[16px]'>{item.title}</h3>
            <p className='text-secondery'>{item.content}</p>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-8'>
        {row2Data.map((item) => (
          <div
            key={item.id}
            className={`bg-[#FFF] rounded-[32px] p-[32px] ${item.colSpan ? 'md:col-span-2' : ''}`}
          >
            <h3 className='text-[18px] font-bold text-secondery mb-[16px]'>{item.title}</h3>
            <p className='text-secondery '>{item.content}</p>
          </div>
        ))}
      </div>

      {/* Row 3 */}
      {/* Updated grid to contain exactly 2 columns for row 3 */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {row3Data.map((item) => (
          <div
            key={item.id}
            className='bg-[#FFF] rounded-[32px] p-[32px]'
          >
            <h3 className='text-[18px] font-bold text-secondery mb-[16px]'>{item.title}</h3>
            <p className='xt-secondery'>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default CPSAQRA;
