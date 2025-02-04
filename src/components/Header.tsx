'use client';
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Logo from '../../public/image/logo.svg';
import GTranslate from "@/components/GTranslate";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav
    className="z-50 bg-secondary flex xl:flex-row flex-row items-center justify-between p-5 2xl:w-4/5 w-11/12 absolute m-auto left-0 right-0 sm:top-10 top-5 rounded-xl border-gray-200 shadow-lg transition-transform duration-700 translate-y-0 navOpen"
    aria-label="Sidebar"
  >
    {/* Logo */}
    <Link href="/">
      <Image src={Logo} alt="Balimmo Logo" width={175} height={60} className='sm:w-[175px] w-[130px]'/>
    </Link>

    {/* Mobile Burger Menu */}
    <div className="lg:hidden flex items-center">                                                                                  
      <svg 
      className="w-6 h-6 fill-white cursor-pointer" 
      aria-hidden="true" 
      viewBox="0 0 20 20" 
      xmlns="http://www.w3.org/2000/svg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
      </svg>        
      
    </div>

    {/* Navigation Links */}
    <ul
      className={`${
        isMenuOpen ? "block" : "hidden"
      } lg:flex flex-col lg:flex-row text-white font-medium p-4 md:p-0 mt-4 lg:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 rounded-lg text-center bg-secondary lg:bg-transparent w-full lg:w-auto absolute lg:relative top-[100%] left-0 lg:top-0 `}
    >
      {NAV_LINKS.map((link) => (
        <li key={link.key} className="py-2 lg:py-0">
          <Link className='font-poppins' href={link.href}>{link.label}</Link>
        </li>    

        
      ))}
    </ul>

    {/* Language Selector */}
    <div className="">
      <GTranslate />
    </div>
  </nav>
  )
}

export default Header