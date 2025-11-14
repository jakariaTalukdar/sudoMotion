'use client';

import React from 'react';
import Reveal from '@/Components/Reveal';
import Image from 'next/image';
import Link from 'next/link';
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {members.map((member, idx) => (
                  <Reveal 
                    key={member.id} 
                    delay={50 * (idx % 4)}
                    className="group"
                  >
                    <div className="h-full p-5 rounded-xl bg-[#ffffff09] hover:bg-[#00FF8010] transition-all duration-300 border border-gray-800 hover:border-[#00FF8030] hover:shadow-[0_0_20px_rgba(0,255,128,0.1)]">
                      <div className="flex flex-col items-center text-center h-full">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[#00FF80] mb-5 group-hover:shadow-[0_0_20px_rgba(0,255,128,0.3)] transition-all duration-300">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#00FF80] transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-gray-300 mt-1">{member.position}</p>
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#00FF8010] text-[#00FF80] hover:bg-[#00FF8020] transition-colors"
                            aria-label={`${member.name}'s LinkedIn`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
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