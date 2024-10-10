import React from 'react';
import pipe from '../images/Cruding.png';


const Cruding = () => {
  return (
    <div className='w-[95%] mx-auto text-center px-[16px] py-10 mt-[2.5rem] '>


    {/* H2 heading */}
    <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[40px] lg:text-[40px] md:text-[30px]">
    De-Cruding: Using water and nitrogen. </h2>
<img src={pipe} alt='pipe'/>

<p className="text-[20px] opacity-[0.4] mt-[2.5rem]">
Utilizing nitrogen, CNSA enhances the safety and effectiveness of pipeline decruding by creating an inert atmosphere that mitigates combustion risks. Our deep understanding of nitrogen applications allows us to perform decruding tasks with precision, underscoring our capability to adapt techniques to meet specific client needs or preferences, ensuring top-tier pipeline maintenance solutions. </p>   
  </div>
  )
}

export default Cruding
