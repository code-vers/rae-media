import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-(--sand-2) border-t border-(--border) p-8 md:p-12 flex flex-col md:grid md:grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-6">
      <a href="#" className="no-underline">
        <Image
          src={logo}
          alt="RAE"
          height={200}
          width={200}
          className="h-6 md:h-7 w-auto block"
        />
      </a>

      <div className="flex flex-wrap justify-center gap-5 md:gap-7 lg:gap-9">
        <a
          href="#"
          className="text-[10px] md:text-[9px] tracking-[0.2em] uppercase text-(--ink-lt) no-underline font-normal hover:text-(--red) transition-colors duration-200"
        >
          For Brands
        </a>
        <a
          href="#"
          className="text-[10px] md:text-[9px] tracking-[0.2em] uppercase text-(--ink-lt) no-underline font-normal hover:text-(--red) transition-colors duration-200"
        >
          For Creators
        </a>
        <a
          href="#"
          className="text-[10px] md:text-[9px] tracking-[0.2em] uppercase text-(--ink-lt) no-underline font-normal hover:text-(--red) transition-colors duration-200"
        >
          Case Studies
        </a>
        <a
          href="#"
          className="text-[10px] md:text-[9px] tracking-[0.2em] uppercase text-(--ink-lt) no-underline font-normal hover:text-(--red) transition-colors duration-200"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-[10px] md:text-[9px] tracking-[0.2em] uppercase text-(--ink-lt) no-underline font-normal hover:text-(--red) transition-colors duration-200"
        >
          Contact
        </a>
      </div>

      <div className="text-center lg:text-right text-[11px] md:text-[10px] tracking-[0.08em] text-(--ink-lt) font-normal">
        &copy; 2025 RAE Media Agency
      </div>
    </footer>
  );
};

export default Footer;
