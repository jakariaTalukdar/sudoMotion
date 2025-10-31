import React from 'react';
import Reveal from '@/Components/Reveal';
import Link from 'next/link';
import { services } from '@/lib/servicesData';
import { getServiceDetails } from '@/lib/serviceDetails';
import { getFeedbackByService } from '@/lib/clientFeedback';

export async function generateMetadata({ params }) {
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found - SudoMotion',
      description: 'The requested service could not be found.'
    };
  }

  return {
    title: `${service.title} - SudoMotion`,
    description: service.description,
  };
}

export default function ServiceDetail({ params }) {
  const service = services.find(s => s.slug === params.slug);
  const serviceDetail = getServiceDetails(service?.id);
  const feedbackList = getFeedbackByService(service?.slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-300 mb-8">The requested service could not be found.</p>
          <Link href="/services" className="btn">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-green to-dark pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal>
            <div className="text-center">
              <span className="text-4xl mb-4 inline-block">{service.icon}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {service.title}
              </h1>
              <div className="flex items-center justify-center gap-x-1 mb-8">
                <div className='w-20 h-1 rounded-lg bg-primary'></div>
                <div className='w-3 h-1 rounded-lg bg-primary'></div>
                <div className='w-7 h-1 rounded-lg bg-primary'></div>
              </div>
              <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg">
                {service.description}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Reveal>
                <h2 className="text-2xl font-bold text-white mb-6">Service Overview</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 mb-6">
                    {serviceDetail?.description || `Our ${service.title.toLowerCase()} service is designed to help businesses like yours achieve their goals through expert solutions and cutting-edge technology.`}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {serviceDetail?.technology?.map((tech, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">What We Offer</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-3 mt-1">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {feedbackList.length > 0 && (
                    <>
                      <h3 className="text-xl font-semibold text-white mt-8 mb-6">What Our Clients Say</h3>
                      <div className="relative">
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          {feedbackList.map((feedback) => (
                            <div key={feedback.id} className="bg-[#ffffff08] p-6 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                              <div className="flex items-center justify-between mb-4">
                                <div className="text-yellow-400">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className="text-lg">
                                      {i < feedback.rating ? '★' : '☆'}
                                    </span>
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500">
                                  {new Date(feedback.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                  })}
                                </span>
                              </div>
                              <p className="text-gray-300 mb-4 italic">"{feedback.comment}"</p>
                              <div className="pt-4 border-t border-white/10">
                                <p className="text-white font-medium">{feedback.name}</p>
                                <p className="text-sm text-gray-400">{feedback.role}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {serviceDetail?.faq?.length > 0 && (
                    <>
                      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Frequently Asked Questions</h3>
                      <div className="space-y-4 mb-8">
                        {serviceDetail.faq.map((item, index) => (
                          <div key={index} className="border-b border-gray-700 pb-4">
                            <h4 className="text-lg font-medium text-white mb-2">{item.question}</h4>
                            <p className="text-gray-300">{item.answer}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </Reveal>
            </div>

            <div>
              <Reveal delay={120}>
                <div className="bg-[#ffffff08] backBlur p-6 rounded-xl sticky top-24">
                  <h3 className="text-xl font-semibold text-white mb-6">Get Started</h3>
                  <p className="text-gray-300 mb-6">
                    Ready to discuss your {service.title.toLowerCase()} project? Contact us today for a free consultation.
                  </p>
                  <Link 
                    href="/contact" 
                    className="btn w-full text-center block"
                  >
                    Get a Free Quote
                  </Link>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-medium text-white mb-4">Other Services</h4>
                    <ul className="space-y-3">
                      {services
                        .filter(s => s.id !== service.id)
                        .slice(0, 3)
                        .map((item) => (
                          <li key={item.id}>
                            <Link 
                              href={`/services/${item.slug}`} 
                              className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
                            >
                              <span className="text-lg">{item.icon}</span>
                              <span>{item.title}</span>
                            </Link>
                          </li>
                        ))}
                    </ul>
                    <Link 
                      href="/services" 
                      className="inline-block mt-4 text-sm text-primary hover:underline"
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-green to-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to get started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your {service.title.toLowerCase()} needs and how we can help your business grow.
            </p>
            <Link href="/contact" className="btn">
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}
