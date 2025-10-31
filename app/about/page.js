import React from 'react';
import Reveal from '@/Components/Reveal';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - SudoMotion',
  description: 'Learn about SudoMotion - A creative tech company specializing in web development, app development, and digital solutions.',
};

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-green to-dark pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
              About SudoMotion
            </h1>
            <div className="flex items-center justify-center gap-x-1 mb-8">
              <div className='w-20 h-1 rounded-lg bg-primary'></div>
              <div className='w-3 h-1 rounded-lg bg-primary'></div>
              <div className='w-7 h-1 rounded-lg bg-primary'></div>
            </div>
            <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg">
              Empowering businesses through innovative technology solutions and creative digital experiences.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2023, SudoMotion began as a small team of passionate developers and designers with a shared vision: to create digital experiences that make a difference.
                </p>
                <p>
                  What started as a modest startup has grown into a full-service digital agency, serving clients across various industries with innovative web and mobile solutions.
                </p>
                <p>
                  Our journey has been marked by continuous learning, adaptation, and a relentless pursuit of excellence in everything we create.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="order-1 md:order-2">
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                <Image
                  src="/Image/about.jpg"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-dark-green">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
            <div className="flex items-center justify-center gap-x-1 mb-8">
              <div className='w-20 h-1 rounded-lg bg-primary'></div>
              <div className='w-3 h-1 rounded-lg bg-primary'></div>
              <div className='w-7 h-1 rounded-lg bg-primary'></div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We embrace cutting-edge technologies and creative thinking to deliver forward-thinking solutions that keep our clients ahead of the curve.",
                icon: "💡"
              },
              {
                title: "Excellence",
                description: "We're committed to delivering exceptional quality in every project, paying attention to the smallest details to ensure outstanding results.",
                icon: "✨"
              },
              {
                title: "Integrity",
                description: "We believe in transparency, honesty, and ethical business practices in all our interactions with clients and team members.",
                icon: "🤝"
              },
              {
                title: "Collaboration",
                description: "We work closely with our clients as partners, fostering open communication and teamwork to achieve shared goals.",
                icon: "👥"
              },
              {
                title: "Growth",
                description: "We're committed to continuous learning and improvement, both as individuals and as an organization.",
                icon: "📈"
              },
              {
                title: "Impact",
                description: "We measure our success by the positive impact we create for our clients, their users, and our community.",
                icon: "🌍"
              }
            ].map((value, index) => (
              <Reveal key={index} delay={index * 60} className="card-hover">
                <div className="bg-[#ffffff08] backBlur p-6 rounded-xl h-full">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-dark">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Meet Our Team</h2>
            <div className="flex items-center justify-center gap-x-1 mb-8">
              <div className='w-20 h-1 rounded-lg bg-primary'></div>
              <div className='w-3 h-1 rounded-lg bg-primary'></div>
              <div className='w-7 h-1 rounded-lg bg-primary'></div>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A diverse team of passionate professionals dedicated to delivering exceptional results.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Johnson", role: "CEO & Founder", image: "/team/team-1.jpg" },
              { name: "Sarah Williams", role: "Lead Designer", image: "/team/team-2.jpg" },
              { name: "Michael Chen", role: "CTO", image: "/team/team-3.jpg" },
              { name: "Emily Davis", role: "Project Manager", image: "/team/team-4.jpg" },
            ].map((member, index) => (
              <Reveal key={index} delay={index * 80} className="card-hover">
                <div className="bg-[#ffffff08] backBlur rounded-xl overflow-hidden h-full">
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                    <div className="flex gap-3 mt-4">
                      {['linkedin', 'twitter', 'github'].map((social) => (
                        <a key={social} href="#" className="text-gray-400 hover:text-primary transition-colors">
                          <span className="sr-only">{social}</span>
                          <i className={`fab fa-${social} text-lg`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-green to-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to bring your ideas to life with our expert team.
            </p>
            <Link href="/contact" className="btn">
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
