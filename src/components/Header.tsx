'use client'

import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ModeToggle } from './mode-toggle'
import { LuBriefcase, LuCode, LuHouse, LuMenu, LuUser } from 'react-icons/lu'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const NavItems = () => (
    <>
      <Button
        asChild
        variant={pathname === '/' ? 'default' : 'ghost'}
        size='sm'
        className='w-full justify-start'
      >
        <Link href='/' className='flex items-center space-x-2'>
          <LuHouse className='h-4 w-4' />
          <span>Home</span>
        </Link>
      </Button>
      <Button
        asChild
        variant={pathname === '/about' ? 'default' : 'ghost'}
        size='sm'
        className='w-full justify-start'
      >
        <Link href='/about' className='flex items-center space-x-2'>
          <LuUser className='h-4 w-4' />
          <span>About</span>
        </Link>
      </Button>
      <Button
        asChild
        variant={pathname === '/projects' ? 'default' : 'ghost'}
        size='sm'
        className='w-full justify-start'
      >
        <Link href='/projects' className='flex items-center space-x-2'>
          <LuBriefcase className='h-4 w-4' />
          <span>Projects</span>
        </Link>
      </Button>
    </>
  )

  return (
    <header className='border-b'>
      <div className='flex h-16 items-center px-4 max-w-7xl mx-auto'>
        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon'>
                <LuMenu className='h-5 w-5' />
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='w-[240px] sm:w-[280px]'>
              <div className='flex flex-col space-y-4 mt-8'>
                <NavItems />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href='/' className='flex items-center space-x-2 ml-4 md:ml-0'>
          <LuCode className='h-6 w-6' />
          <span className='font-bold'>Joseph Khawly</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-4 ml-8'>
          <NavItems />
        </nav>

        {/* Theme Toggle */}
        <div className='ml-auto'>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
