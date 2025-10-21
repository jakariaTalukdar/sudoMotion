import React from 'react'
import Reveal from '@/Components/Reveal'

const team = [
  { id: 1, name: 'Rakib Ahmed', role: 'Full‑Stack Developer', initials: 'RA' },
  { id: 2, name: 'Sara Islam', role: 'Product Designer', initials: 'SI' },
  { id: 3, name: 'Tanvir Hossain', role: 'Mobile Engineer', initials: 'TH' },
  { id: 4, name: 'Nusrat Jahan', role: 'AI Engineer', initials: 'NJ' }
]

export default function Team() {
  return (
    <section className="bg-[#0f0f0f] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 relative">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Team</h2>
          <div className={`absolute flex items-center gap-x-1 top-10 left-1/2 -translate-x-1/2`}>
            <div className='top-[50px] w-20 h-1 rounded-lg bg-primary'></div>
            <div className='top-[50px] w-3 h-1 rounded-lg bg-primary'></div>
            <div className='top-[50px] w-7 h-1 rounded-lg bg-primary'></div>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            A fast, creative and design‑forward crew crafting modern digital experiences.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {team.map((m, idx) => (
            <Reveal key={m.id} delay={60 * (idx % 4)} className="p-4 rounded-xl bg-[#ffffff1f] backBlur card-hover flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#0A0A17] border border-[#2e2e2e] flex items-center justify-center text-lg font-semibold tracking-wide mb-3">
                {m.initials}
              </div>
              <h3 className="text-base font-semibold">{m.name}</h3>
              <p className="text-alpha text-sm">{m.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
