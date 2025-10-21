import React from 'react'
import Reveal from '@/Components/Reveal'

const logos = [
  { id: 1, src: '/vercel.svg', alt: 'Vercel' },
  { id: 2, src: '/next.svg', alt: 'Next.js' },
  { id: 3, src: '/globe.svg', alt: 'Global' },
  { id: 4, src: '/window.svg', alt: 'Window' },
  { id: 5, src: '/file.svg', alt: 'File' }
]

export default function Partners() {
  return (
    <section className="bg-[#0f0f0f] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 relative">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Partners & Clients</h2>
          <div className={`absolute flex items-center gap-x-1 top-10 left-1/2 -translate-x-1/2`}>
            <div className='top-[50px] w-20 h-1 rounded-lg bg-primary'></div>
            <div className='top-[50px] w-3 h-1 rounded-lg bg-primary'></div>
            <div className='top-[50px] w-7 h-1 rounded-lg bg-primary'></div>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            We collaborate with forward‑thinking teams to build modern digital products and experiences.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {logos.map((logo, idx) => (
            <Reveal key={logo.id} delay={60 * (idx % 5)} className="p-4 rounded-xl bg-[#ffffff12] backBlur card-hover flex items-center justify-center">
              <img src={logo.src} alt={logo.alt} className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
