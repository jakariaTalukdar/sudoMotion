'use client';

import { motion, useInView, AnimatePresence, useAnimation } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Reveal from '@/Components/Reveal';
import Link from 'next/link';

const features = [
  {
    title: 'AI Strategy & Consulting',
    description: 'Develop a comprehensive AI strategy tailored to your business needs with our expert guidance.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-500/10 to-pink-500/5',
    items: [
      'AI Readiness Assessment',
      'Use Case Identification',
      'Roadmap Development'
    ],
    delay: 0.1
  },
  {
    title: 'Natural Language Processing',
    description: 'Leverage advanced language models to understand and generate human-like text at scale.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4m-8-8l-4 4 4 4" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-gradient-to-br from-blue-500/10 to-cyan-400/5',
    items: [
      'Chatbots & Virtual Assistants',
      'Sentiment Analysis',
      'Text Classification'
    ],
    delay: 0.2
  },
  {
    title: 'Computer Vision',
    description: 'Enable machines to see, interpret and understand visual information with human-like precision.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-400',
    bgColor: 'bg-gradient-to-br from-green-500/10 to-emerald-400/5',
    items: [
      'Object Detection',
      'Facial Recognition',
      'Image Classification'
    ],
    delay: 0.3
  }
];

const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.6, 
          delay: feature.delay,
          ease: [0.16, 1, 0.3, 1] 
        }
      });
    }
  }, [isInView, controls, feature.delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="relative h-full group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated border gradient */}
      <motion.div 
        className="absolute inset-0 rounded-2xl p-[1px]"
        animate={{
          background: isHovered 
            ? `linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3), rgba(99, 102, 241, 0.3))`
            : 'rgba(255, 255, 255, 0.05)'
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-dark/80 to-dark/90 rounded-2xl" />
      </motion.div>

      <div className={`relative h-full p-6 rounded-2xl overflow-hidden`}>
        {/* Animated background gradient on hover */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${feature.color.replace('from-', 'from-').replace('to-', 'to-')} opacity-0`}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Animated glow effect */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(300px_circle_at_center,var(--tw-gradient-stops))] from-primary/20 to-transparent"
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.9
          }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative z-10 h-full flex flex-col">
          {/* Icon with gradient background */}
          <motion.div 
            className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${feature.bgColor} backdrop-blur-sm`}
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -10, 10, 0],
            }}
            transition={{ 
              duration: 0.6,
              rotate: { repeat: 1, duration: 0.6 }
            }}
          >
            <motion.div 
              className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}
              animate={{ 
                scale: isHovered ? [1, 1.2, 1] : 1,
                rotate: isHovered ? [0, 5, -5, 0] : 0
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {feature.icon}
            </motion.div>
          </motion.div>

          {/* Content */}
          <h3 className={`text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${feature.color}`}>
            {feature.title}
          </h3>
          
          <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
            {feature.description}
          </p>
          
          <ul className="space-y-3 mb-6">
            {feature.items.map((item, i) => (
              <motion.li 
                key={i} 
                className="flex items-center group text-sm text-gray-400 hover:text-white transition-colors"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i + 0.4 }}
              >
                <motion.span 
                  className="inline-flex items-center justify-center mr-3 text-primary group-hover:scale-125 transition-transform"
                  animate={isHovered ? { 
                    x: [0, 4, 0],
                    scale: [1, 1.2, 1]
                  } : { x: 0 }}
                  transition={{ 
                    repeat: isHovered ? 1 : 0, 
                    duration: 0.6, 
                    delay: 0.1 * i 
                  }}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Animated button */}
          <motion.div 
            className="mt-auto"
            animate={{
              opacity: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : 5
            }}
            transition={{ duration: 0.3 }}
          >
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-primary to-purple-600 text-white hover:opacity-90 transition-all">
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Animated grid pattern component
const GridPattern = ({ isInView }) => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="grid-fade" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        <rect width="100%" height="100%" fill="url(#grid-fade)" />
      </svg>
      
      {/* Animated floating elements */}
      {Array.from({ length: 15 }).map((_, i) => {
        const size = Math.random() * 6 + 2;
        const duration = Math.random() * 4 + 3;
        const delay = Math.random() * 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${x}%`,
              top: `${y}%`,
              boxShadow: `0 0 ${size * 2}px ${size * 0.5}px rgba(99, 102, 241, 0.3)`
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { 
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 40],
              y: [0, (Math.random() - 0.5) * 40],
            } : {}}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};

// Floating AI elements component
const FloatingElements = () => {
  const elements = [
    { 
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ), 
      size: 24, 
      delay: 0.1,
      duration: 15,
      x: '10%',
      y: '20%'
    },
    { 
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ), 
      size: 20, 
      delay: 0.3,
      duration: 20,
      x: '85%',
      y: '30%'
    },
    { 
      icon: (
        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ), 
      size: 18, 
      delay: 0.5,
      duration: 25,
      x: '15%',
      y: '70%'
    },
    { 
      icon: (
        <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 014 0v2h4V5a2 2 0 014 0v2a2 2 0 01-2 2h-4m-6 0a2 2 0 002 2h4a2 2 0 002-2m-6 0h6" />
        </svg>
      ), 
      size: 16, 
      delay: 0.7,
      duration: 18,
      x: '80%',
      y: '80%'
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          style={{
            width: `${el.size + 16}px`,
            height: `${el.size + 16}px`,
            left: el.x,
            top: el.y,
          }}
          animate={{
            y: [0, 20, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: {
              duration: el.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotate: {
              duration: el.duration * 2,
              repeat: Infinity,
              ease: 'linear',
            },
            delay: el.delay,
          }}
        >
          {el.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default function AISection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      });
    }
  }, [isInView, controls]);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-dark to-dark/95"
    >
      {/* Animated background elements */}
      <GridPattern isInView={isInView} />
      <FloatingElements />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)]" />
      
      {/* Floating orbs with enhanced animations */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-400/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/10 blur-2xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.05, 0.15, 0.05],
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.1 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border border-primary/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4m0 0V3h4m-4 0H1m4 0l4 4m-4-4l4-4m14 0v4m0-4h-4m4 0h-4m-4 0l4 4m-4-4l4-4m-4 20v-4m0 4h4m-4 0H5m0 0l4-4m-4 4l4 4m11-4l-4-4m4 4l-4 4m0-20l4 4m-4-4l4 4m-4 16l4-4m-4 4l4 4" />
              </svg>
              AI-Powered Solutions
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            Transform Your Business with{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-400">
                AI Innovation
              </span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-pink-400"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.3 }}
          >
            Leverage the power of artificial intelligence to automate processes, gain insights from data, and create intelligent applications with our cutting-edge AI solutions.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              index={index}
            />
          ))}
        </motion.div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.6 }}
        >
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center px-8 py-4 overflow-hidden text-white font-medium rounded-full bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              <span className="text-base font-medium">Explore AI Solutions</span>
              <motion.svg 
                className="w-5 h-5 ml-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: 'easeInOut'
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </span>
            
            {/* Particles */}
            {[1, 2, 3].map((i) => (
              <motion.span
                key={i}
                className="absolute rounded-full bg-white/20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [0, 1, 0],
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 50 - 25,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: i * 0.3,
                  ease: 'easeOut'
                }}
                style={{
                  width: '6px',
                  height: '6px',
                }}
              />
            ))}
          </Link>
          
          <p className="mt-6 text-sm text-gray-400">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
          
          {/* Decorative elements */}
          <div className="mt-12 flex justify-center space-x-4">
            {['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face'].map((tech, i) => (
              <motion.span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Animated gradient at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark to-transparent z-0">
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-full"
          animate={{
            background: [
              'linear-gradient(to top, rgba(17, 24, 39, 1) 0%, rgba(79, 70, 229, 0.1) 50%, transparent 100%)',
              'linear-gradient(to top, rgba(17, 24, 39, 1) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 100%)',
              'linear-gradient(to top, rgba(17, 24, 39, 1) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 100%)',
            ]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      </div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent"
            style={{ left: `${(i + 1) * 5}%` }}
            initial={{ opacity: 0, height: '0%' }}
            animate={{
              opacity: [0, 0.3, 0],
              height: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </section>
  );
}
