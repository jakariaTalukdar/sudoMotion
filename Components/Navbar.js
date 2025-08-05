"use client"
import { MenubarItems } from '@/lib/menubarItems'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
  const pathname = usePathname()
  console.log('router', pathname)
  return (
    <nav className="w-full text-black fixed top-1 z-50">
      <div className="max-w-6xl bg-[#f1f1f113] backBlur rounded-lg shadow-md border-foreground px-5 py-2 mx-auto flex items-center justify-between">
        
        {/* Logo on the left */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Image/SudoMotion.png" // ✅ Use path without /public
            alt="SudoMotion Logo"
            width={300}
            height={300}
            className="rounded-full" // Optional: adds a rounded effect
          />
        </Link>

        {/* Navigation menu items */}
        <div className="flex gap-6">
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
