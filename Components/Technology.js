import { technologies } from '@/lib/TechnologyData'
import Link from 'next/link'
import React from 'react'

export default function Technology() {
  return (
    <section className="bg-[#0f0f0f] text-white py-16 bg-technlology">
            <div className="max-w-6xl mx-auto px-4 relative">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Technology</h2>
                <div className={`absolute flex items-center gap-x-1 top-10 left-1/2 -translate-x-1/2`}>
                    <div className='top-[50px] w-20 h-1 rounded-lg bg-primary'></div>
                    <div className='top-[50px] w-3 h-1 rounded-lg bg-primary'></div>
                    <div className='top-[50px] w-7 h-1 rounded-lg bg-primary'></div>
                </div>
                <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
                We combine strategy, creativity, and technology to deliver solutions that stand out. Our proven process ensures every project is delivered with excellence.
                </p>
    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
                
                    {technologies.map((item)=>(
                        <div key={item.id} className="flex items-start gap-5 p-2 rounded-md shadow-md bg-[#ffffff2f] backBlur">
                            <div className={`p-2 rounded-lg bg-white h-12 w-12`}>
                                <img src={item.image} alt={item.title}  className='h-full w-full object-contain'/>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                                <p className="text-gray-200 text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                <div className='col-span-1 md:col-span-2 flex items-center justify-center mt-2'>
                    <Link href={'/technology'} className='btn'>Show In Details</Link>
                </div>
                </div>
            </div>
        </section>
  )
}
