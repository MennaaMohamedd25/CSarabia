import React from 'react'

const TeamHeader = () => {
  return (
    <div className='w-[95%] mx-auto text-center px-[16px] py-10 my-[5rem] xl:mt-[6rem] lg:mt-[6rem] md:mt-[6rem]'>
    {/* Red dot with text */}
    <div className="flex items-center mb-4 justify-center">
        <span className="w-[8px] h-[8px] bg-primary  rounded-full mr-2"></span>
        <p className="text-secondery  ">Our Team</p>
      </div>

    {/* H2 heading */}
    <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[60px] lg:text-[60px] md:text-[50px]">
    "Transform premier infrastructures with functional metrics. Drive sustainable <span className='text-primary'>leadership</span> for economic growth."    </h2>

    {/* Lorem text */}
    <p className="text-[20px] opacity-[0.4]">
    "Create standardized communities with seamless applications and optimize supply chains without vertical initiatives. Build strategic relationships using error-free processes, while outsourcing through functional e-markets. Simplify user-friendly architectures across media, utilizing empowered data and human capital.    </p>
  </div>
  )
}

export default TeamHeader
