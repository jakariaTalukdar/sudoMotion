import Image from 'next/image'
import React from 'react'
import RoaterSVG from './RoaterSVG'
import Reveal from '@/Components/Reveal'

export default function HeroComponent() {
  return (
    <div className='backgroundImage HeroGraphic mt-20 overflow-hidden'>
      <div className='max-w-[80rem] mx-4 md:mx-auto p-4 md:p-10 border border-gray-700 rounded-2xl grid items-center grid-cols-1 md:grid-cols-2 [direction:rtl] md:[direction: ltr]'>
        <Reveal className='flex items-center justify-center animate-custom-bounce' delay={0}>
            {/* <Image src="/Image/sudoMotionShort.png" alt="SudoMotion" className='w-80' height={10000} width={10000}/> */}
            <div className="relative flex items-center justify-center w-96 h-96">
                <div className="absolute size-80 md:size-[26rem] rounded-full animate-custom-rotate-reverce text-[#22c51e]">
                    {/* <svg className="absolute w-full h-full object-contain" viewBox="0 0 100 100">
                        <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#22c51e"
                        strokeWidth="2"
                        strokeDasharray="12 3 5 3"
                        strokeLinecap="round"
                        />
                    </svg> */}
                    <RoaterSVG/>
                </div>
               <div className="absolute size-60 md:size-[19rem] rounded-full animate-custom-rotate text-[#22c55e]">
                    {/* <svg className="absolute w-full h-full object-contain" viewBox="0 0 100 100">
                        <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="2"
                        strokeDasharray="12 3 5 3"
                        strokeLinecap="round"
                        />
                    </svg> */}
                    <RoaterSVG/>
                </div>

                <div className="z-10 size-36 md:size-48">
                    <Image height={1000} width={1000} src="/Image/sudoMotionShort.png" alt="SudoMotion Logo" className="w-full h-full object-contain" />
                </div>
              </div>
        </Reveal>
        <Reveal delay={120}>
            <h1 className='text-4xl md:text-6xl font-bold leading-12 md:leading-16 text-end'>We <span className='text-primary'>Craft</span> Digital Experiences</h1>
            <p className='text-alpha mt-2 text-sm md:text-base text-end'>From websites to mobile apps — everything you need in one studio</p>
            <div className="mt-6 flex gap-4 justify-end">
                <button className="btn">Let’s Talk</button>
                <button className="transparent-button">Our Work</button>
            </div>
        </Reveal>
      </div>
    </div>
  )
}
