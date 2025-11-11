"use client"

import Link from "next/link"
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation"

const navitems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },
]
const Navitems = () => {
    const pathname = usePathname();
  return (
    <div className='flex items-center gap-4'>
      {navitems.map(({ label, href }) => (
        <Link key={label} href={href} className={cn(pathname === href && 'text-primary font-semibold' )}>
          {label}
        </Link>
      ))}
    </div>
  )
}

export default Navitems
