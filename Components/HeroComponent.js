"use client";
import React, { useEffect, useRef, useState } from 'react';

const HeroComponent = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      mouseRef.current = { x, y };
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Premium gradient orb animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const orbs = Array.from({ length: 3 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 200 + Math.random() * 300,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      hue: i === 0 ? 160 : i === 1 ? 180 : 140,
    }));

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 23, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      orbs.forEach((orb, index) => {
        orb.x += orb.speedX;
        orb.y += orb.speedY;

        if (orb.x < -orb.radius || orb.x > canvas.width + orb.radius) orb.speedX *= -1;
        if (orb.y < -orb.radius || orb.y > canvas.height + orb.radius) orb.speedY *= -1;

        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius
        );
        
        gradient.addColorStop(0, `hsla(${orb.hue}, 100%, 60%, 0.15)`);
        gradient.addColorStop(0.5, `hsla(${orb.hue}, 100%, 50%, 0.08)`);
        gradient.addColorStop(1, `hsla(${orb.hue}, 100%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
      orbs.forEach(orb => {
        orb.x = Math.min(orb.x, canvas.width);
        orb.y = Math.min(orb.y, canvas.height);
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-content {
          animation: fadeInUp 1s ease-out;
        }

        .hero-subtitle {
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .hero-buttons {
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .gradient-text {
          background: linear-gradient(
            135deg,
            #00ff9d 0%,
            #00f7ff 25%,
            #a855f7 50%,
            #00f7ff 75%,
            #00ff9d 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 8s ease infinite;
        }

        .shimmer-button {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 157, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .luxury-border {
          position: relative;
        }

        .luxury-border::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(0, 255, 157, 0.5),
            rgba(0, 247, 255, 0.3),
            rgba(168, 85, 247, 0.3),
            rgba(0, 247, 255, 0.3),
            rgba(0, 255, 157, 0.5)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .luxury-border:hover::before {
          opacity: 1;
        }

        .floating-orb {
          animation: float 20s ease-in-out infinite;
        }

        .rotating-ring {
          animation: rotate 30s linear infinite;
        }

        .pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>

      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at top, #0a0a17 0%, #000000 50%, #0a0a17 100%)',
        }}
      >
        {/* Animated gradient orbs canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full"
          style={{ mixBlendMode: 'screen' }}
        />

        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />

        {/* Premium floating orbs */}
        <div 
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl floating-orb pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 157, 0.2) 0%, transparent 70%)',
            animationDelay: '0s',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div 
          className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full blur-3xl floating-orb pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(0, 247, 255, 0.15) 0%, transparent 70%)',
            animationDelay: '2s',
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
          }}
        />
        <div 
          className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full blur-3xl floating-orb pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
          }}
        />

        {/* Rotating decorative rings */}
        <div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rotating-ring opacity-10"
          style={{
            border: '2px solid rgba(0, 255, 157, 0.3)',
            borderRadius: '50%',
            borderStyle: 'dashed',
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-48 h-48 rotating-ring opacity-10"
          style={{
            border: '2px solid rgba(0, 247, 255, 0.3)',
            borderRadius: '50%',
            borderStyle: 'dashed',
            animationDirection: 'reverse',
            animationDuration: '25s',
          }}
        />

        {/* Main content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className={`hero-content ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 glass-effect rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#00ff9d] pulse-glow"></div>
              <span className="text-xs font-light tracking-[0.2em] text-white/80 uppercase">
                Premium Experience
              </span>
            </div>

            {/* Main heading */}
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-6 leading-[1.1] tracking-tight"
            >
              <span className="gradient-text block mb-2">BOLD IDEAS</span>
              <span 
                className="text-white/90 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wider"
                style={{
                  textShadow: '0 0 40px rgba(0, 255, 157, 0.2)',
                  transform: `translateY(${mousePosition.y * 0.01}px)`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                Seamless Execution
              </span>
            </h1>

            {/* Elegant divider */}
            <div className="hero-subtitle flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] pulse-glow"></div>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#00f7ff] to-transparent"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#00f7ff] pulse-glow"></div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent"></div>
            </div>

            {/* Description */}
            <p 
              className="hero-subtitle text-lg sm:text-xl text-white/60 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{
                transform: `translateY(${mousePosition.y * 0.005}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              Crafting exceptional digital experiences with precision, innovation, and unparalleled elegance
            </p>

            {/* Premium CTA buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row justify-center items-center gap-4">
              <button 
                className="group relative px-8 py-4 bg-gradient-to-r from-[#00ff9d] to-[#00f7ff] text-black font-medium text-sm tracking-wider uppercase rounded-full overflow-hidden luxury-border shimmer-button transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,157,0.5)]"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 255, 157, 0.3)',
                }}
              >
                <span className="relative z-10 text-gray-200 hover:text-gray-800">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f7ff] to-[#00ff9d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button 
                className="group px-8 py-4 glass-effect text-white font-medium text-sm tracking-wider uppercase rounded-full luxury-border transition-all duration-300 hover:scale-105 hover:bg-white/5"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Elegant scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
          style={{
            transform: `translateX(-50%) translateY(${mousePosition.y * 0.01}px)`,
            transition: 'opacity 0.3s ease, transform 0.1s ease-out',
          }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-[#00ff9d] via-[#00f7ff] to-transparent"></div>
          <div className="w-1 h-1 rounded-full bg-[#00ff9d] pulse-glow"></div>
          <span className="text-[10px] text-white/50 font-light tracking-[0.3em] uppercase mt-2">Scroll</span>
        </div>

        {/* Subtle vignette effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
          }}
        />
      </div>
    </>
  );
};

export default HeroComponent;
