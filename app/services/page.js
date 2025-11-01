import React from 'react';
import Reveal from '@/Components/Reveal';
import Link from 'next/link';
import { services } from '@/lib/servicesData';

export const metadata = {
  title: 'Our Services - SudoMotion',
  description: 'Discover our comprehensive range of digital services including web development, mobile apps, UI/UX design, and more.',
};

const ServicesPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-green to-dark pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
              Our Services
            </h1>
            <div className="flex items-center justify-center gap-x-1 mb-8">
              <div className='w-20 h-1 rounded-lg bg-primary'></div>
              <div className='w-3 h-1 rounded-lg bg-primary'></div>
              <div className='w-7 h-1 rounded-lg bg-primary'></div>
            </div>
            <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg">
              Comprehensive digital solutions tailored to your business needs. We combine innovation with expertise to deliver exceptional results.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 80} className="card-hover h-full">
                <Link href={`/services/${service.slug}`} className="h-full">
                  <div className="bg-[#ffffff08] backBlur p-6 rounded-xl h-full flex flex-col hover:bg-[#ffffff12] transition-colors">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-white/10 backdrop-blur-sm">
                        <div className="text-2xl text-primary">
                          {React.cloneElement(service.icon, {
                            className: 'w-6 h-6',
                            style: { color: 'currentColor' }
                          })}
                        </div>
                      </div>
                    </div>
                    {/* <img src={service.icon} alt={service.title} className="w-16 h-16 object-contain mb-4 bg-white rounded-md p-2" /> */}
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 flex-grow">{service.description}</p>
                    
                    <div className="mt-4 space-y-2">
                      <h4 className="text-sm font-medium text-primary">What we offer:</h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <span className="text-primary mr-2">✓</span>
                            <span className="truncate">{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-xs text-primary">+{service.features.length - 3} more</li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="mt-6 inline-flex items-center text-sm font-medium text-primary group">
                      Learn more
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-green to-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve your business goals with our expert services.
            </p>
            <Link href="/contact" className="btn">
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
