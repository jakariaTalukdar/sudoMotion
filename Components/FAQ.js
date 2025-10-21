"use client"
import React, { useState } from 'react'
import Reveal from '@/Components/Reveal'

const faqs = [
  {
    id: 1,
    q: 'What services does SudoMotion provide?',
    a: 'We specialize in web development, mobile app development, video editing & post-production, and AI integration & automation.'
  },
  {
    id: 2,
    q: 'How quickly can you start a new project?',
    a: 'Typically within 3–5 business days after scope alignment and proposal approval.'
  },
  {
    id: 3,
    q: 'Do you offer ongoing support?',
    a: 'Yes. We provide post‑launch maintenance, feature iterations, and performance monitoring tailored to your needs.'
  },
  {
    id: 4,
    q: 'Can you work with our existing team?',
    a: 'Absolutely. We often collaborate with in‑house teams for faster delivery and knowledge transfer.'
  }
]

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(prev => (prev === id ? null : id))

  return (
    <section className="bg-[#0f0f0f] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 relative">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">FAQs</h2>
          <div className={`absolute flex items-center gap-x-1 top-10 left-1/2 -translate-x-1/2`}>
            <div className='top-[50px] w-20 h-1 rounded-lg bg-primary'></div>
            <div className='top-[50px] w-3 h-1 rounded-lg bg-primary'></div>
            <div className='top-[50px] w-7 h-1 rounded-lg bg-primary'></div>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Answers to common questions about our process, timelines, and collaboration models.
          </p>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <FAQItem
              key={item.id}
              item={item}
              idx={idx}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ item, idx, isOpen, onToggle }) {
  const [maxHeight, setMaxHeight] = React.useState(0)
  const contentRef = React.useRef(null)

  React.useEffect(() => {
    const el = contentRef.current
    if (!el) return
    if (isOpen) {
      setMaxHeight(el.scrollHeight)
    } else {
      setMaxHeight(0)
    }
  }, [isOpen])

  return (
    <Reveal delay={60 * (idx % 4)} className="rounded-xl bg-[#ffffff1f] backBlur card-hover overflow-hidden">
      <button onClick={onToggle} className="w-full flex items-center justify-between text-left p-4">
        <span className="font-semibold">{item.q}</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" x2="12" y1="5" y2="19"/>
            <line x1="5" x2="19" y1="12" y2="12"/>
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`px-4 pb-4 text-sm text-alpha transition-[max-height,opacity,transform] duration-300 ease-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
        } overflow-hidden`}
      >
        {item.a}
      </div>
    </Reveal>
  )
}
