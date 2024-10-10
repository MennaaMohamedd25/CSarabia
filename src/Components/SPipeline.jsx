import React from 'react';
import pipe from '../images/Frame 19805.png'

const SPipeline = () => {
  return (
    <div className='w-[95%] mx-auto text-center px-[16px] py-10 mt-[2.5rem] '>


    {/* H2 heading */}
    <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[40px] lg:text-[40px] md:text-[30px]">
    Pipeline Pre-Commissioning & Commissioning.    </h2>
<img src={pipe} alt='pipe'/>

<p className="text-[20px] opacity-[0.4] mt-[2.5rem]">
At Continuous Nitrogen Services Arabia (CNSA), our division offers a comprehensive range of services essential for the pre-commissioning and commissioning of industrial assets. Utilizing our advanced equipment, including Oil Injected Compressors, Oil Free Compressors, Nitrogen Generation Units (NGUs), LNG Pumps, Water Filling Pumps, Multi-Stage Pumps, Negative Suction Pumps, Test Manifolds, and Chemical Mixing Pumps, we ensure that systems are clean, free from contaminants, and ready for safe operation. Our meticulous process includes mechanical cleaning, gauging, hydrotesting, de-watering, Caliper inspection, Magnetic Flux Leakage (MFL) testing, chemical cleaning, nitrogen layup, and drying, all conducted in strict adherence to industry standards to guarantee the highest levels of safety and functionality.  </p>
   
  </div>
  )
}

export default SPipeline
