import React from 'react';
import overview from '../images/cpsa.png';


const CPSAMain = () => {
 
    return (
        <div className='w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]'>
          <div className="flex flex-col md:flex-row justify-between items-center gap-x-20">
            {/* Second Column: Image */}
            <div className="md:w-1/2 flex items-center justify-center order-2 md:order-2 mb-[1.5rem]">
  <img src={overview} alt="Descriptive " className="rounded-[24px]" />
</div>
    
            {/* First Column: Headline, Text, and Button */}
            <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left order-1 md:order-1">
              {/* Heading */}
              <p className="text-[16px] text-start">
              CPSA, nestled within CSARABIA's dynamic ecosystem, stands as a beacon of innovation and excellence in the pipeline services sector.
              </p>
    
     
                {/* First Paragraph with ellipses */}
                <p className="my-[2.5rem] text-[16px] text-start">
                With a focus on harnessing state-of-the-art Positive Seal Coupling technology, CPSA transcends traditional methods by eliminating the need for welding, thus enhancing the safety, efficiency, and reliability of pipeline construction and maintenance.               </p>
    
              {/* Second Paragraph with ellipses */}
              <p className="text-[16px] text-start">
              This approach not only streamlines operations but also ensures seamless, robust connections.               </p>
              <p className="my-[2.5rem] text-[16px] text-start">
              Catering to a broad spectrum of environments, from the rigorous demands of offshore platforms to the nuanced needs of onshore projects, CPSA’s comprehensive solutions underscore our commitment to maintaining pipeline integrity.             </p>
              <p className=" text-[16px] text-start">
              Our pioneering spirit and unwavering dedication to quality set new industry standards, making CPSA the go-to partner for entities seeking unparalleled pipeline expertise. CPSA holds the exclusive supply and installation rights for this patented technology in Saudi Arabia and the Middle East in partnership with Jetair International, cementing its status as a leader in the field          </p>
            </div>
          </div>
        </div>
  )
}

export default CPSAMain
