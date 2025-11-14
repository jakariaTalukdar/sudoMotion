'use client';

import React from 'react';
import Reveal from '@/Components/Reveal';
import Link from 'next/link';
import { teamMembersData } from '@/lib/teamMembersData';
import TeamMemberCard from '@/Components/TeamMemberCard';

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
  creative: 'Creative Team',
  marketing: 'Marketing Team',
  support: 'Support Team'
};

export default function TeamPage() {
  const teamByDepartment = groupByDepartment(teamMembersData);

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-dark to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h1>
              <div className="flex items-center justify-center gap-x-1 mb-8">
                <div className='w-20 h-1 rounded-lg bg-primary'></div>
                <div className='w-3 h-1 rounded-lg bg-primary'></div>
                <div className='w-7 h-1 rounded-lg bg-primary'></div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our talented team of professionals working together to deliver exceptional digital solutions.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-[#0f0f0f] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {Object.entries(teamByDepartment).map(([department, members]) => (
            <div key={department} className="mb-16">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#00FF80] border-b border-gray-800 pb-3">
                  {departmentTitles[department] || department.charAt(0).toUpperCase() + department.slice(1)}
                </h2>
              </Reveal>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-3">
                {members.map((member, idx) => (
                  <Reveal 
                    key={member.id} 
                    delay={50 * (idx % 4)}
                    className="group"
                  >
                    <TeamMemberCard member={member} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-green to-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8">
              Want to work with this amazing team? Check out our open positions.
            </p>
            <Link 
              href="/careers" 
              className="inline-block bg-primary hover:bg-primary/90 text-black font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              View Open Positions
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}