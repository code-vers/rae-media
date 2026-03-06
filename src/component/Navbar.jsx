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
      {/* Logo */}
      {/* <a href="#" className="font-serif text-2xl font-bold tracking-[0.08em] uppercase text-[#d63a5d] no-underline">
        <img 
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTIxLjkgMTc2Ni4xOSI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2Q2M2E1ZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGcgaWQ9IkxheWVyXzMiIGRhdGEtbmFtZT0iTGF5ZXIgMyI+CiAgICA8Zz4KICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzQ3LjQsMTAyMXY3NDUuMkgwVjBoNDMzLjE1YzI4NS44NCwwLDM3NS45OCwxNzUuMDMsMzc1Ljk4LDQ1My40OHY2My42NWMwLDE5OC45LTU0Ljk3LDI5OS42Ny0xNDAuNzIsMzUyLjcxLDEwNS41NCw1OC4zNCwxMzQuMTIsMTU2LjQ2LDEzNC4xMiw0MTMuNywwLDIxMi4xNi0yLjIsNDEzLjcsNC40LDQ4Mi42NWgtMzM4LjYxYy0xNS4zOS0zMS44Mi0xOS43OS0xNTMuODEtMTkuNzktNTU2LjkxLDAtMTc1LjAzLTEzLjE5LTE4OC4yOS04My41NS0xODguMjloLTE3LjU5Wk0zNDkuNiw3MDguMDdoMjYuMzhjNTcuMTcsMCw4MS4zNS0yMy44Nyw4MS4zNS0xMzUuMjV2LTE0MC41NWMwLTk4LjEyLTE5Ljc5LTExOS4zNC04Ny45NS0xMTkuMzRoLTE5Ljc5djM5NS4xNFoiLz4KICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTI1NS40OCwxMzk0LjkybC0xNy41OSwzNzEuMjdoLTM1Ni4yTDEwMzcuOCwwaDU1Ni4yOGwxNTMuOTEsMTc2Ni4xOWgtMzYwLjU5bC0xNy41OS0zNzEuMjdoLTExNC4zM1pNMTM1NC40MiwxMDQ0Ljg2Yy02LjYtMTM1LjI1LTMyLjk4LTU5Ni42OS0zOS41OC02OTIuMTZoLTE1LjM5Yy0yLjIsNzYuOTEtMjQuMTksNTE5Ljc4LTMwLjc4LDY5Mi4xNmg4NS43NVoiLz4KICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjQ2Ni45MywxMDEwLjM5aC0yNjguMjV2NDA4LjRoMzIzLjIxbC0zOS41OCwzNDcuNGgtNjMzLjI0VjBoNjMxLjA0djM0Ny40aC0yODEuNDR2MzE1LjU4aDI2OC4yNXYzNDcuNFoiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==" 
          alt="RAE" 
          className="h-8 w-auto block"
        />
      </a> */}

    <div >
        <Image src={logo} height={200} width={200} className='h-8 w-auto'/>
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