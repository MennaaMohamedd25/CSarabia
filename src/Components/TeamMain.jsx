import React from 'react';
import teamOne from '../images/team1.png';
import teamTwo from '../images/team2.png';
import teamThree from '../images/team3.png';
import teamFour from '../images/team4.png';

// Array of team members with names and titles
const teamMembers = [
  { id: 1, name: 'Gregory Walker', title: 'Founder & CEO', image: teamOne },
  { id: 2, name: 'Patrick Morgan', title: 'VP Sales & Marketing', image: teamTwo },
  { id: 3, name: 'Taylor White', title: 'Cheif Finance Officer', image: teamThree },
  { id: 4, name: 'David Hanson', title: 'Technical Head, Refineries', image: teamFour },
  { id: 5, name: 'Gregory Walker', title: 'Founder & CEO', image: teamOne },
  { id: 6, name: 'Patrick Morgan', title: 'VP Sales & Marketing', image: teamTwo },
  { id: 7, name: 'Taylor White', title: 'Cheif Finance Officer', image: teamThree },
  { id: 8, name: 'David Hanson', title: 'Technical Head, Refineries', image: teamFour },
];

const TeamMain = () => {
  return (
    <div className="w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]">
      {/* Responsive grid with 2 rows and 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="relative">
            <img
              src={member.image}
              alt={member.name}
              className="w-full object-cover"
            />
            {/* Name with red dot and title aligned at the bottom */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 ">
                  {/* Title aligned at the bottom */}
                  <div className="text-white text-[30px] font-bold mb-[16px]">
                {member.name}
              </div>
              {/* Name and red dot */}
              <div className="flex items-center mb-2">
                <span className="mr-2 w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-white text-[16px] ">{member.title}</span>
              </div>
          
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMain;
