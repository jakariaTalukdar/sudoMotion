import Image from 'next/image'
import React from 'react'

export default function HeroComponent() {
  return (
    <div className='HeroGraphic mt-12'>
      <div className='h-[80vh] max-w-[100rem] mx-auto p-10 border border-gray-700 rounded-2xl grid items-center grid-cols-1 md:grid-cols-2'>
        <div>
            <h1 className='text-4xl'>Welcome To SudoMotion</h1>
        </div>
        <div className='flex items-center justify-center'>
            <Image src="/Image/sudoMotionShort.png" alt="SudoMotion" className='w-80' height={10000} width={10000}/>
        </div>
      </div>
    </div>
  )
}
