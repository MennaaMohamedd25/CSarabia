import React from 'react'

const ApprochHeader = () => {
  return (
    <div className='w-[95%] mx-auto text-center px-[16px] py-10 my-[5rem] xl:mt-[6rem] lg:mt-[6rem] md:mt-[6rem]'>
    {/* Red dot with text */}
    <div className="flex items-center mb-4 justify-center">
        <span className="w-[8px] h-[8px] bg-primary  rounded-full mr-2"></span>
        <p className="text-secondery  ">Our Team</p>
      </div>

    {/* H2 heading */}
    <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[70px] lg:text-[70px] md:text-[50px]">
    "We deliver sustainable solutions through <span className='text-primary'>eco-friendly practices</span>  and advanced technology."   </h2>

    {/* Lorem text */}
    <p className="text-[20px] opacity-[0.4]">
    At CS Arabia, our approach is rooted in a commitment to innovation, sustainability, and excellence. We believe in delivering integrated service solutions that not only meet the immediate needs of our clients but also contribute to the long-term success and sustainability of the oil and gas industry in the Gulf and Middle East.
   </p>
  </div>
  )
}

export default ApprochHeader
