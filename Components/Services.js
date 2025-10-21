import Image from 'next/image'
import React from 'react'
import Reveal from '@/Components/Reveal'

export default function Services() {
  return (
    <section className="customRadialGreadiant py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <Reveal>
              <h2 className="text-3xl font-bold uppercase">OUR Services</h2>
              <div className={`flex items-center justify-center mb-8 gap-x-1`}>
                  <div className='top-[50px] w-20 h-1 rounded-lg bg-primary'></div>
                  <div className='top-[50px] w-3 h-1 rounded-lg bg-primary'></div>
                  <div className='top-[50px] w-7 h-1 rounded-lg bg-primary'></div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5">
            {/* Web */}
            <Reveal delay={60} className="flex flex-col items-start text-start border-gray-500 p-4 rounded-md bg-[#ffffff1f] backBlur card-hover">
                <Image height={1000} width={1000} src="/Image/web.png" alt="web development" className="size-20 md:size-32 object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Web Development</h3>
                <p className="text-alpha max-w-xs text-sm">We create fast, responsive, and SEO-optimized websites tailored to your business needs.</p>
            </Reveal>

            {/* App */}
            <Reveal delay={120} className="flex flex-col items-start text-start border-gray-500 p-4 rounded-md bg-[#ffffff1f] backBlur card-hover">
                <Image height={1000} width={1000} src="/Image/app.png" alt="app development" className="size-20 md:size-32 object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">App Development</h3>
                <p className="text-alpha max-w-xs text-sm">Build cross-platform mobile apps with stunning UI and great performance using Flutter or React Native.</p>
            </Reveal>

            {/* Video */}
            <Reveal delay={180} className="flex flex-col items-start text-start border-gray-500 p-4 rounded-md bg-[#ffffff1f] backBlur card-hover">
                <Image height={1000} width={1000} src="/Image/video.png" alt="video editing" className="size-20 md:size-32 object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">Video Editing</h3>
                <p className="text-alpha max-w-xs text-sm">From promotional videos to YouTube editing — we craft engaging stories that captivate your audience.</p>
            </Reveal>
            </div>
        </div>
    </section>

  )
}
