"use client"
import { MenubarItems } from '@/lib/menubarItems'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className=" w-full text-black fixed top-1 z-50">
      <div className="max-w-6xl bg-[#ffffff36] md:bg-[#f1f1f113] backBlur rounded-lg shadow-md border-foreground px-5 py-2 mx-3 md:mx-auto flex items-center justify-between">
        
        {/* Logo on the left */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Image/SudoMotion.png" // ✅ Use path without /public
            alt="SudoMotion Logo"
            width={300}
            height={48}
            className="rounded-full w-40" // Optional: adds a rounded effect
          />
        </Link>

        <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className='text-white md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify-icon lucide-align-justify">
            <path d="M3 12h18" /><path d="M3 18h18" /><path d="M3 6h18" />
          </svg>

        </button>

        {/* Navigation menu items */}
        <div className={`absolute top-11 left-0 md:static ${isMenuOpen ? 'flex' : 'hidden md:flex'} flex-col md:flex-row bg-dark md:bg-transparent w-full md:w-auto gap-6 border md:border-0 rounded-md border-white p-4`}>
          {MenubarItems?.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              className={`text-sm font-semibold text-white hover:text-green-400 transition ${item.path === pathname && 'border-b-2 border-b-primary'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
