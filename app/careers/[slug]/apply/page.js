import React from 'react';
import Reveal from '@/Components/Reveal';
import Link from 'next/link';
import { getJobBySlug, formatDate } from '../../careerData';
import JobApplicationForm from './JobApplicationForm';

export async function generateStaticParams() {
  const { jobs } = await import('../../careerData');
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
    title: `Apply for ${job.title} - SudoMotion Careers`,
    description: `Apply for the ${job.title} position at SudoMotion. ${job.description.substring(0, 140)}...`,
    openGraph: {
      title: `Apply for ${job.title} - SudoMotion Careers`,
      description: `Apply for the ${job.title} position at SudoMotion. ${job.description.substring(0, 140)}...`,
      type: 'website',
      url: `https://sudomotion.com/careers/${job.slug}/apply`
    }
  };
}

const JobApplicationPage = ({ params }) => {
  const job = getJobBySlug(params.slug);

  if (!job) {
    return (
      <main className="min-h-screen bg-dark text-white pt-24">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
            <p className="text-gray-300 mb-8">The job you're looking for doesn't exist or has been removed.</p>
            <Link href="/careers" className="btn">
              Browse All Positions
            </Link>
          </div>
        </section>
      </main>
    );
  }


  return (
    <main className="min-h-screen bg-dark text-white pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h1 className="text-4xl font-bold mb-4">Apply for {job.title}</h1>
            <p className="text-xl text-gray-300 mb-8">
              {job.type} • {job.location} • Posted on {formatDate(job.postedDate)}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span className="px-3 py-1 bg-[#ffffff08] text-sm rounded-full text-gray-300 border border-white/10">
                {job.department}
              </span>
              <span className="px-3 py-1 bg-[#ffffff08] text-sm rounded-full text-gray-300 border border-white/10">
                {job.experience} experience
              </span>
              <span className="px-3 py-1 bg-[#ffffff08] text-sm rounded-full text-gray-300 border border-white/10">
                Apply by {formatDate(job.applicationDeadline)}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-dark">
        <div className="max-w-2xl mx-auto px-4">
          <Reveal>
            <div className="mb-8">
              <Link 
                href={`/careers/${job.slug}`} 
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Job Details
              </Link>
              <h2 className="text-2xl font-bold text-white mb-2">Application Form</h2>
              <p className="text-gray-400">Fill out the form below to submit your application for {job.title}.</p>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="bg-[#ffffff08] rounded-xl border border-white/5 p-6 md:p-8">
              <JobApplicationForm job={job} />
            </div>
          </Reveal>
          
          <Reveal>
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">Having trouble with the application?</p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Contact Our Team
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

export default JobApplicationPage;
