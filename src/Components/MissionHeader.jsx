import React from 'react'

const MissionHeader = () => {
  return (
    <div className='w-[95%] mx-auto text-center px-[16px] py-10 my-[5rem] xl:mt-[6rem] lg:mt-[6rem] md:mt-[6rem]'>
      {/* Red dot with text */}
      <div className="flex items-center mb-4 justify-center">
        <span className="w-[8px] h-[8px] bg-primary  rounded-full mr-2"></span>
        <p className="text-secondery  ">Mission and vision</p>
      </div>

      {/* H2 heading */}
      <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[70px] lg:text-[70px] md:text-[50px]">
      "Global expertise, regional insights: sustainable oil and gas solutions for the Gulf and <span className='text-primary'>Middle East</span>."      </h2>

      {/* Lorem text */}
      <p className="text-[20px] opacity-[0.4]">
      Uniquely transform premier infrastructures before functional metrics. Completely mesh sustainable leadership for economically sound sources.    </p>
    </div>
  )
}

export default MissionHeader
