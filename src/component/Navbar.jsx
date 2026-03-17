"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../public/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 60;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close menu on scroll
  useEffect(() => {
    if (scrolled && menuOpen) setMenuOpen(false);
  }, [scrolled]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-100 transition-[padding,border-color] duration-500 border-b border-[rgba(26,23,20,0.06)] ${
          scrolled
            ? "bg-[rgba(245,242,236,0.85)] shadow-[0_1px_40px_rgba(26,23,20,0.06)]"
            : "bg-[rgba(245,242,236,0.35)] shadow-[0_1px_40px_rgba(26,23,20,0.04)]"
        }`}
        style={{
          backdropFilter: scrolled ? "blur(20px)" : "blur(20px) saturate(1.4)",
          WebkitBackdropFilter: scrolled
            ? "blur(20px)"
            : "blur(20px) saturate(1.4)",
        }}
      >
        {/* Desktop Navbar */}
        <div
          className={`hidden md:flex items-center justify-between px-5 lg:px-12 transition-[padding] duration-500 gap-4 lg:gap-8 w-full ${
            scrolled ? "py-3.5" : "py-5.5"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="no-underline shrink-0 flex-none">
            <Image
              src={logo}
              alt="RAE"
              height={250}
              width={250}
              className="h-12 w-auto block"
            />
          </Link>

          {/* Center Text */}
          {/* <span className="flex-1  text-center text-[12px] tracking-[0.2em] xl:tracking-[0.3em] uppercase text-(--ink-lt) font-normal whitespace-nowrap overflow-hidden text-ellipsis px-2 lg:px-4">
            Youtube Creator Agency
          </span> */}

          {/* Navigation */}
          <nav className="flex items-center justify-end gap-5 lg:gap-9 shrink-0 flex-none">
            <Link
              href="/contact"
              className="text-[12px] tracking-[0.18em] uppercase text-(--ink-mid) no-underline font-normal hover:text-(--red) transition-colors duration-200 whitespace-nowrap"
            >
              Contact
            </Link>
            <Link
              href="/team"
              className="text-[12px] tracking-[0.18em] uppercase text-(--ink-mid) no-underline font-normal hover:text-(--red) transition-colors duration-200 whitespace-nowrap"
            >
              Team
            </Link>
            <Link
              href="/original-programming"
              className="text-[12px] tracking-[0.18em] uppercase text-(--ink-mid) no-underline font-normal hover:text-(--red) transition-colors duration-200 whitespace-nowrap"
            >
              Original Programming
            </Link>
            <Link
              href="/contact"
              className="text-[14px] tracking-[0.18em] uppercase font-medium text-(--cream) bg-(--red) px-6 py-2 lg:px-8 lg:py-4 hover:bg-(--red-dk) transition-colors duration-200 no-underline whitespace-nowrap"
            >
              Get Started
            </Link>
          </nav>
        </div>

        {/* Mobile Navbar */}
        <div
          className={`flex md:hidden items-center justify-between px-5 transition-[padding] duration-500 ${
            scrolled ? "py-3.5" : "py-4"
          }`}
        >
          {/* Logo */}
          <a href="#" className="no-underline">
            <Image
              src={logo}
              alt="RAE"
              height={200}
              width={200}
              className="h-7 w-auto block"
            />
          </a>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-0"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] bg-(--ink-mid,#3a3530) transition-all duration-300 origin-center ${
                menuOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-(--ink-mid,#3a3530) transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-5 opacity-100"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-(--ink-mid,#3a3530) transition-all duration-300 origin-center ${
                menuOpen ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"
              }`}
            />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{
            borderTop: menuOpen
              ? "1px solid rgba(26,23,20,0.06)"
              : "1px solid transparent",
          }}
        >
          {/* Tagline inside menu */}
          {/* <div className="px-5 pt-4 pb-2">
            <span className="text-[8px] tracking-[0.3em] uppercase text-(--ink-lt) font-normal whitespace-nowrap">
              YouTube Creator Agency
            </span>
          </div> */}

          <nav className="flex flex-col px-5 pb-5 gap-0">
            {[
              { href: "/", label: "Home" },
              { href: "/contact", label: "Contact" },
              { href: "/team", label: "Team" },
              { href: "/original-programming", label: "Original Programming" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="text-[10px] tracking-[0.18em] uppercase text-(--ink-mid) no-underline font-normal hover:text-(--red) transition-colors duration-200 py-3.5 border-b border-[rgba(26,23,20,0.06)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={handleLinkClick}
              className="mt-4 text-[10px] tracking-[0.18em] uppercase font-medium text-(--cream) bg-(--red) px-5.5 py-3 hover:bg-(--red-dk) transition-colors duration-200 no-underline text-center"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;