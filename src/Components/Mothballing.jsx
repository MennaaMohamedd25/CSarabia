import React from 'react';
import pipe from '../images/Mothballing.png';


const Mothballing = () => {
  return (
    <div className='w-[95%] mx-auto text-center px-[16px] py-10 mt-[2.5rem] '>


    {/* H2 heading */}
    <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[40px] lg:text-[40px] md:text-[30px]">
    Nitrogen Mothballing</h2>
<img src={pipe} alt='pipe' className='mx-auto'/>

<p className="text-[20px] opacity-[0.4] mt-[2.5rem]">
Nitrogen Mothballing is a strategic approach used by CNSA to preserve industrial assets during periods of shutdown or reduced operation. By creating an inert atmosphere, we prevent corrosion, oxidation, and degradation of equipment. CNSA's vast experience ensures that this process is executed with precision, leveraging our knowledge to tailor solutions that meet the unique preservation needs of our clients, thereby maintaining the value and extending the life of their assets. Our expertise in nitrogen applications guarantees that your industrial assets are protected, even in extended periods of inactivity. </p>   
  </div>
  )
}

export default Mothballing
