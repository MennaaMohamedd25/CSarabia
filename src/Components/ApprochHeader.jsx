import React from 'react'

const ApprochHeader = () => {
  return (
    <div className='w-[95%] mx-auto text-center px-[16px] py-10 my-[8rem] xl:mt-[6rem] lg:mt-[6rem] md:mt-[4rem]'>
    {/* Red dot with text */}
    <div className="flex items-center mb-4 justify-center">
        <span className="w-[8px] h-[8px] bg-primary  rounded-full mr-2"></span>
        <p className="text-secondery  ">Our Approach</p>
      </div>

    {/* H2 heading */}
    <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[65px] lg:text-[65px] md:text-[50px]">
    Setting Industry Benchmarks That Drive<span className='text-primary'>  Eco-Friendly Solutions</span> And Operational Efficiency Through Advanced Technology  and advanced technology.  </h2>

    {/* Lorem text */}
    <p className="text-[20px] opacity-[0.4]">
    CS Arabia embraces a unique approach to industrial solutions that prioritizes sustainability, technology, and process-critical up-time. Our regional expertise, time-tested techniques, and proactive hazard control enables us to contribute to both the short-term and long-term success of our clients, celebrating every victory big and small, together.
    </p>
  </div>
  )
}

export default ApprochHeader
