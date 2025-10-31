import React from 'react';
import Reveal from '@/Components/Reveal';
import Link from 'next/link';
import { getJobBySlug, formatDate } from '../careerData';

// Generate static paths for all job posts
export async function generateStaticParams() {
  const { jobs } = await import('../careerData');
  return jobs.map(job => ({
    slug: job.slug
  }));
}

export async function generateMetadata({ params }) {
  const job = getJobBySlug(params.slug);
  
  if (!job) {
    return {
      title: 'Job Not Found - SudoMotion',
      description: 'The requested job could not be found.'
    };
  }

  return {
    title: `${job.title} - Careers at SudoMotion`,
    description: job.description.substring(0, 160) + '...',
    openGraph: {
      title: `${job.title} - Careers at SudoMotion`,
      description: job.description.substring(0, 160) + '...',
      type: 'website',
      url: `https://sudomotion.com/careers/${job.slug}`
    }
  };
}

const JobDetailsPage = ({ params }) => {
  const job = getJobBySlug(params.slug);

  if (!job) {
    return (
      <main className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-white mb-4">Job Not Found</h1>
          <p className="text-gray-300 mb-8">The job you're looking for doesn't exist or has been removed.</p>
          <Link href="/careers" className="btn px-6 py-3">
            View All Positions
          </Link>
        </div>
      </main>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <main className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-green to-dark pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {job.title}
              </h1>
              <div className="flex items-center justify-center gap-x-1 mb-8">
                <div className='w-20 h-1 rounded-lg bg-primary'></div>
                <div className='w-3 h-1 rounded-lg bg-primary'></div>
                <div className='w-7 h-1 rounded-lg bg-primary'></div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {job.type}
                </span>
                <span className="px-4 py-2 bg-white/5 text-gray-300 rounded-full text-sm">
                  {job.location}
                </span>
                <span className="px-4 py-2 bg-white/5 text-gray-300 rounded-full text-sm">
                  {job.department}
                </span>
                <span className="px-4 py-2 bg-white/5 text-gray-300 rounded-full text-sm">
                  {job.experience} Experience
                </span>
              </div>
              <div className="mt-8">
                <Link 
                  href={`/careers/${job.slug}/apply`}
                  className="btn px-8 py-3 text-lg font-medium inline-flex items-center"
                >
                  Apply Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Reveal>
                <div className="bg-[#ffffff08] rounded-xl border border-white/5 p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Job Description</h2>
                  <p className="text-gray-300 mb-6">{job.description}</p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Responsibilities</h3>
                  <ul className="space-y-3 mb-8">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Requirements</h3>
                  <ul className="space-y-3">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div>
              <Reveal delay={200}>
                <div className="bg-[#ffffff08] rounded-xl border border-white/5 p-6 sticky top-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Job Overview</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Job Title</h4>
                      <p className="text-white">{job.title}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Job Type</h4>
                      <p className="text-white">{job.type}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Location</h4>
                      <p className="text-white">{job.location}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Department</h4>
                      <p className="text-white">{job.department}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Experience</h4>
                      <p className="text-white">{job.experience}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Posted On</h4>
                      <p className="text-white">{formatDate(job.postedDate)}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Application Deadline</h4>
                      <p className="text-white">{formatDate(job.applicationDeadline)}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="text-sm font-medium text-gray-400 mb-3">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-[#ffffff08] text-sm rounded-full text-gray-300 border border-white/10">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Link 
                        href={`/careers/${job.slug}/apply`}
                        className="btn w-full text-center justify-center"
                      >
                        Apply Now
                      </Link>
                      <p className="text-xs text-gray-400 mt-2 text-center">
                        Application ends: {formatDate(job.applicationDeadline)}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section id="apply-now" className="py-16 bg-dark">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Reveal>
            <div className="bg-[#ffffff08] rounded-xl border border-white/5 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to apply?</h2>
              <p className="text-gray-300 mb-8">Join our team and help us build the future of technology.</p>
              <Link 
                href={`/careers/${job.slug}/apply`}
                className="btn px-8 py-3 text-lg font-medium inline-flex items-center"
              >
                Apply Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <p className="text-sm text-gray-400 mt-4">
                Application ends: {formatDate(job.applicationDeadline)}
              </p>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">Don't see a role that fits your skills?</p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Contact Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default JobDetailsPage;
