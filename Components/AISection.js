'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Advanced 3D and Particle Animations
const styles = `
  @keyframes float3d {
    0%, 100% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
    50% { transform: translate3d(3px, 3px, 5px) rotateX(3deg) rotateY(3deg); }
  }

  @keyframes particleOrbit {
    0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
  }

  @keyframes scanline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }

  @keyframes glitch {
    0%, 100% { text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff; }
    14% { text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff; }
    15% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff; }
    49% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff; }
    50% { text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff; }
    99% { text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff; }
  }

  @keyframes float {
    0%, 100% { transform: translate3d(0, 0, 0); }
    50% { transform: translate3d(0, -10px, 0); }
  }

  .glitch-text {
    position: relative;
    animation: glitch 5s infinite;
  }
  
  .glitch-text::before,
  .glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }
  
  .glitch-text::before {
    animation: glitch 3s infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-5px, -5px);
  }
  
  .glitch-text::after {
    animation: glitch 2s infinite reverse;
    clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
    transform: translate(5px, 5px);
  }

  .holographic-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.1);
    height: 100%;
  }

  .holographic-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transform: translateX(-100%) rotate(45deg);
    transition: 0.6s;
  }

  .holographic-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 60px -10px rgba(124, 58, 237, 0.4);
  }

  .holographic-card:hover::before {
    animation: shine 1.5s;
  }

  @keyframes shine {
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    background: radial-gradient(circle, rgba(124,58,237,0.8) 0%, rgba(99,102,241,0.5) 50%, transparent 70%);
    filter: blur(1px);
    will-change: transform;
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(30px);
    opacity: 0.4;
    z-index: 0;
    transform-style: preserve-3d;
    will-change: transform;
    animation: float3d 10s ease-in-out infinite;
  }

  .gradient-text {
    background: linear-gradient(90deg, #4F46E5, #7C3AED, #8B5CF6);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: gradientShift 6s linear infinite;
    position: relative;
    display: inline-block;
  }

  .gradient-text::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #4F46E5, #7C3AED, #8B5CF6);
    background-size: 300% auto;
    animation: gradientShift 8s linear infinite;
    border-radius: 3px;
  }

  .scanline {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(124, 58, 237, 0.1) 50%,
      transparent 100%
    );
    animation: scanline 8s linear infinite;
    pointer-events: none;
    z-index: 10;
    opacity: 0.3;
  }
`;

