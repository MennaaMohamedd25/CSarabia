import React from 'react'
import pipe from '../images/dying.png'

const Drying = () => {
  return (
    <div className='w-[95%] mx-auto text-center px-[16px] py-10 mt-[2.5rem] '>


    {/* H2 heading */}
    <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[40px] lg:text-[40px] md:text-[30px]">
    Nitrogen Drying  </h2>
<img src={pipe} alt='pipe' className='mx-auto'/>

<p className="text-[20px] opacity-[0.4] mt-[2.5rem]">
CNSA's Nitrogen Drying services are marked by our ability to achieve ultra-low temperatures reaching -40 °C and nitrogen purity levels from 95% to 99.99%. This precision, coupled with our extensive experience, allows us to execute system preservation (Layup) with the utmost efficacy. Our expertise ensures that assets are not only dried to the specific requirements but are also maintained in peak condition for their eventual operational use, safeguarding against any environmental or operational degradation. </p>
   
  </div>
  )
}

export default Drying
