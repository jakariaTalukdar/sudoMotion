import Image from 'next/image'
import React from 'react'

export default function HeroComponent() {
  return (
    <div className='backgroundImage HeroGraphic mt-12'>
      <div className='h-[80vh] max-w-[100rem] mx-auto p-10 border border-gray-700 rounded-2xl grid items-center grid-cols-1 md:grid-cols-2'>
        <div>
            <h1 className='text-6xl font-bold'>We <span className='text-primary'>Craft</span> Digital Experiences</h1>
            <p className='text-alpha leading-20'>From websites to mobile apps — everything you need in one studio.</p>
            <div class="mt-6 flex gap-4">
                <button class="btn">Let’s Talk</button>
                <button class="transparent-button">Our Work</button>
            </div>

        </div>
        <div className='flex items-center justify-center animate-custom-bounce'>
            {/* <Image src="/Image/sudoMotionShort.png" alt="SudoMotion" className='w-80' height={10000} width={10000}/> */}
            <div class="relative flex items-center justify-center w-96 h-96">
               <div class="absolute w-[26rem] h-[26rem] rounded-full animate-custom-rotate">
                    <svg class="absolute w-full h-full object-contain" viewBox="0 0 100 100">
                        <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#22c55e"
                        stroke-width="2"
                        stroke-dasharray="12 3 5 3"
                        stroke-linecap="round"
                        />
                    </svg>
                </div>
                <div class="absolute w-[29rem] h-[29rem] rounded-full animate-custom-rotate-reverce">
                    <svg class="absolute w-full h-full object-contain" viewBox="0 0 100 100">
                        <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#22c51e"
                        stroke-width="2"
                        stroke-dasharray="12 3 5 3"
                        stroke-linecap="round"
                        />
                    </svg>
                </div>

                <div class="z-10 w-80 h-80">
                    <img src="/Image/sudoMotionShort.png" alt="SudoMotion Logo" class="w-full h-full object-contain" />
                </div>
                </div>

        </div>
      </div>
    </div>
  )
}
