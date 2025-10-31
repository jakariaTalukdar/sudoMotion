'use client';

import React from 'react';
import Reveal from '@/Components/Reveal';

export default function JobApplicationForm({ job }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      // Here you would typically send the form data to your API
      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit application');
      }
      
      // Handle successful submission
      console.log('Application submitted successfully');
      // Optionally redirect to a thank you page
      // router.push('/careers/thank-you');
    } catch (error) {
      console.error('Error submitting application:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="bg-[#ffffff08] rounded-xl border border-white/5 p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="position" value={job.title} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="first-name" className="block text-gray-300 mb-2">First Name *</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              className="w-full px-4 py-3 bg-[#ffffff08] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-gray-300 mb-2">Last Name *</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              className="w-full px-4 py-3 bg-[#ffffff08] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-[#ffffff08] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
            placeholder="your.email@example.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-[#ffffff08] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        
        <div>
          <label htmlFor="resume" className="block text-gray-300 mb-2">Resume/CV *</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-2 border-dashed border-white/10 hover:border-primary/30 rounded-lg cursor-pointer bg-[#ffffff08] hover:bg-[#ffffff0a] transition-colors">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-sm text-gray-400">
                  <span className="text-primary font-medium">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (MAX. 5MB)</p>
              </div>
              <input id="resume" name="resume" type="file" className="hidden" accept=".pdf,.doc,.docx" required />
            </label>
          </div>
        </div>
        
        <div>
          <label htmlFor="cover-letter" className="block text-gray-300 mb-2">Cover Letter</label>
          <textarea
            id="cover-letter"
            name="cover-letter"
            rows="5"
            className="w-full px-4 py-3 bg-[#ffffff08] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
            placeholder={`Tell us why you're a good fit for the ${job.title} position...`}
          ></textarea>
        </div>
        
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="privacy-policy"
              name="privacy-policy"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary/50 border-white/10 rounded bg-[#ffffff08]"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="privacy-policy" className="text-gray-300">
              I agree to the <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> and 
              <a href="/terms" className="text-primary hover:underline"> Terms of Service</a> *
            </label>
          </div>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="btn w-full px-6 py-3 text-lg font-medium"
          >
            Submit Application
          </button>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Application ends: {job.applicationDeadline}
          </p>
        </div>
      </form>
    </div>
  );
}
