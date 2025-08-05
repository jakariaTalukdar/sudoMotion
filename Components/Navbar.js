import { MenubarItems } from '@/lib/menubarItems'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="w-full text-black fixed top-1">
        <div className="max-w-6xl bg-[#93ff892d] backBlur rounded-lg shadow-md border-foreground px-5 py-2 mx-auto flex items-center justify-between">
            {MenubarItems?.map((item)=>(
            <Link href={'/'} key={item.id} className="text-black text-sm font-semibold">{item.name}</Link>
            ))}

        </div>
    </nav>
  )
}
