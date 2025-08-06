export const technologies = [
  {
    id: 1,
    type: 'language',
    title: 'HTML',
    description: 'We dive deep to understand your goals and outline a roadmap tailored to your success.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3z" /><path d="M8 3v18" /><path d="M16 3v18" />
      </svg>
    )
  },
  {
    id: 2,
    type: 'language',
    title: 'CSS',
    description: 'Style your apps beautifully with precision and consistency.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" /><path d="M4 10h16" />
      </svg>
    )
  },
  {
    id: 3,
    type: 'framework',
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework to build modern user interfaces faster.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12a5 5 0 0110 0c0 1.5-.5 3-2 4s-2 1-4 1a5 5 0 01-4-5z" />
      </svg>
    )
  },
  {
    id: 4,
    type: 'framework',
    title: 'Alpine.js',
    description: 'A rugged, minimal framework for composing JavaScript behavior.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12l6-6 6 6-6 6-6-6z" />
      </svg>
    )
  },
  {
    id: 5,
    type: 'library',
    title: 'React.js',
    description: 'A declarative JavaScript library for building modern UIs.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(120 12 12)" />
      </svg>
    )
  },
  {
    id: 6,
    type: 'framework',
    title: 'Next.js',
    description: 'React-based framework with hybrid static & server rendering.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4l16 16" /><path d="M12 2a10 10 0 1 0 10 10" />
      </svg>
    )
  },
  {
    id: 7,
    type: 'runtime',
    title: 'Node.js',
    description: 'Event-driven JavaScript runtime for scalable backend apps.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l10 6v8l-10 6-10-6V8z" />
      </svg>
    )
  },
  {
    id: 8,
    type: 'framework',
    title: 'Express.js',
    description: 'Minimal and flexible Node.js web application framework.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )
  },
  {
    id: 9,
    type: 'database',
    title: 'MongoDB',
    description: 'A flexible NoSQL database for scalable applications.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M160 96C124.7 96 96 124.7 96 160L96 224C96 259.3 124.7 288 160 288L480 288C515.3 288 544 259.3 544 224L544 160C544 124.7 515.3 96 480 96L160 96zM376 168C389.3 168 400 178.7 400 192C400 205.3 389.3 216 376 216C362.7 216 352 205.3 352 192C352 178.7 362.7 168 376 168zM432 192C432 178.7 442.7 168 456 168C469.3 168 480 178.7 480 192C480 205.3 469.3 216 456 216C442.7 216 432 205.3 432 192zM160 352C124.7 352 96 380.7 96 416L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 416C544 380.7 515.3 352 480 352L160 352zM376 424C389.3 424 400 434.7 400 448C400 461.3 389.3 472 376 472C362.7 472 352 461.3 352 448C352 434.7 362.7 424 376 424zM432 448C432 434.7 442.7 424 456 424C469.3 424 480 434.7 480 448C480 461.3 469.3 472 456 472C442.7 472 432 461.3 432 448z" />
      </svg>

    )
  },
  {
    id: 10,
    type: 'language',
    title: 'PHP',
    description: 'A popular general-purpose scripting language for web development.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" /><path d="M8 4v16" />
      </svg>
    )
  },
  {
    id: 11,
    type: 'framework',
    title: 'Laravel',
    description: 'Elegant PHP framework for modern web applications.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4l8 4 8-4-8 16z" />
      </svg>
    )
  },
  {
    id: 12,
    type: 'database',
    title: 'MySQL',
    description: 'Reliable, fast, and powerful open-source relational database system.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M6 9v6m6-6v6m6-6v6" />
      </svg>
    )
  },
  {
    id: 13,
    type: 'framework',
    title: 'Livewire',
    description: 'Full-stack framework for Laravel that makes building dynamic interfaces simple.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20m-6-6l6 6 6-6" />
      </svg>
    )
  },
  {
    id: 14,
    type: 'os',
    title: 'Ubuntu',
    description: 'A secure and open-source operating system for servers and development.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M501.2 139C501.2 118.9 493.2 99.7 479 85.5C464.8 71.3 445.6 63.3 425.5 63.3C405.4 63.3 386.2 71.3 372 85.5C357.8 99.7 349.8 118.9 349.8 139C349.8 159.1 357.8 178.3 371.9 192.5C386 206.7 405.3 214.6 425.4 214.6C445.5 214.6 464.7 206.6 478.9 192.5C493.1 178.4 501 159.1 501 139L501.1 139zM186.2 304.7C186.2 262.9 152.4 229.1 110.6 229.1C68.8 229.1 35 262.9 35 304.7C35 346.5 68.8 380.3 110.6 380.3C152.4 380.3 186.2 346.5 186.2 304.7zM89 410C107.6 456.9 140 497 182 525.1C224 553.2 273.5 567.7 324 566.8C309.3 548.2 301.1 525.3 300.8 501.6C294 500.7 287.5 499.5 281.3 498.2C254.5 492.5 229.4 480.9 207.7 464.2C186 447.5 168.4 426.1 156 401.7C135.1 411.6 111.5 414.5 88.9 409.9L89 410zM484.1 499.8C484.1 458 450.3 424.2 408.5 424.2C366.7 424.2 332.9 458 332.9 499.8C332.9 541.6 366.7 575.4 408.5 575.4C450.3 575.4 484.1 541.6 484.1 499.8zM476 415.6C494.5 430.4 507.6 450.8 513.2 473.8C546.5 432.5 565.8 381.6 568 328.6C570.2 275.6 555.5 223.2 525.8 179.2C517.2 200.7 501.8 218.8 482 230.8C497.4 259.4 504.9 291.6 503.9 324C502.9 356.4 493.2 388 475.9 415.6L476 415.6zM133.1 199.4C145.5 202.1 157.4 206.9 168.2 213.7C184.8 189.5 207.1 169.6 233 155.7C258.9 141.8 287.8 134.4 317.2 134C317.4 128.1 318.1 122.1 319.2 116.3C322.8 99.6 330.3 84 341 70.8C293.3 67 245.6 76.8 203.4 99.3C161.2 121.8 126.3 155.7 102.8 197.4C105.5 197.2 108.1 197.1 110.8 197.1C118.3 197.1 125.8 197.9 133.2 199.4L133.1 199.4z"/></svg>
    )
  }
];
