import React from 'react'
import Doots from '../images/doots.png';

const approaches = [
    {
      id: 1,
      title: 'Weld-Free',
      description: 'No welding or X-ray inspection means a drastically reduced risks of incidents, creating a safer work environment for everyone on-site.',
    },
    {
      id: 2,
      title: 'Eradicates Corrosion-Risk',
      description: 'Corrosion is one of the most pressing concerns for the pipeline industry, but not with CS ARABIA at the helm. PCS delivers supreme corrosion resistance at the joints which, in turn, mitigates danger and lost productivity.',
    },
    {
      id: 3,
      title: 'Fast Results:',
      description: 'Soar weeks ahead of schedule by expediting the pipeline connection process, achieving what no pre-existing pipe joining methodology can. With no pipe sealant or cure time required, you can expect a significantly reduced timeframe with no chance of cross threading.',
    },
    {
      id: 4,
      title: 'Unmatched Quality',
      description: 'The result of exhaustive metallurgical and mechanical engineering, lab testing, and finite element analysis, Positive Seal Coupling allows us to connect the internally coated pipeline without damaging the coating.',
    },
    {
      id: 5,
      title: 'Cost-Effective',
      description: 'Spend less on labor costs while achieving higher strength results when joining NPS 3” through 12” line pipes of all grades, internally or externally coated.',
    }
  ];

const CPSASection = () => {
  return (
    <div className='bg-vanish'>
      <div className="w-[95%] mx-auto text-center px-[16px] py-10">
        
        {/* Responsive 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Iterate over the array to generate columns dynamically */}
          {approaches.map((approach) => (
            <div key={approach.id} className="flex flex-col items-start text-start">
              <div className="flex items-center justify-start mb-4">
                <img src={Doots} alt="Doots" className="mr-3" />
                <h3 className="text-[20px] font-semibold">{approach.title}</h3>
              </div>
              <p className="text-[16px] text-span">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CPSASection
