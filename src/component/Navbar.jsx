'use client'
import React, { useEffect, useState } from 'react';
import logo from '../../public/logo.png'
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-100 grid grid-cols-[1fr_auto_1fr] items-center px-12 transition-all duration-500 border-b ${
        scrolled 
          ? 'py-3.5 bg-[rgba(245,242,236,0.85)] backdrop-blur-[20px] border-[rgba(26,23,20,0.06)] shadow-[0_1px_40px_rgba(26,23,20,0.06)]' 
          : 'py-[22px] bg-[rgba(245,242,236,0.35)] backdrop-blur-[20px] saturate-[1.4] border-[rgba(26,23,20,0.06)] shadow-[0_1px_40px_rgba(26,23,20,0.04)]'
      }`}
    >

    <div >
        <Image src={logo} alt='image' height={200} width={200} className='h-8 w-auto'/>
    </div>

      {/* Center Text */}
      <span className="text-[9px] tracking-[0.3em] uppercase text-[#6b645c] font-normal whitespace-nowrap">
        YouTube Creator Agency
      </span>

      {/* Navigation */}
      <nav className="flex items-center justify-end gap-9">
        <a href="#process" className="text-[10px] tracking-[0.18em] uppercase text-[#4a4642] no-underline font-normal hover:text-[#d63a5d] transition-colors duration-200">
          Process
        </a>
        <a href="#creators" className="text-[10px] tracking-[0.18em] uppercase text-[#4a4642] no-underline font-normal hover:text-[#d63a5d] transition-colors duration-200">
          Creators
        </a>
        <a href="#contact" className="text-[10px] tracking-[0.18em] uppercase text-[#4a4642] no-underline font-normal hover:text-[#d63a5d] transition-colors duration-200">
          Contact
        </a>
        <a 
          href="#contact" 
          className="text-[10px] tracking-[0.18em] uppercase font-medium text-[#f5f2ec] bg-[#d63a5d] px-[22px] py-[9px] hover:bg-[#b32e4d] transition-colors duration-200 no-underline"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
};

export default Navbar;