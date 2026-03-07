import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';

const Footer = () => {
  return (
    <footer className="bg-(--sand-2) border-t border-(--border) p-12 grid grid-cols-[1fr_auto_1fr] items-center gap-6">
      <a href="#" className="no-underline">
        <Image src={logo} alt="RAE" height={200} width={200} className="h-7 w-auto block" />
      </a>

      <div className="flex gap-9">
        <a href="#" className="text-[9px] tracking-[0.2em] uppercase text-(--ink-lt) no-underline font-normal hover:text-(--red) transition-colors duration-200">For Brands</a>
        <a href="#" className="text-[9px] tracking-[0.2em] uppercase text-(--ink-lt) no-underline font-normal hover:text-(--red) transition-colors duration-200">For Creators</a>
        <a href="#" className="text-[9px] tracking-[0.2em] uppercase text-(--ink-lt) no-underline font-normal hover:text-(--red) transition-colors duration-200">Case Studies</a>
        <a href="#" className="text-[9px] tracking-[0.2em] uppercase text-(--ink-lt) no-underline font-normal hover:text-(--red) transition-colors duration-200">About</a>
        <a href="#contact" className="text-[9px] tracking-[0.2em] uppercase text-(--ink-lt) no-underline font-normal hover:text-(--red) transition-colors duration-200">Contact</a>
      </div>

      <div className="text-right text-[10px] tracking-[0.08em] text-(--ink-lt) font-normal">
        &copy; 2025 RAE Media Agency
      </div>
    </footer>
  );
};

export default Footer;