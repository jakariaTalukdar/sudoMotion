import Image from 'next/image'
import React from 'react'

export default function HeroComponent() {
  return (
    <div className='backgroundImage HeroGraphic mt-20'>
      <div className='h-[80vh] max-w-[100rem] mx-auto p-10 border border-gray-700 rounded-2xl grid items-center grid-cols-1 md:grid-cols-2'>
        <div>
            <h1 className='text-6xl font-bold leading-16'>We <span className='text-primary'>Craft</span> Digital Experiences</h1>
            <p className='text-alpha mt-2'>From websites to mobile apps — everything you need in one studio.</p>
            <div className="mt-6 flex gap-4">
                <button className="btn">Let’s Talk</button>
                <button className="transparent-button">Our Work</button>
            </div>

        </div>
        <div className='flex items-center justify-center animate-custom-bounce'>
            {/* <Image src="/Image/sudoMotionShort.png" alt="SudoMotion" className='w-80' height={10000} width={10000}/> */}
            <div className="relative flex items-center justify-center w-96 h-96">
               <div className="absolute w-[26rem] h-[26rem] rounded-full animate-custom-rotate">
                    <svg className="absolute w-full h-full object-contain" viewBox="0 0 100 100">
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
                    </svg>
                </div>
                <div className="absolute w-[29rem] h-[29rem] rounded-full animate-custom-rotate-reverce">
                    <svg className="absolute w-full h-full object-contain" viewBox="0 0 100 100">
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
                    </svg>
                </div>

                <div className="z-10 w-80 h-80">
                    <img src="/Image/sudoMotionShort.png" alt="SudoMotion Logo" className="w-full h-full object-contain" />
                </div>
                </div>

        </div>
      </div>
    </div>
  )
}
