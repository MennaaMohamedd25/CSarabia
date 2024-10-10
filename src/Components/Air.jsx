import React from 'react';
import pipe from '../images/air.png';


const Air = () => {
  return (
    <div className='w-[95%] mx-auto text-center px-[16px] py-10 mt-[2.5rem] '>


    {/* H2 heading */}
    <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[40px] lg:text-[40px] md:text-[30px]">
    Air Drying </h2>
<img src={pipe} alt='pipe'/>

<p className="text-[20px] opacity-[0.4] mt-[2.5rem]">
Dryers are integral in air drying pipelines, effectively removing moisture to prevent corrosion and ensure pipeline integrity. CNSA's vast experience in nitrogen applications enables precise execution of air drying processes, safeguarding pipeline functionality and longevity. Our expertise ensures pipelines are optimally prepared for operation, reflecting our commitment to excellence and client success in maintaining asset integrity. </p>   
  </div>
  )
}

export default Air
