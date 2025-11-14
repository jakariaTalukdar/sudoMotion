"use client";
import Reveal from '@/Components/Reveal';
import { teamMembersData } from '@/lib/teamMembersData';
import TeamMemberCard from './TeamMemberCard';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  const teamByDepartment = groupByDepartment(teamMembersData);
  const [height, setHeight] = useState('620px');
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleExpand = () => {
    if (!isExpanded) {
      // First click: expand to show more content
      setHeight('1164px');
      setIsExpanded(true);
    } else {
      // Second click: navigate to full team page
      router.push('/team');
    }
  };

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
        <div style={{ maxHeight: height }} className='overflow-hidden relative transition-all duration-500'>
          <div className='absolute bottom-0 py-12 rounded-b-xl bg-gradient-to-b from-transparent to-gray-900/90 z-10 w-full flex items-center justify-center pointer-events-none'></div>
          <button 
            onClick={handleExpand} 
            className='absolute bottom-4 z-20 left-1/2 -translate-x-1/2 border border-primary bg-gray-900/80 backdrop-blur-sm px-4 py-1.5 text-xs rounded-full md:text-sm flex items-center gap-x-2 hover:bg-primary hover:text-black transition-colors duration-300'
          >
            <span>{isExpanded ? 'View All Team Members' : 'Show More'}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
          {Object.entries(teamByDepartment).map(([department, members]) => (
            <div key={department} className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-[#00FF80] border-b border-gray-800 pb-2">
                {departmentTitles[department] || department.charAt(0).toUpperCase() + department.slice(1)}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-5 gap-3">
                {members.map((member, idx) => (
                  <Reveal 
                    key={member.id} 
                    delay={100 * (idx % 4)}
                  >
                    <TeamMemberCard member={member} className="p-5" />
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
