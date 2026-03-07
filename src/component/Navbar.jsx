'use client'
import React, { useEffect, useState } from 'react';
import logo from '../../public/logo.png'
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 60;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-100 grid grid-cols-[1fr_auto_1fr] items-center px-12 transition-[padding,border-color] duration-500 border-b border-[rgba(26,23,20,0.06)] ${
        scrolled 
          ? 'py-3.5 bg-[rgba(245,242,236,0.85)] shadow-[0_1px_40px_rgba(26,23,20,0.06)]' 
          : 'py-5.5 bg-[rgba(245,242,236,0.35)] shadow-[0_1px_40px_rgba(26,23,20,0.04)]'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(20px) saturate(1.4)',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(20px) saturate(1.4)',
      }}
    >
      {/* Logo */}
      <a href="#" className="no-underline">
        <Image src={logo} alt="RAE" height={200} width={200} className="h-8 w-auto block" />
      </a>

      {/* Center Text */}
      <span className="text-[9px] tracking-[0.3em] uppercase text-(--ink-lt) font-normal whitespace-nowrap">
        YouTube Creator Agency
      </span>

      {/* Navigation */}
      <nav className="flex items-center justify-end gap-9">
        <a href="#process" className="text-[10px] tracking-[0.18em] uppercase text-(--ink-mid) no-underline font-normal hover:text-(--red) transition-colors duration-200">
          Process
        </a>
        <a href="#creators" className="text-[10px] tracking-[0.18em] uppercase text-(--ink-mid) no-underline font-normal hover:text-(--red) transition-colors duration-200">
          Creators
        </a>
        <a href="#contact" className="text-[10px] tracking-[0.18em] uppercase text-(--ink-mid) no-underline font-normal hover:text-(--red) transition-colors duration-200">
          Contact
        </a>
        <a 
          href="#contact" 
          className="text-[10px] tracking-[0.18em] uppercase font-medium text-(--cream) bg-(--red) px-[5.5 py-2.25 hover:bg-(--red-dk) transition-colors duration-200 no-underline"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
};

export default Navbar;