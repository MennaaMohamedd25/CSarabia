import React from 'react'

const Overview = () => {
  return (
    <div className='w-[95%] mx-auto text-center px-[16px] py-10 my-[5rem] xl:mt-[6rem] lg:mt-[6rem] md:mt-[6rem]'>
      {/* Red dot with text */}
      <div className="flex items-center mb-4 justify-center">
        <span className="w-[8px] h-[8px] bg-primary  rounded-full mr-2"></span>
        <p className="text-secondery  ">Company Overview</p>
      </div>

      {/* H2 heading */}
      <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[70px] lg:text-[70px] md:text-[50px]">
        "Global expertise, regional insights: sustainable oil and gas solutions for the Gulf and <span className='text-primary'>Middle East</span>."
      </h2>

      {/* Lorem text */}
      <p className="text-[20px] opacity-[0.4]">
      Combining global expertise and regional insights to deliver innovative and sustainable solutions for the oil and gas industry in the Gulf and Middle East.      </p>
    </div>
  )
}

export default Overview
