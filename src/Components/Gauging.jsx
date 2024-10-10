import React from 'react';
import pipe from '../images/Gauging.png';


const Gauging = () => {
  return (
    <div className='w-[95%] mx-auto text-center px-[16px] py-10 mt-[2.5rem] '>


    {/* H2 heading */}
    <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[40px] lg:text-[40px] md:text-[30px]">
    Pipeline Scrapper Mechanical Cleaning & Gauging</h2>
<img src={pipe} alt='pipe'/>

<p className="text-[20px] opacity-[0.4] mt-[2.5rem]">
Nitrogen supports the mechanical scraper process in pipelines by ensuring a clean, dry environment for effective cleaning and gauging, essential for pipeline integrity and flow efficiency. CNSA leverages its extensive experience to conduct these operations with precision, using nitrogen or, as per client request, dry air—achieved by adjusting NGU settings or utilizing air compressors. This flexibility allows us to tailor our approach to meet specific project requirements, showcasing our commitment to delivering versatile, efficient solutions in pipeline maintenance. </p>   
  </div>
  )
}

export default Gauging
