import { MenubarItems } from '@/lib/menubarItems'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="w-full text-black fixed top-1">
        {/* <Image src="/public/Image/SudoMotion.png" alt='SudoMotion' height={1000} width={1000}/> */}
        <div className="max-w-6xl bg-[#f1f1f113] backBlur rounded-lg shadow-md border-foreground px-5 py-2 mx-auto flex items-center justify-between">
            {MenubarItems?.map((item)=>(
            <Link href={'/'} key={item.id} className="text-sm font-semibold text-white">{item.name}</Link>
            ))}

        </div>
    </nav>
  )
}
