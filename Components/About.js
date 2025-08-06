import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <section className="bg-dark-green py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            
            {/* Left: Circular Image */}
            <div className="flex-shrink-0">
            <Image
                height={1000}
                width={1000}
                src="/Image/about.jpg"
                alt="About Us"
                className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg"
            />
            </div>

            {/* Right: Content */}
            <div className="text-center md:text-left relative">
                <h2 className="text-3xl font-bold text-white">ABOUT US</h2>
                <div className={`flex items-center justify-center md:justify-start mb-2 gap-x-1`}>
                    <div className='top-[50px] w-20 h-1 rounded-lg bg-dark'></div>
                    <div className='top-[50px] w-3 h-1 rounded-lg bg-dark'></div>
                    <div className='top-[50px] w-7 h-1 rounded-lg bg-dark'></div>
                </div>
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
