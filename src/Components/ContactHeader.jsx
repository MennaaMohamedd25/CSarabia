import React from 'react'

const ContactHeader = () => {
  return (
    <div className='w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px] mt-[5rem] xl:mt-[6rem] lg:mt-[6rem] md:mt-[6rem] '>
    {/* Red dot with text */}
    <div className="flex items-center mb-4 justify-center">
        <span className="w-[8px] h-[8px] bg-primary  rounded-full mr-2"></span>
        <p className="text-secondery  ">Contact us</p>
      </div>

    {/* H2 heading */}
    <h2 className="text-[24px] font-bold my-[2.5rem] xl:text-[60px] lg:text-[60px] md:text-[50px] text-center">
    Choose Excellence. Choose CS ARABIA. </h2>
    <p className="text-[20px] opacity-[0.4] text-center">
    Connect with our industry leaders to see how we can apply our flexible solutions to your business and sector. We have worked hard to achieve the premier status we enjoy today, and we will never stop working to maintain it    </p>

  </div>
  )
}

export default ContactHeader;
