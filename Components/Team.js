import React from 'react';
import Reveal from '@/Components/Reveal';
import Image from 'next/image';
import { teamMembersData } from '@/lib/teamMembersData';

// Group team members by department
const groupByDepartment = (members) => {
  return members.reduce((acc, member) => {
    if (!acc[member.department]) {
      acc[member.department] = [];
    }
    acc[member.department].push(member);
    return acc;
  }, {});
};

const departmentTitles = {
  management: 'Leadership Team',
  development: 'Development Team',
  design: 'Design Team',
  marketing: 'Marketing Team',
  support: 'Support Team'
};

const TeamCard = ({ member }) => {
  const [mainRole] = member.position.split(' | ');
  
  return (
    <div className="relative group h-full">
      <div className="relative h-full bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 hover:border-[#00FF80] hover:shadow-[0_0_30px_rgba(0,255,128,0.1)]">
        {/* Image with gradient overlay */}
        <div className="relative h-56 bg-gray-800">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={member.id <= 4}
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> */}
        </div>
        
        {/* Content */}
        <div className="p-2 text-center">
          <h3 className="text-lg font-semibold text-white">{member.name}</h3>
          <p className="text-sm text-[#00FFAA] mb-2">{member.position}</p>
          
          {/* Department badge */}
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-[#00FF8010] text-[#00FFAA] border border-[#00FF8030] ">
            {member.department.charAt(0).toUpperCase() + member.department.slice(1)}
          </span>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00FF80] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default function Team() {
  const teamByDepartment = groupByDepartment(teamMembersData);

  return (
    <section className="bg-[#0f0f0f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00FF80] to-transparent mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The talented individuals behind our success
          </p>
        </div>
        <div className='flex flex-col gap-y-10'>
          {Object.entries(teamByDepartment).map(([department, members]) => (
            <div key={department} className="">
              <h3 className="text-2xl font-semibold mb-5 text-[#00FF80]">
                {departmentTitles[department] || department.charAt(0).toUpperCase() + department.slice(1)}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {members.map((member) => (
                  <Reveal key={member.id}>
                    <TeamCard member={member} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