export default function AISection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const particlesRef = useRef([]);
  
  // Create particles
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 0.5 + 0.1,
        angle: Math.random() * 360,
        orbitRadius: Math.random() * 100 + 50
      });
    }
    particlesRef.current = newParticles;
    setParticles(newParticles);

    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(p => ({
          ...p,
          angle: (p.angle + p.speed) % 360
        }))
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    let animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Handle mouse move for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (window.innerWidth / 2 - clientX) / 20;
      const y = (window.innerHeight / 2 - clientY) / 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate items in sequence
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setVisibleItems(prev => Math.min(prev + 1, features.length + 2));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, visibleItems]);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI-Powered Solutions',
      description: 'Harness the power of artificial intelligence to transform your business operations and customer experiences.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance with our optimized AI models and infrastructure.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Secure & Private',
      description: 'Your data security and privacy are our top priorities with enterprise-grade encryption.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-8 md:py-10 bg-gray-900 overflow-hidden min-h-0 flex items-center"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      <style jsx global>{styles}</style>
      
      {/* Advanced 3D Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* 3D Orbs */}
        <div 
          className="orb w-64 h-64 bg-indigo-600 top-1/4 -left-32" 
          style={{
            transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)`,
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="orb w-96 h-96 bg-purple-700 -bottom-48 -right-48" 
          style={{
            transform: `translate3d(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px, 0)`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="orb w-80 h-80 bg-blue-600 top-1/2 right-1/4" 
          style={{
            transform: `translate3d(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px, 0)`,
            animationDelay: '4s'
          }}
        ></div>
        
        {/* 3D Grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          transform: `translate3d(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px, 0)`
        }}></div>
        
        {/* Animated Particles */}
        {particles.map((particle) => {
          const x = 50 + Math.cos(particle.angle * (Math.PI / 180)) * particle.orbitRadius / 2;
          const y = 50 + Math.sin(particle.angle * (Math.PI / 180)) * particle.orbitRadius / 2;
          
          return (
            <div 
              key={particle.id}
              className="particle"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                transform: `translate3d(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px, 0)`,
                opacity: 0.7 - (particle.size / 10)
              }}
            />
          );
        })}
        
        {/* Scanline Effect */}
        <div className="scanline"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-2 sm:px-4 py-8">
        <div className="text-center mb-8 relative z-10">
          <div 
            className={`transition-all duration-1000 transform ${visibleItems > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              transform: `translate3d(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px, 0)`
            }}
          >
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-medium backdrop-blur-sm border border-indigo-500/20">
              <span className="relative flex items-center">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                </span>
                <span className="relative">
                  <span className="absolute -inset-1 bg-indigo-500/20 blur-sm"></span>
                  <span className="relative">AI-Powered Solutions</span>
                </span>
              </span>
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              <span className="" data-text="Transform Your Business">
                Transform Your Business
              </span>
              <span className="block mt-4">
                with{' '}
                <span className="gradient-text relative">
                  <span className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-30"></span>
                  <span className="relative glitch-text">AI Innovation</span>
                </span>
              </span>
            </h2>
            <p className="text-xs text-gray-300 max-w-2xl mx-auto leading-normal">
              Leverage <span className="text-white font-medium relative group">
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                cutting-edge artificial intelligence
              </span>{' '}
              to automate processes, gain insights, and create intelligent applications that drive business growth.
            </p>
          </div>
        </div>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 relative z-10"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${-mousePosition.x * 0.05}deg)`
          }}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`holographic-card rounded-lg p-4 transition-all duration-200 ${
                visibleItems > index + 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
                transform: `translate3d(0, ${visibleItems > index + 1 ? '0' : '20px'}, 0)`,
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(124, 58, 237, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div className="relative">
                <div 
                  className="absolute -top-2 -left-2 w-16 h-16 rounded-xl blur-lg"
                  style={{
                    background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3))',
                    zIndex: -1
                  }}
                ></div>
                <div 
                  className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center mb-3 text-white"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(124, 58, 237, 0.9))',
                    boxShadow: '0 10px 20px -5px rgba(99, 102, 241, 0.3)'
                  }}
                >
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-base font-bold text-white mb-2 relative">
                <span className="relative z-10">{feature.title}</span>
                <span 
                  className="absolute -left-2 -bottom-1 w-8 h-1 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.8), rgba(124, 58, 237, 0.8))'
                  }}
                ></span>
              </h3>
              <p className="text-xs text-gray-300 leading-normal mb-3">
                {feature.description}
              </p>
              <div className="mt-auto">
                <button 
                  className="group relative inline-flex items-center text-indigo-300 hover:text-white font-medium transition-colors duration-300"
                  onMouseEnter={(e) => {
                    const dot = e.currentTarget.querySelector('.dot');
                    if (dot) {
                      dot.style.width = '100%';
                      dot.style.opacity = '1';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const dot = e.currentTarget.querySelector('.dot');
                    if (dot) {
                      dot.style.width = '0%';
                      dot.style.opacity = '0';
                    }
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    Discover more
                    <svg 
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span 
                    className="dot absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300"
                    style={{
                      width: '0%',
                      opacity: 0
                    }}
                  ></span>
                </button>
              </div>
              
              {/* Holographic reflection */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.05) 100%)',
                  zIndex: -1
                }}
              ></div>
            </div>
          ))}
        </div>

        <div 
          className={`text-center relative z-10 transition-all duration-300 mt-6 ${
            visibleItems > features.length + 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            transform: `translate3d(0, ${visibleItems > features.length + 1 ? '0' : '20px'}, 0)`
          }}
        >
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center px-5 py-2 text-white font-medium rounded-md overflow-hidden transition-all duration-200 text-xs sm:text-sm"
            style={{
              background: 'linear-gradient(90deg, #4F46E5, #7C3AED)',
              boxShadow: '0 10px 30px -5px rgba(79, 70, 229, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 15px 40px -5px rgba(124, 58, 237, 0.6)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(79, 70, 229, 0.4)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div 
                className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.6s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateX(100%)';
                }}
              ></div>
            </div>
            
            <span className="relative z-10 flex items-center text-lg font-semibold">
              Get Started Now
              <svg 
                className="w-5 h-5 ml-3 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            
            {/* Glow effect */}
            <span 
              className="absolute -inset-1 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)',
                zIndex: -1,
                filter: 'blur(12px)'
              }}
            ></span>
          </Link>
          
          <p className="mt-4 text-gray-300 text-xs flex flex-wrap justify-center items-center gap-1">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-200">
              <svg className="w-4 h-4 mr-1.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required
            </span>
            <span className="text-indigo-400 hidden sm:inline">•</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-200">
              <svg className="w-4 h-4 mr-1.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.332-.441-.616-.952-.86-1.444a9.963 9.963 0 01-.764-2.216 2.5 2.5 0 01-1.576 1.273zM13.929 17a1 1 0 01-.9.5H3.5a1 1 0 110-2h9.528a1 1 0 01.9.5 6 6 0 001.5 1.5z" clipRule="evenodd" />
              </svg>
              14-day free trial
            </span>
            <span className="text-indigo-400 hidden sm:inline">•</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-200">
              <svg className="w-4 h-4 mr-1.5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </span>
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent pointer-events-none" />
      
      {/* Simplified scanline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}
