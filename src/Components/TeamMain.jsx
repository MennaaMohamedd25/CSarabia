import React from 'react';
import teamOne from '../images/team1.png';
import teamTwo from '../images/team2.png';
import teamThree from '../images/team3.png';
import teamFour from '../images/team4.png';

// Array of team members with names and titles
const teamMembers = [
  { id: 1, name: 'Faisal Abdulla Fouad', title: 'Chairman - Abdulla Fouad Group', image: teamOne },
  { id: 2, name: 'Turki Al-Sadoon', title: 'CEO - CSArabia', image: teamTwo },
  { id: 3, name: 'Timothy Pirie', title: 'Founder - Canadian Nitrogen Services', image: teamThree },
  { id: 4, name: 'Faisal Qari', title: 'Vice President', image: teamFour },
  { id: 5, name: 'Sayed Ibrahim', title: 'Business Development Manager', image: teamOne },
  { id: 6, name: 'Reda Abdelsalam', title: 'Engineering Manager', image: teamTwo },
];

const TeamMain = () => {
  const justifyClass = teamMembers.length === 4 ? 'justify-start' : 'justify-center';

  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] mx-auto py-10">
        {/* Flex layout for team members */}
        <div className={`flex flex-wrap ${justifyClass} gap-6`}>
          {teamMembers.map((member) => (
            <div key={member.id} className="relative flex flex-col items-center w-full sm:w-[48%] lg:w-[23%]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full object-cover rounded-lg"
              />
              {/* Overlay with name and title */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg">
                <div className="text-white text-lg font-bold mb-2">
                  {member.name}
                </div>
                <div className="flex items-center">
                  <span className="mr-2 w-2 h-2 bg-red-500 rounded-full"></span>
                  <span className="text-white text-sm">{member.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMain;
