export const jobs = [
  {
    id: 1,
    slug: 'senior-frontend-developer',
    title: 'Senior Frontend Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    experience: '5+ years',
    description: 'We are looking for an experienced Frontend Developer to join our team and help us build amazing user experiences.',
    responsibilities: [
      'Develop new user-facing features using React.js and Next.js',
      'Build reusable components and front-end libraries for future use',
      'Translate designs and wireframes into high-quality code',
      'Optimize components for maximum performance across various web-capable devices and browsers',
      'Collaborate with product team and designers to deliver the best user experience'
    ],
    requirements: [
      '5+ years of experience with modern JavaScript frameworks (React, Vue, or Angular)',
      'Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model',
      'Thorough understanding of React.js and its core principles',
      'Experience with popular React workflows (such as Redux or Context API)',
      'Familiarity with newer specifications of ECMAScript',
      'Experience with data structure libraries (e.g., Immutable.js)'
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
    postedDate: '2023-11-01',
    applicationDeadline: '2023-12-31'
  },
  {
    id: 2,
    slug: 'ui-ux-designer',
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Design',
    experience: '3+ years',
    description: 'Join our design team to create beautiful and intuitive user interfaces for our clients.',
    responsibilities: [
      'Create user-centered designs by considering market analysis, customer feedback, and usability findings',
      'Design UI elements and tools such as navigation menus, search boxes, tabs, and widgets',
      'Develop UI mockups and prototypes that clearly illustrate how sites function and look',
      'Create original graphic designs (e.g., images, sketches, and tables)',
      'Identify and troubleshoot UX problems (e.g., responsiveness)'
    ],
    requirements: [
      'Proven work experience as a UI/UX Designer or similar role',
      'Portfolio of design projects',
      'Knowledge of wireframe tools (e.g., Figma, Sketch, or Adobe XD)',
      'Team spirit; strong communication skills to collaborate with various stakeholders',
      'Good time-management skills',
      'BSc in Design, Computer Science or relevant field'
    ],
    skills: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Wireframing'],
    postedDate: '2023-11-01',
    applicationDeadline: '2023-12-15'
  },
  {
    id: 3,
    slug: 'backend-developer',
    title: 'Backend Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    experience: '4+ years',
    description: 'We need a skilled Backend Developer to build and maintain our server-side applications.',
    responsibilities: [
      'Integration of user-facing elements developed by front-end developers with server-side logic',
      'Building reusable code and libraries for future use',
      'Optimization of the application for maximum speed and scalability',
      'Implementation of security and data protection',
      'Design and implementation of data storage solutions'
    ],
    requirements: [
      'Proficient knowledge of a back-end programming language (Node.js, Python, Java, etc.)',
      'Understanding of databases (e.g., MySQL, MongoDB, PostgreSQL)',
      'Knowledge of RESTful API design and implementation',
      'Understanding of code versioning tools, such as Git',
      'Understanding of accessibility and security compliance'
    ],
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Docker'],
    postedDate: '2023-11-01',
    applicationDeadline: '2023-12-20'
  },
  {
    id: 4,
    slug: 'devops-engineer',
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    experience: '4+ years',
    description: 'Help us build and maintain our cloud infrastructure and CI/CD pipelines.',
    responsibilities: [
      'Building and setting up new development tools and infrastructure',
      'Working on ways to automate and improve development and release processes',
      'Testing and examining code written by others and analyzing results',
      'Ensuring that systems are safe and secure against cybersecurity threats',
      'Identifying technical problems and developing software updates and fixes'
    ],
    requirements: [
      'Experience with Linux administration',
      'Experience with cloud services (AWS, GCP, or Azure)',
      'Proficiency with Git and Git workflows',
      'Experience with containerization and orchestration (Docker, Kubernetes)',
      'Knowledge of CI/CD tools (Jenkins, GitHub Actions, GitLab CI, etc.)',
      'Strong problem-solving skills and attention to detail'
    ],
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Linux'],
    postedDate: '2023-11-01',
    applicationDeadline: '2023-12-25'
  }
];

// Helper function to get job by slug
export const getJobBySlug = (slug) => {
  return jobs.find(job => job.slug === slug) || null;
};

// Format date for display
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
