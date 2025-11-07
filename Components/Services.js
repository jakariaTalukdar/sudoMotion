"use client";

import React, { useEffect } from 'react';
import Reveal from '@/Components/Reveal';

export default function Services() {
  // Add animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-5px) rotate(1deg); }
      }
      .service-card {
        transition: all 0.2s ease;
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.05);
      }
      .service-card:hover {
        transform: translateY(-2px);
        border-color: #00ff9d;
        box-shadow: 0 5px 15px -3px rgba(0, 255, 157, 0.2);
      }
      .gradient-text {
        background: linear-gradient(90deg, #00ff9d, #00f7ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const services = [
    {
      title: 'Web Dev',
      description: 'Fast, responsive websites with modern tech stack.',
      icon: '🌐',
    },
    {
      title: 'Web Apps',
      description: 'Custom solutions with powerful functionality.',
      icon: '💻',
    },
    {
      title: 'Mobile Apps',
      description: 'Cross-platform apps with beautiful UI.',
      icon: '📱',
    },
    {
      title: 'AI Solutions',
      description: 'Smart automation and data insights.',
      icon: '🤖',
    },
    {
      title: 'Video Editing',
      description: 'Professional content for all platforms.',
      icon: '🎬',
    },
    {
      title: 'UI/UX Design',
      description: 'Engaging, conversion-focused designs.',
      icon: '✨',
    },
  ];

  return (
    <section id="services" className="relative py-10 md:py-12 overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="text-center mb-8">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="gradient-text">Our Services</span>
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#00ff9d] to-[#00f7ff] mx-auto my-3"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 50} className="h-full">
              <div className="service-card h-full p-4 rounded-lg hover:shadow-[0_5px_15px_-3px_rgba(0,255,157,0.2)]">
                <div className="text-3xl mb-3">
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-1">{service.title}</h3>
                <p className="text-xs text-gray-400 mb-3 leading-relaxed">{service.description}</p>
                <button className="text-[#00ff9d] text-[11px] font-medium hover:text-white transition-colors">
                  Learn more →
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
