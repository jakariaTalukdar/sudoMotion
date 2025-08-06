import { whyChooseUs } from '@/lib/whyChooseUs'
import React from 'react'
import AbsoluteDash from './AbsoluteDash'

export default function WhyChoseUs() {
  return (
    <section className="bg-[#0f0f0f] text-white py-16 bg-glove">
        <div className="max-w-6xl mx-auto px-4 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Us</h2>
            <div className={`absolute flex items-center gap-x-1 top-10 left-1/2 -translate-x-1/2`}>
                <div className='top-[50px] w-20 h-1 rounded-lg bg-primary'></div>
                <div className='top-[50px] w-3 h-1 rounded-lg bg-primary'></div>
                <div className='top-[50px] w-7 h-1 rounded-lg bg-primary'></div>
            </div>
            <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            We combine strategy, creativity, and technology to deliver solutions that stand out. Our proven process ensures every project is delivered with excellence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
            
                {whyChooseUs.map((item)=>(
                    <div key={item.id} className="flex items-start gap-5 p-2 rounded-md shadow-md bg-[#ffffff2f] backBlur">
                        <div className={`${item.bg} p-2 rounded-lg`}>
                            {item.svg}
                        </div>
                        <div>
                            <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                            <p className="text-gray-200 text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}

                


            </div>
        </div>
    </section>

  )
}
