export const services = [
  {
    id: 9,
    slug: "web-application-development",
    title: "Web Application Development",
    description: "Custom web applications built with modern frameworks like Next.js and React, featuring complex business logic, real-time features, and seamless integrations.",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ color: '#333333' }}>
      <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
    </svg>,
    technologies: [
      { name: "Next.js", icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "React", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "Node.js", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-600"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "MongoDB", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "PostgreSQL", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "GraphQL", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-pink-600"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "TypeScript", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "Tailwind CSS", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-cyan-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> }
    ],
    features: [
      "Custom Web Applications",
      "Progressive Web Apps (PWAs)",
      "Real-time Features",
      "API Development & Integration",
      "Database Design",
      "Authentication & Authorization"
    ]
  },
  {
    id: 1,
    slug: "web-development",
    title: "Web Development",
    description: "Custom, responsive websites built with modern technologies like Next.js, React, and Tailwind CSS to ensure fast, scalable, and SEO-friendly web applications.",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>,
    technologies: [
      { name: "HTML5", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-600"><path d="M4.136 3.012h15.729l-1.43 16.15-6.451 1.838-6.439-1.836L4.136 3.012zM16.9 6.404l-9.8-.002.147 1.782 5.323.002-.07.9h-3.64l.218 2.41h3.207l-.105 1.18-1.76.48v.001l-1.74-.48-.113-1.25H6.9l.23 2.6 3.208.87 3.22-.87.37-4.16h-7.12l-.11-1.2h7.27l.13-1.18z" fill="currentColor"/></svg> },
      { name: "CSS3", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500"><path d="M4.192 3.143h15.615l-1.42 16.02-6.404 1.813-6.405-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.148 1.68 5.323.002-.07.9h-3.64l.218 2.41h3.207l-.105 1.18-1.76.48v.001l-1.74-.48-.113-1.25H6.9l.23 2.6 3.208.87 3.22-.87.37-4.16h-7.12l-.11-1.2h7.27l.13-1.18z" fill="currentColor"/></svg> },
      { name: "JavaScript", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-yellow-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "React", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "Next.js", icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "Tailwind CSS", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-cyan-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "Git", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-600"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "Vercel", icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 1L0 21.75h24L12 1zm0 4.5L19.53 19H4.47L12 5.5z" fill="currentColor"/></svg> }
    ],
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Web Application Development",
      "API Integration"
    ]
  },
  {
    id: 2,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Cross-platform mobile applications for iOS and Android using React Native, delivering native-like performance with a single codebase.",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ color: '#333333' }}>
      <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 19.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>,
    technologies: [
      { name: "React Native", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "Expo", icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M0 0v24h24V0H0zm20.8 20.8h-3.6v-3.6h3.6v3.6zm0-5.4h-3.6v-3.6h3.6v3.6zm0-5.4h-3.6V6.4h3.6v3.6z" fill="currentColor"/></svg> },
      { name: "Redux", icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-5.5 0-10-4.5-10-10S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" fill="#764ABC"/><path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill="#764ABC"/></svg> },
      { name: "Firebase", icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M3.89 15.67L5.5 12.5 7 15.67l-1.5 1.5z" fill="#FFCA28"/><path d="M5.5 12.5l-1.61-3.11c-.23-.45-.15-.99.2-1.36l7.91-7.9c.63-.63 1.71-.19 1.71.7v.2l-1.5 9.5-7.7-1.03z" fill="#FFA000"/><path d="M7 15.67l-1.5 1.5c-.35.35-.27.89.17 1.12l.33.17 1.5-1.5-1.5-1.5z" fill="#F57C00"/><path d="M18.5 12.5l-1.5-2.5-1.5 2.5 1.5 1.5z" fill="#FFCA28"/><path d="M17 10l1.5-2.5c.23-.39.15-.89-.2-1.26l-7.91-7.9c-.63-.63-1.71-.19-1.71.7v.2l7.32 10.76z" fill="#FFA000"/><path d="M17 10l-7.32-10.76c-.23-.35-.62-.5-.99-.4l-2.19.55 10.01 10.01 1.5-2.5z" fill="#FFCA28"/><path d="M17 15.67l-1.5 1.5c-.35.35-.27.89.17 1.12l.33.17 1.5-1.5-1.5-1.5z" fill="#F57C00"/></svg> },
      { name: "TypeScript", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "Jest", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-red-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "App Store", icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.15 2.35.91 3.15.91.79 0 2.03-.95 3.38-.84 1.4.12 2.33.74 3.02 1.45-2.5 1.5-1.84 5.3.33 6.35-.99 1.1-1.78 2.17-2.88 2.01zM12 7.25c0-1.5 1.28-2.75 2.8-2.75.03 1.17-1.3 2.25-2.8 2.25z" fill="currentColor"/></svg> },
      { name: "Play Store", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-500"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm.84 19.08L14.5 12 4.448 3.106v17.788z" fill="currentColor"/><path d="M19.4 11.5L15.5 9.25l-1.1-1.5-1.6 1.6 3.2 3.2 3.4-1.05z" fill="currentColor"/></svg> }
    ],
    features: [
      "iOS & Android Apps",
      "UI/UX Design",
      "App Maintenance",
      "API Integration"
    ]
  },
  {
    id: 3,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with the user in mind, focusing on usability, accessibility, and engagement.",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor" />
    </svg>,
    technologies: [
      { name: "Figma", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-purple-600"><path d="M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2 2H4v4h6V4zm0 6H4v4h6v-4zm0 6H4v4a2 2 0 0 0 2 2h4v-6zm2 0v6h4a2 2 0 0 0 2-2v-4h-6zm6-6v-4h-6v4h6zm-6-6V4h4a2 2 0 0 1 2 2v4h-6z" fill="currentColor"/></svg> },
      { name: "Sketch", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "Adobe XD", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-pink-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "InVision", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "Framer", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "Adobe CC", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-red-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/></svg> },
      { name: "User Testing", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/></svg> },
      { name: "Prototyping", icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-purple-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/></svg> }
    ],
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "UI Design",
      "Usability Testing"
    ]
  },
  {
    id: 4,
    slug: "video-editing",
    title: "Video Editing",
    description: "Professional video editing services that bring your vision to life with seamless cuts, transitions, and effects.",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ color: '#333333' }}>
      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM15 16H5V8h10v8zm-6-1h2v-2h2v-2h-2V9H9v2H7v2h2z"/>
    </svg>,
    features: [
      "Professional Video Editing",
      "Color Grading",
      "Audio Enhancement",
      "Motion Graphics Integration"
    ]
  },
  {
    id: 5,
    slug: "2d-motion-graphics",
    title: "2D Motion Graphics",
    description: "Engaging 2D animations and motion graphics that capture attention and effectively communicate your message.",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
      <line x1="7" y1="2" x2="7" y2="22"></line>
      <line x1="17" y1="2" x2="17" y2="22"></line>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <line x1="2" y1="7" x2="7" y2="7"></line>
      <line x1="2" y1="17" x2="7" y2="17"></line>
      <line x1="17" y1="17" x2="22" y2="17"></line>
      <line x1="17" y1="7" x2="22" y2="7"></line>
    </svg>,
    features: [
      "Animated Explainers",
      "Logo Animations",
      "Title Sequences",
      "Character Animation"
    ]
  },
  {
    id: 6,
    slug: "graphic-design",
    title: "Graphic Design",
    description: "Visually stunning designs that strengthen your brand identity across all digital and print media.",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>,
    features: [
      "Logo & Branding",
      "Print Materials",
      "Social Media Graphics",
      "Marketing Collaterals"
    ]
  },
  {
    id: 7,
    slug: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    description: "Data-driven digital marketing strategies to increase your online visibility, drive traffic, and generate leads.",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>,
    features: [
      "Search Engine Optimization",
      "Content Strategy",
      "Social Media Marketing",
      "Analytics & Reporting"
    ]
  },
  {
    id: 8,
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services to help your business grow without worrying about server management.",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>,
    features: [
      "Cloud Migration",
      "Serverless Architecture",
      "Cloud Security",
      "DevOps Automation"
    ]
  },
  {
    id: 9,
    slug: "maintenance-support",
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance services to keep your digital assets running smoothly and securely.",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>,
    features: [
      "Regular Updates",
      "Security Patches",
      "Performance Optimization",
      "24/7 Monitoring"
    ]
  }
];
