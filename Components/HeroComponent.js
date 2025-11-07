"use client";
import React, { useEffect, useRef } from 'react';

const HeroComponent = () => {
  // Refs for animations
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  // Initialize animations and effects
  useEffect(() => {
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scanline {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.7; }
      }
      .cyber-text {
        text-shadow: 0 0 5px #00ff9d, 0 0 10px #00ff9d, 0 0 20px #00ff9d;
      }
      @keyframes flicker {
        0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
        20%, 24%, 55% { opacity: 0.5; }
      }
      @keyframes glitch {
        0% { text-shadow: 0.05em 0 0 #00ff9d, -0.05em -0.025em 0 #00f7ff; }
        14% { text-shadow: 0.05em 0 0 #00ff9d, -0.05em -0.025em 0 #00f7ff; }
        15% { text-shadow: -0.05em -0.025em 0 #00ff9d, 0.025em 0.025em 0 #00f7ff; }
        49% { text-shadow: -0.05em -0.025em 0 #00ff9d, 0.025em 0.025em 0 #00f7ff; }
        50% { text-shadow: 0.025em 0.05em 0 #00ff9d, 0.05em 0 0 #00f7ff; }
        99% { text-shadow: 0.025em 0.05em 0 #00ff9d, 0.05em 0 0 #00f7ff; }
        100% { text-shadow: -0.025em 0 0 #00ff9d, -0.025em -0.025em 0 #00f7ff; }
      }
      .cyber-border {
        position: relative;
        border: 2px solid #00ff9d;
        box-shadow: 0 0 10px #00ff9d, inset 0 0 10px #00ff9d;
      }
      .cyber-border::before, .cyber-border::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border: 2px solid #00ff9d;
        transition: all 0.5s ease;
      }
      .cyber-border::before {
        top: -10px;
        left: -10px;
        border-right: 0;
        border-bottom: 0;
      }
      .cyber-border::after {
        bottom: -10px;
        right: -10px;
        border-left: 0;
        border-top: 0;
      }
      .cyber-button {
        position: relative;
        overflow: hidden;
        z-index: 1;
        transition: all 0.3s ease;
      }
      .cyber-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0, 255, 157, 0.4), transparent);
        transition: 0.5s;
      }
      .cyber-button:hover::before {
        left: 100%;
      }
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  // Handle mouse move for particle effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Initialize canvas and particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles
    const initParticles = () => {
      const particlesArray = [];
      const particleCount = Math.floor(window.innerWidth / 20);
      
      for (let i = 0; i < particleCount; i++) {
        particlesArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          color: `rgba(0, 255, 157, ${Math.random() * 0.5 + 0.1})`
        });
      }
      return particlesArray;
    };

    particles.current = initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current.forEach(particle => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.current = initParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-70"
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay" />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-10 pointer-events-none">
        <div 
          className="absolute inset-0 bg-repeat-y" 
          style={{
            backgroundImage: 'linear-gradient(to bottom, transparent 50%, rgba(0, 255, 157, 0.05) 50%)',
            backgroundSize: '100% 4px',
            animation: 'scanline 8s linear infinite'
          }} 
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left content - Text */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <div className="inline-block px-3 py-0.5 mb-4 bg-black border border-[#00ff9d] text-[#00ff9d] text-[10px] font-mono tracking-widest">
              DIGITAL INNOVATION STUDIO
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" style={{ animation: 'glitch 5s infinite' }}>
              <span className="block cyber-text">BOLD IDEAS,</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-[#00f7ff]">
                SEAMLESS
              </span>
              <span className="block cyber-text">EXECUTION</span>
            </h1>
            
            <p className="text-sm text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0 font-mono">
              // TRANSFORMING VISION INTO REALITY THROUGH TECHNOLOGY
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="cyber-button px-6 py-3 text-sm bg-[#00ff9d] text-black font-bold font-mono tracking-wider relative">
                <span className="relative z-10 flex items-center gap-1">
                  INITIATE PROJECT
                  <svg className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </button>
              
              <button className="cyber-border px-6 py-3 text-sm bg-black text-[#00ff9d] font-mono tracking-wider relative group">
                <span className="relative z-10">
                  EXPLORE WORK
                </span>
              </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
              {[
                { name: 'WEB', icon: '01' },
                { name: 'MOBILE', icon: '02' },
                { name: 'AI/ML', icon: '03' },
                { name: 'CLOUD', icon: '04' }
              ].map((tech) => (
                <div 
                  key={tech.name}
                  className="p-3 bg-black bg-opacity-60 border border-[#00ff9d] border-opacity-20 hover:border-opacity-100 transition-all duration-300 group"
                >
                  <div className="text-xl font-mono text-[#00ff9d]">{tech.icon}</div>
                  <div className="text-[10px] font-mono text-white opacity-70 group-hover:opacity-100">{tech.name}</div>
                  <div className="h-0.5 w-0 bg-[#00ff9d] mt-1.5 transition-all duration-300 group-hover:w-full"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right content - Terminal */}
          <div className="lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="relative z-10 w-full max-w-xl mx-auto p-0.5 bg-gradient-to-r from-[#00ff9d] to-[#00f7ff] rounded shadow-xl">
              <div className="bg-black p-4 rounded">
                <div className="flex gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                
                <div className="font-mono text-green-400 text-xs">
                  <div className="mb-1">$ <span className="text-white">sudo init project</span></div>
                  <div className="mb-1">&gt; Initializing project...</div>
                  <div className="mb-1">&gt; Loading components...</div>
                  <div className="mb-1">&gt; Connecting to database...</div>
                  <div className="text-[#00ff9d] mb-1">&gt; Ready on http://localhost:3000</div>
                  <div className="flex items-center">
                    <span>$</span>
                    <span className="ml-1 h-3 w-1.5 bg-green-400 inline-block animate-pulse"></span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements - made smaller */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#00FF80] rounded-full mix-blend-overlay opacity-10 animate-float"></div>
              <div 
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-emerald-400 rounded-full mix-blend-overlay opacity-10 animate-float" 
                style={{ animationDelay: '2s' }}
              ></div>
              
              {/* Glow effect - made smaller */}
              <div className="absolute -z-10 top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#00FF80] to-emerald-500 rounded-full filter blur-2xl opacity-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Corner decorations - made smaller */}
      <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#00ff9d] opacity-50"></div>
      <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#00ff9d] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#00ff9d] opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#00ff9d] opacity-50"></div>
      
      {/* Scroll indicator - made smaller */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-10 bg-gradient-to-b from-[#00ff9d] to-transparent"></div>
        <div className="mt-1 text-[10px] text-[#00ff9d] font-mono tracking-widest">SCROLL</div>
      </div>
    </div>
  );
};

export default HeroComponent;
