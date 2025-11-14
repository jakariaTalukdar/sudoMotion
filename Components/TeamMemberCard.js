import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeamMemberCard = ({ member, className = '' }) => {
  return (
    <div className={`h-full p-4 rounded-xl bg-[#ffffff09] hover:bg-[#00FF8010] transition-all duration-300 border border-gray-800 hover:border-[#00FF8030] hover:shadow-[0_0_20px_rgba(0,255,128,0.1)] ${className}`}>
      <div className="flex flex-col items-center text-center h-full">
        <div className="relative w-24 md:w-32 h-24 md:h-32 rounded-full overflow-hidden border-2 border-[#00FF80] mb-5 group-hover:shadow-[0_0_20px_rgba(0,255,128,0.3)] transition-all duration-300">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-[#00FF80] transition-colors">
          {member.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-300 mt-1">{member.position}</p>
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
  );
};

export default TeamMemberCard;
