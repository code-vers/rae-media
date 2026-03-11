import Image from 'next/image';
import logo from '../../public/logo.png';

const Footer = () => {
  return (
    <footer className="bg-(--sand-2) border-t border-(--border) px-5 py-6 md:p-8 flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-5 md:gap-6">
      
      {/* Logo */}
      <a href="#" className="no-underline md:justify-self-start">
        <Image src={logo} alt="RAE" height={200} width={200} className="h-7 w-auto block" />
      </a>

      {/* Nav Links */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-9">
        <a href="#" className="text-[9px] tracking-[0.2em] uppercase text-(--ink-lt) no-underline font-normal hover:text-(--red) transition-colors duration-200">Brands</a>
        <a href="#" className="text-[9px] tracking-[0.2em] uppercase text-(--ink-lt) no-underline font-normal hover:text-(--red) transition-colors duration-200">Creators</a>
        <a href="#" className="text-[9px] tracking-[0.2em] uppercase text-(--ink-lt) no-underline font-normal hover:text-(--red) transition-colors duration-200">About</a>
        <a href="#contact" className="text-[9px] tracking-[0.2em] uppercase text-(--ink-lt) no-underline font-normal hover:text-(--red) transition-colors duration-200">Contact</a>
      </div>

      {/* Copyright */}
      <div className="text-[10px] tracking-[0.08em] text-(--ink-lt) font-normal md:text-right">
        &copy; 2025 RAE MEDIA LLC
      </div>
    </footer>
  );
};

export default Footer;
