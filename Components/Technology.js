import { technologies } from '@/lib/TechnologyData';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/Components/Reveal';

const getTypeColor = (type) => {
  const colors = {
    'language': 'from-blue-500 to-cyan-500',
    'framework': 'from-purple-500 to-pink-500',
    'library': 'from-green-500 to-emerald-500',
    'runtime': 'from-yellow-500 to-amber-500',
    'database': 'from-red-500 to-orange-500',
    'os': 'from-gray-500 to-slate-500',
    'default': 'from-indigo-500 to-purple-500'
  };
  return colors[type.toLowerCase()] || colors['default'];
};

export default function Technology() {

  // Group technologies by type
  const techByType = technologies.reduce((acc, tech) => {
    const type = tech.type.toLowerCase();
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(tech);
    return acc;
  }, {});

  return (
    <section className="relative py-12 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-900/30 rounded-full border border-indigo-500/20 mb-3">
              Our Technology Stack
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              Technologies We <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Excel</span> At
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </Reveal>

        {/* Technology Sections by Type */}
        {Object.entries(techByType).map(([type, items], typeIndex) => (
          <div key={type} className="mb-8">
            <Reveal delay={typeIndex * 30}>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className={`bg-gradient-to-r ${getTypeColor(type)} bg-clip-text text-transparent`}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
                <span className="ml-3 h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></span>
              </h3>
            </Reveal>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
              {items.map((tech, techIndex) => (
                <Reveal 
                  key={tech.id}
                  delay={80 + (techIndex * 30)}
                  className="group"
                >
                  <div className="h-full bg-gray-800/50 rounded-md md:rounded-lg md:p-4 p-2 border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-200 hover:shadow-md hover:shadow-indigo-500/5 flex flex-col">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${getTypeColor(type)}/20 border ${getTypeColor(type).replace('from-', 'border-').replace(' to-', '/20 ')} flex-shrink-0 group-hover:scale-105 transition-transform duration-200`}>
                        <div className="relative h-6 w-6">
                          <Image 
                            src={tech.image}
                            alt={tech.title}
                            fill
                            className="object-contain"
                            sizes="24px"
                          />
                        </div>
                      </div>
                      <h3 className="text-base font-semibold text-white">
                        {tech.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                      {tech.description}
                    </p>
                    <div className="mt-auto pt-2 border-t border-gray-700/50 flex items-center justify-between">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${getTypeColor(type).replace('from-', 'bg-').replace(' to-', '/10 ')} ${getTypeColor(type).replace('from-', 'text-').replace(' to-', ' ')}`}>
                        {tech.type}
                      </span>
                      <div className="flex space-x-1">
                        {Array(3).fill(0).map((_, i) => (
                          <div 
                            key={i}
                            className={`h-2 w-2 rounded-full ${getTypeColor(type).replace('from-', 'bg-').replace(' to-', ' ')}`}
                            style={{ opacity: 0.3 + (i * 0.2) }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <Reveal delay={150} className="mt-12 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/70 rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-3">Ready to build something amazing?</h3>
            <p className="text-sm text-gray-300 mb-5 max-w-2xl mx-auto leading-relaxed">
              Our team of experts is ready to help you leverage these technologies to bring your ideas to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-md hover:opacity-90 transition-all duration-200 hover:shadow-md hover:shadow-indigo-500/20"
            >
              Get in Touch
              <svg className="w-3.5 h-3.5 ml-1.5 -mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
