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

export default function Team() {
  const teamByDepartment = groupByDepartment(teamMembersData);

  return (
    <section className="bg-[#0f0f0f] text-white py-16">
      <div className="max-w-6xl mx-auto px-2 relative">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meet Our Team</h2>
          <div className="absolute flex items-center gap-x-1 top-10 left-1/2 -translate-x-1/2">
            <div className='w-20 h-1 rounded-lg bg-primary'></div>
            <div className='w-3 h-1 rounded-lg bg-primary'></div>
            <div className='w-7 h-1 rounded-lg bg-primary'></div>
          </div>
        </Reveal>
        
        <Reveal delay={90}>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Our talented team of professionals working together to deliver exceptional digital solutions.
          </p>
        </Reveal>

        {Object.entries(teamByDepartment).map(([department, members]) => (
          <div key={department} className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-[#00FF80] border-b border-gray-800 pb-2">
              {departmentTitles[department] || department.charAt(0).toUpperCase() + department.slice(1)}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {members.map((member, idx) => (
                <Reveal 
                  key={member.id} 
                  delay={100 * (idx % 4)}
                  className="group p-5 rounded-xl bg-[#ffffff09] hover:bg-[#00FF8010] transition-all duration-300 border border-gray-800 hover:border-[#00FF8030]"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#00FF80] mb-4 group-hover:shadow-[0_0_15px_rgba(0,255,128,0.3)] transition-all duration-300">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        priority={member.id <= 4} // Only prioritize first 4 images
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#00FF80] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-300 mb-2">{member.position}</p>
                    {/* <span className="inline-block px-3 py-1 text-xs rounded-full bg-[#00FF8010] text-[#00FF80] border border-[#00FF8020] group-hover:bg-[#00FF8020] transition-colors">
                      {member.department.charAt(0).toUpperCase() + member.department.slice(1)}
                    </span> */}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
