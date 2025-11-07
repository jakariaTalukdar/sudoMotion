import { whyChooseUs } from '@/lib/whyChooseUs';
import React from 'react';
import Reveal from '@/Components/Reveal';

export default function WhyChoseUs() {
  return (
    <section className="relative py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-8">
          <span className="text-xs font-medium text-[#00FF80] tracking-wider">OUR STRENGTHS</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-2">
            Why Choose <span className="text-[#00FF80]">SudoMotion</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00FF80] to-transparent mx-auto rounded-full"></div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyChooseUs.map((item, idx) => (
            <Reveal key={item.id} delay={50 * (idx % 4)}>
              <div className="group bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-[#00FF80]/30 transition-all duration-300 h-full">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#00FF80] to-[#00cc66] flex items-center justify-center text-black font-bold text-xs">
                    {idx + 1}
                  </div>
                  <h3 className="text-sm font-medium text-white group-hover:text-[#00FF80] transition-colors">
                    {item.title.split('. ')[1]}
                  </h3>
                </div>
                <p className="text-xs text-gray-300 mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-700/50 flex items-center justify-center">
                    {React.cloneElement(item.svg, {
                      className: 'w-3 h-3 text-[#00FF80]'
                    })}
                  </div>
                  <div className="flex space-x-1">
                    {[1, 2, 3].map((dot) => (
                      <div 
                        key={dot}
                        className={`w-1.5 h-1.5 rounded-full ${dot <= idx % 3 + 1 ? 'bg-[#00FF80]' : 'bg-gray-700'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
