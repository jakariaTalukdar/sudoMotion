"use client";
import React, { useEffect, useRef } from 'react';

const HeroComponent = () => {
  // Refs for animations
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  // Initialize animations and effects
  useEffect(() => {
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        25% { transform: translateY(-10px) rotate(2deg); }
        50% { transform: translateY(0) rotate(0deg); }
        75% { transform: translateY(10px) rotate(-2deg); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      @keyframes glitch {
        0% { 
          text-shadow: 
            0.05em 0 0 rgba(0, 255, 157, 0.7), 
            -0.05em -0.025em 0 rgba(0, 247, 255, 0.7);
          transform: translate(0);
        }
        20% { 
          text-shadow: 
            0.05em 0 0 rgba(0, 255, 157, 0.7), 
            -0.05em -0.025em 0 rgba(0, 247, 255, 0.7);
          transform: translate(-0.05em, 0.025em);
        }
        21% { 
          text-shadow: 
            -0.05em -0.025em 0 rgba(0, 255, 157, 0.7), 
            0.025em 0.025em 0 rgba(0, 247, 255, 0.7);
          transform: translate(0.025em, -0.025em);
        }
        40% { 
          text-shadow: 
            -0.05em -0.025em 0 rgba(0, 255, 157, 0.7), 
            0.025em 0.025em 0 rgba(0, 247, 255, 0.7);
          transform: translate(0.025em, 0.025em);
        }
        60% { 
          text-shadow: 
            0.025em 0.05em 0 rgba(0, 255, 157, 0.7), 
            0.05em 0 0 rgba(0, 247, 255, 0.7);
          transform: translate(-0.025em, -0.025em);
        }
        80% { 
          text-shadow: 
            0.025em 0.05em 0 rgba(0, 255, 157, 0.7), 
            0.05em 0 0 rgba(0, 247, 255, 0.7);
          transform: translate(-0.05em, 0.025em);
        }
        100% { 
          text-shadow: 
            -0.025em 0 0 rgba(0, 255, 157, 0.7), 
            -0.025em -0.025em 0 rgba(0, 247, 255, 0.7);
          transform: translate(0);
        }
      }
      .glow-text {
        text-shadow: 
          0 0 5px rgba(0, 255, 157, 0.3), 
          0 0 10px rgba(0, 255, 157, 0.2), 
          0 0 20px rgba(0, 255, 157, 0.1);
        transition: all 0.3s ease;
      }
      .glow-text:hover {
        text-shadow: 
          0 0 10px rgba(0, 255, 157, 0.5), 
          0 0 20px rgba(0, 255, 157, 0.3), 
          0 0 30px rgba(0, 255, 157, 0.2);
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
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black to-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-20"
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(0, 255, 157, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 157, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.3
      }} />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        <div className={`transition-all duration-1000 ${isHovered ? 'scale-105' : 'scale-100'}`}>
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight glow-text"
            style={{
              background: 'linear-gradient(90deg, #00ff9d, #00f7ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'glitch 8s infinite',
              textShadow: '0 0 20px rgba(0, 255, 157, 0.3)'
            }}
          >
            BOLD IDEAS
          </h1>
          
          <div className={`h-1 w-20 bg-gradient-to-r from-[#00ff9d] to-[#00f7ff] mx-auto mb-8 ${isHovered ? 'scale-125' : 'scale-100'} transition-transform duration-500`}></div>
          
          <h2 
            className="text-4xl md:text-6xl font-light text-white mb-12 glow-text"
            style={{
              opacity: 0.9,
              animation: 'float 6s ease-in-out infinite',
              textShadow: '0 0 15px rgba(0, 255, 157, 0.2)'
            }}
          >
            Seamless Execution
          </h2>
          
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-transparent border-2 border-[#00ff9d] text-[#00ff9d] font-mono text-sm tracking-wider hover:bg-[#00ff9d] hover:text-black transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-transparent text-white font-mono text-sm tracking-wider hover:border-[#00f7ff] hover:text-[#00f7ff] transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#00ff9d] rounded-full mix-blend-overlay opacity-5 animate-float" style={{ animationDuration: '15s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#00f7ff] rounded-full mix-blend-overlay opacity-5 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-[#00ff9d] rounded-full mix-blend-overlay opacity-5 animate-float" style={{ animationDuration: '25s', animationDelay: '1s' }}></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
        <div className="w-px h-16 bg-gradient-to-b from-[#00ff9d] to-transparent"></div>
        <div className="mt-2 text-xs text-[#00ff9d] font-mono tracking-widest">SCROLL</div>
      </div>
    </div>
  );
};

export default HeroComponent;
