import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <section className="bg-dark-green py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            
            {/* Left: Circular Image */}
            <div className="flex-shrink-0">
            <img
                src="/Image/about.jpg"
                alt="About Us"
                className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg"
            />
            </div>

            {/* Right: Content */}
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2 text-white">ABOUT US</h2>
                <div className="w-16 h-1 bg-dark mx-auto md:mx-0 mb-6 rounded"></div>
                <p className='text-sm'>At <strong>SudoMotion</strong>, we turn ideas into digital realities.</p>
                <p className="leading-relaxed max-w-xl text-sm">
                    Founded by a passionate team of tech and design experts, we specialize in <strong>web development, app development, video editing,</strong> and <strong>creative branding</strong>. From startups to scaling businesses, we help clients simplify their tech world with smart, scalable, and visually stunning solutions.
                </p>
                <div className='mt-5'>
                    <Link href={'/about'} className='transparent-button'>Work Process</Link>
                </div>
            </div>
        </div>
    </section>

  )
}
