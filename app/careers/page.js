import React from 'react';
import Reveal from '@/Components/Reveal';
import Link from 'next/link';

const openPositions = [
  {
    id: 1,
    slug: 'senior-frontend-developer',
    title: 'Senior Frontend Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    experience: '5+ years',
    description: 'We are looking for an experienced Frontend Developer to join our team and help us build amazing user experiences.',
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
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Linux'],
    postedDate: '2023-11-01',
    applicationDeadline: '2023-12-25'
  },
];

const benefits = [
  {
    title: 'Competitive Salary',
    description: 'We offer industry-competitive salaries and regular performance reviews.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Flexible Hours',
    description: 'Work when you\'re most productive with our flexible working hours policy.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Remote Work',
    description: 'Work from anywhere in the world with our fully remote setup.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    title: 'Learning Budget',
    description: 'Annual budget for courses, books, and conferences to support your growth.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: 'Health Benefits',
    description: 'Comprehensive health insurance for you and your family.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: 'Team Retreats',
    description: 'Annual company retreats to connect with the team in person.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  }
];

const CareersPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-green to-dark pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <div className="flex items-center justify-center gap-x-1 mb-8">
                <div className='w-20 h-1 rounded-lg bg-primary'></div>
                <div className='w-3 h-1 rounded-lg bg-primary'></div>
                <div className='w-7 h-1 rounded-lg bg-primary'></div>
              </div>
              <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg">
                We're building the future of digital experiences. Join us in creating innovative solutions that make a difference.
              </p>
              <div className="mt-8">
                <a href="#open-positions" className="btn px-8 py-3 text-lg font-medium">
                  View Open Positions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-dark">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why Join SudoMotion?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                At SudoMotion, we believe in creating an environment where talented individuals can do their best work.
              </p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="bg-[#ffffff08] p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors h-full">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-dark">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Check out our current job openings and join our growing team of talented professionals.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <Reveal key={position.id}>
                <div className="bg-[#ffffff08] rounded-xl border border-white/5 p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                      <div className="flex items-center mt-2 space-x-4">
                        <span className="text-gray-300 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 18h.01" />
                          </svg>
                          {position.type}
                        </span>
                        <span className="text-gray-300 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {position.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link 
                        href={`/careers/${position.slug}`}
                        className="btn-outline px-4 py-2 inline-flex items-center justify-center text-sm"
                      >
                        View Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                      <Link 
                        href={`/careers/${position.slug}#apply-now`}
                        className="btn px-4 py-2 inline-flex items-center justify-center text-sm"
                      >
                        Apply Now
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300">{position.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {position.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-[#ffffff08] text-sm rounded-full text-gray-300 border border-white/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center mt-16">
              <h3 className="text-xl font-semibold text-white mb-4">Don't see a role that fits?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. Send us your resume and tell us how you can contribute.
              </p>
              <a 
                href="mailto:careers@sudomotion.com" 
                className="btn px-8 py-3 inline-flex items-center"
              >
                Send Us Your Resume
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16 bg-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-white/5">
            <Reveal>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-gray-300 mb-8 text-lg">
                    At SudoMotion, we foster a culture of innovation, collaboration, and continuous learning. We believe in working hard, staying curious, and having fun while building amazing products.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="p-6 bg-[#ffffff05] rounded-xl">
                      <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
                      <p className="text-gray-300">We believe in the power of teamwork and open communication to solve complex problems.</p>
                    </div>
                    <div className="p-6 bg-[#ffffff05] rounded-xl">
                      <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                      <p className="text-gray-300">We encourage creative thinking and aren't afraid to challenge the status quo.</p>
                    </div>
                    <div className="p-6 bg-[#ffffff05] rounded-xl">
                      <h3 className="text-xl font-semibold text-white mb-3">Growth</h3>
                      <p className="text-gray-300">We're committed to helping our team members grow both personally and professionally.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
