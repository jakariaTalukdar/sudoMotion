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
              <Reveal key={service.id} delay={index * 80} className="card-hover">
                <div className="bg-[#ffffff08] backBlur p-6 rounded-xl h-full flex flex-col">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{service.description}</p>
                  
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium text-primary">What we offer:</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="mt-6 inline-block text-sm font-medium text-primary hover:text-white transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
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
