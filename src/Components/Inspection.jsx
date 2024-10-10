import React from 'react';
import pipe from '../images/Inspection.png';


const Inspection = () => {
  return (
    <div className='w-[95%] mx-auto text-center px-[16px] py-10 mt-[2.5rem] '>


    {/* H2 heading */}
    <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[40px] lg:text-[40px] md:text-[30px]">
    Inline Inspection of Pipelines</h2>
<img src={pipe} alt='pipe'/>

<p className="text-[20px] opacity-[0.4] mt-[2.5rem]">
Nitrogen plays a crucial role in Inline Inspections of pipelines, creating an optimal environment for accurate diagnostics and ensuring pipeline integrity. CNSA's extensive experience enables us to adeptly manage these inspections, employing nitrogen or water as per client specifications to suit diverse operational needs. Our adaptability and proficiency in utilizing both nitrogen and alternative methods highlight our commitment to offering tailored, effective solutions for pipeline inspection challenges. </p>   
  </div>
  )
}

export default Inspection
