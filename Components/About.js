import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Reveal from '@/Components/Reveal';

export default function About() {
  const stats = [
    { value: '100%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Projects Completed' },
    { value: '5+', label: 'Years Experience' },
  ];

  const features = [
    { icon: '💻', title: 'Web Development', desc: 'Cutting-edge websites and web apps' },
    { icon: '📱', title: 'App Development', desc: 'Native and cross-platform mobile apps' },
    { icon: '🎬', title: 'Video Editing', desc: 'Professional video production' },
    { icon: '🎨', title: 'Branding', desc: 'Creative brand identities' },
  ];

  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))]"></div>
      </div>
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#00FF80]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#00FF80]/5 rounded-full filter blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-5">
        <Reveal className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 text-xs font-medium text-[#00FF80] bg-[#00FF80]/10 rounded-full border border-[#00FF80]/20 mb-4">
            WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We Turn <span className="text-[#00FF80]">Ideas</span> Into Digital Realities
          </h2>
          <div className="w-24 h-1 bg-[#00FF80] mx-auto rounded-full"></div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Image with tech elements */}
          <Reveal className="relative">
            <div className="relative rounded-xl overflow-hidden border border-[#00FF80]/20 bg-gradient-to-br from-gray-800/30 to-gray-900/50 p-0.5 group">
              <Image
                src="/Image/about.jpg"
                alt="Our Team"
                width={800}
                height={800}
                className="w-full h-auto rounded-xl object-cover"
              />
              {/* Tech badges */}
              <div className="absolute -bottom-3 -left-3 bg-[#00FF80] text-black text-[10px] font-medium px-2 py-1 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">
                Since 2018
              </div>
              <div className="absolute -top-3 -right-3 bg-black text-[#00FF80] border border-[#00FF80]/30 text-[10px] font-medium px-2 py-1 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">
                Trusted by 50+ Clients
              </div>
            </div>
          </Reveal>

          {/* Right: Content */}
          <Reveal delay={100}>
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-white">Crafting Digital Excellence</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                At <span className="font-semibold text-white">SudoMotion</span>, we're a passionate collective of designers, developers, and strategists dedicated to creating digital experiences that make an impact. We believe in the power of technology to transform businesses and connect people in meaningful ways.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {features.map((feature, index) => (
                  <div key={index} className="group bg-gray-800/30 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50 hover:border-[#00FF80]/50 transition-all duration-300 hover:shadow-md hover:shadow-[#00FF80]/5">
                    <div className="text-xl mb-1.5 group-hover:text-[#00FF80] transition-colors duration-300">{feature.icon}</div>
                    <h4 className="font-semibold text-sm text-white group-hover:text-[#00FF80] transition-colors duration-300">{feature.title}</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5 group-hover:text-white transition-colors duration-300">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-5 mt-6 pt-5 border-t border-gray-800">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-2xl font-bold text-[#00FF80] group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link 
                  href="/about" 
                  className="inline-flex items-center px-5 py-2 text-sm bg-[#00FF80] text-black font-medium rounded-lg hover:bg-transparent hover:text-[#00FF80] border-2 border-[#00FF80] transition-all duration-200 hover:shadow-md hover:shadow-[#00FF80]/10 group/btn"
                >
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-200">Discover Our Process</span>
                  <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

  )
}
