import React from 'react';
import pipe from '../images/SNitrogen.png'


const SNitrogen = () => {
  return (
    <div className='w-[95%] mx-auto text-center px-[16px] py-10 mt-[2.5rem] '>


    {/* H2 heading */}
    <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[40px] lg:text-[40px] md:text-[30px]">
    Nitrogen Leak Testing  </h2>
<img src={pipe} alt='pipe' className='mx-auto'/>

<p className="text-[20px] opacity-[0.4] mt-[2.5rem]">
Leveraging the inertness and safety of nitrogen, CNSA's Nitrogen Leak Testing offers an advanced and secure method to ensure the integrity of industrial systems. Our experienced professionals use nitrogen to pressurize and thoroughly examine systems, detecting even the most subtle leaks. CNSA's seasoned approach minimizes risk, avoids chemical contamination, and ensures a safe testing environment, upholding the highest standards of asset reliability before operational deployment. Our commitment to excellence defines our leading role in safeguarding industrial operations.  </p>
   
  </div>
  )
}

export default SNitrogen
