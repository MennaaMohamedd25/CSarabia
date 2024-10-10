import React from 'react';
import pipe from '../images/nn.png';


const Nitrogen = () => {
  return (
    <div className='w-[95%] mx-auto text-center px-[16px] py-10 mt-[2.5rem] '>


    {/* H2 heading */}
    <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[40px] lg:text-[40px] md:text-[30px]">
    Nitrogen Blanketing </h2>
<img src={pipe} alt='pipe'/>

<p className="text-[20px] opacity-[0.4] mt-[2.5rem]">
Nitrogen Blanketing, utilized by CNSA, involves covering industrial assets with a nitrogen layer to prevent oxidation and contamination. This method is critical for maintaining the quality and safety of products, especially in volatile environments. CNSA's extensive experience and technical proficiency ensure effective implementation of Nitrogen Blanketing, safeguarding assets and optimizing operational efficiency. Our expertise enables tailored solutions, aligning with client needs to protect and preserve the integrity of their industrial operations. </p>
   
  </div>
  )
}

export default Nitrogen
