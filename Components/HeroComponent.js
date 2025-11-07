"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import Reveal from '@/Components/Reveal';

// Add CSS animations
const addAnimationStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(2deg); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.2; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(1.1); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes floatOrb {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(5px, -10px); }
      50% { transform: translate(10px, 0); }
      75% { transform: translate(5px, 10px); }
    }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-pulse-slow { animation: pulse 4s ease-in-out infinite; }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
    .animate-float-orb { 
      animation: floatOrb 15s ease-in-out infinite;
      animation-delay: calc(var(--delay, 0) * 1s);
    }
  `;
  document.head.appendChild(style);
};

export default function HeroComponent() {
  useEffect(() => {
    addAnimationStyles();
  }, []);

  // Generate random positions for orbs
  const orbs = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 10 + 10
  }));

  // Floating elements data
  const floatingElements = [
    { id: 1, left: '30%', top: '30%', delay: 0 },
    { id: 2, left: '70%', top: '40%', delay: 0.5 },
    { id: 3, left: '50%', top: '60%', delay: 1 }
  ];

  return (
    <div className='relative bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className='absolute rounded-full bg-[#00FF80] opacity-5'
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              top: `${orb.top}%`,
              left: `${orb.left}%`,
              filter: 'blur(40px)',
              animation: `floatOrb ${orb.duration}s ease-in-out infinite`,
              animationDelay: `${orb.delay}s`
            }}
          />
        ))}
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content */}
          <div className='text-center lg:text-left animate-fade-in-up'>
            <div className='mb-6 animate-fade-in-up' style={{ animationDelay: '0.1s' }}>
              <span className='inline-block px-4 py-2 bg-[#00FF8010] text-[#00FF80] text-sm font-medium rounded-full mb-4 border border-[#00FF8020]'>
                Digital Innovation Studio
              </span>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
              We <span className='text-[#00FF80]'>Craft</span> Digital
              <br />
              <span className='relative inline-block'>
                <span className='relative z-10'>Experiences</span>
                <span className='absolute bottom-2 left-0 w-full h-3 bg-[#00FF8030] -z-0 transform -rotate-1'></span>
              </span>
            </h1>

            <p className='text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up' style={{ animationDelay: '0.3s' }}>
              From websites to mobile apps — we create digital solutions that drive results and leave lasting impressions.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up' style={{ animationDelay: '0.4s' }}>
              <button 
                className='px-8 py-3.5 bg-[#00FF80] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00FF8030] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(0,255,128,0.5)]'
              >
                Start Your Project
              </button>
              <button
                className='px-8 py-3.5 bg-transparent text-white font-medium rounded-lg border border-gray-700 hover:border-[#00FF80] hover:text-[#00FF80] transition-all duration-300 hover:scale-105 active:scale-95'
              >
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Column - Animated Graphic */}
          <div className='relative h-[400px] lg:h-[500px] animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
            {/* Main floating device mockup */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='relative w-64 h-96 bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-1 shadow-2xl border border-gray-800 overflow-hidden animate-float'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#00FF8010] to-transparent'></div>
                <div className='absolute top-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-700 rounded-full'></div>
                <div className='h-full flex items-center justify-center p-6'>
                  <Image 
                    src='/Image/sudoMotionShort.png' 
                    alt='SudoMotion' 
                    width={200} 
                    height={200} 
                    className='w-full h-auto object-contain'
                    priority
                  />
                </div>
              </div>

              {/* Floating elements around the device */}
              {floatingElements.map((item) => (
                <div
                  key={item.id}
                  className='absolute w-20 h-20 rounded-lg bg-gradient-to-br from-[#00FF8010] to-[#00FF8005] backdrop-blur-sm border border-[#00FF8010] flex items-center justify-center animate-pulse-slow'
                  style={{
                    left: item.left,
                    top: item.top,
                    animationDelay: `${item.delay}s`,
                    '--delay': item.delay
                  }}
                >
                  <div className='w-3 h-3 rounded-full bg-[#00FF80]'></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
