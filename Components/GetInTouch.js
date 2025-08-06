import React from 'react'
import AbsoluteDash from './AbsoluteDash'

export default function GetInTouch() {
  return (
    <section className="bg-dark text-white border-gray-600 max-w-6xl md:mx-auto mx-4">
        <div className='grid grid-cols-1 md:grid-cols-2 overflow-hidden pt-20 pb-10'>
            <div className='flex flex-col gap-y-4 p-3 relative border-r border-gray-500'>
                <h1 className='text-4xl font-bold'>Let's Talk</h1>
                <AbsoluteDash top={50}/>
                <p className='text-sm text-alpha'>Got a question or idea? We're just a message away. Let's connect and bring your vision to life.</p>
                <div className='flex items-center gap-x-1 text-sm'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span>11/1 SS Road Sirajganj sadar, Sirajganj</span>
                </div>
                <div className='flex items-center gap-x-1 text-sm'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <span>support@sudomotion.com</span>
                </div>
                <div className='flex items-center gap-x-1 text-sm'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                    </svg>
                    <span>+88 01798165091</span>
                </div>
                <div className='flex items-center gap-x-1 text-sm'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                    </svg>
                    <span>+88 01303898668</span>
                </div>
            </div>
            <div className='flex flex-col gap-y-4 p-3 relative'>
                <h1 className='text-4xl font-bold'>Get in Touch</h1>
                <p className='text-sm text-alpha'>Have a project in mind or need help? Let’s build something amazing together.</p>
                <AbsoluteDash top={50}/>
                <input type="text" name="" id="" placeholder='Enter Your name' className='p-4 rounded-md text-sm border focus:outline-0 focus:ring-0 focus:border' />
                <input type="email" name="" id="" placeholder='Enter Your Email' className='p-4 rounded-md text-sm border focus:outline-0 focus:ring-0 focus:border' />
                <textarea rows={4} placeholder='Enter Your name' className='p-4 rounded-md text-sm border focus:outline-0 focus:ring-0 focus:border' />
                <button className='btn self-start'>Submit</button>
            </div>
        </div>
    </section>

  )
}
