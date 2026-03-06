
// const Brands = () => {
//   // Array of brand objects with name and dummy logo
//   const brands = [
//     { name: 'Vessi', logo: 'https://placehold.co/120x40/1a1714/f5f2ec?text=VESSI' },
//     { name: 'HelloFresh', logo: 'https://placehold.co/140x40/1a1714/f5f2ec?text=HELLOFRESH' },
//     { name: 'Kajabi', logo: 'https://placehold.co/120x40/1a1714/f5f2ec?text=KAJABI' },
//     { name: 'Skillshare', logo: 'https://placehold.co/140x40/1a1714/f5f2ec?text=SKILLSHARE' },
//     { name: 'Surfshark', logo: 'https://placehold.co/130x40/1a1714/f5f2ec?text=SURFSHARK' },
//     { name: 'Huel', logo: 'https://placehold.co/100x40/1a1714/f5f2ec?text=HUEL' },
//     { name: 'Ridge', logo: 'https://placehold.co/110x40/1a1714/f5f2ec?text=RIDGE' },
//     { name: 'ExpressVPN', logo: 'https://placehold.co/140x40/1a1714/f5f2ec?text=EXPRESSVPN' },
//     { name: 'Thrive Market', logo: 'https://placehold.co/160x40/1a1714/f5f2ec?text=THRIVE' },
//     { name: 'BetterHelp', logo: 'https://placehold.co/140x40/1a1714/f5f2ec?text=BETTERHELP' },
//     { name: 'SimpliSafe', logo: 'https://placehold.co/140x40/1a1714/f5f2ec?text=SIMPLISAFE' },
//     { name: 'SeatGeek', logo: 'https://placehold.co/130x40/1a1714/f5f2ec?text=SEATGEEK' },
//     { name: 'Incogni', logo: 'https://placehold.co/120x40/1a1714/f5f2ec?text=INCOGNI' },
//     { name: 'Blue Nile', logo: 'https://placehold.co/130x40/1a1714/f5f2ec?text=BLUE+NILE' },
//     { name: 'Liquid I.V.', logo: 'https://placehold.co/130x40/1a1714/f5f2ec?text=LIQUID+IV' },
//     { name: 'Rocket Money', logo: 'https://placehold.co/150x40/1a1714/f5f2ec?text=ROCKET' },
//     { name: 'MeUndies', logo: 'https://placehold.co/130x40/1a1714/f5f2ec?text=MEUNDIES' },
//     { name: 'Manscaped', logo: 'https://placehold.co/140x40/1a1714/f5f2ec?text=MANSCAPED' },
//   ];

//   return (
//     <section className="border-t border-[#e2ddd6] bg-[#f5f2ec] overflow-hidden">
//       {/* Brands Header */}
//       <div className="px-12 pt-12 pb-8 flex items-center gap-3.5">
//         <span className="w-6 h-px bg-[#d63a5d]"></span>
//         <span className="text-[9px] tracking-[0.3em] uppercase text-[#6b645c] font-normal">
//           Brands We Work With
//         </span>
//       </div>

//       {/* Ticker Container */}
//       <div className="overflow-hidden py-5 pb-10 relative">
//         {/* Gradient Overlays */}
//         <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none bg-gradient-to-r from-[#f5f2ec] to-transparent"></div>
//         <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none bg-gradient-to-l from-[#f5f2ec] to-transparent"></div>

//         {/* Ticker Track */}
//         <div className="flex w-max animate-tick hover:animation-play-state-paused">
//           {/* First set of brands */}
//           {brands.map((brand, index) => (
//             <div
//               key={`brand-1-${index}`}
//               className="flex items-center justify-center px-13 h-[60px] border-r border-[#e2ddd6] hover:text-[#d63a5d] transition-colors duration-200 select-none"
//             >
//               <img 
//                 src={brand.logo} 
//                 alt={brand.name}
//                 className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
//               />
//             </div>
//           ))}
          
//           {/* Duplicate set for infinite scroll effect */}
//           {brands.map((brand, index) => (
//             <div
//               key={`brand-2-${index}`}
//               className="flex items-center justify-center px-13 h-[60px] border-r border-[#e2ddd6] hover:text-[#d63a5d] transition-colors duration-200 select-none"
//             >
//               <img 
//                 src={brand.logo} 
//                 alt={brand.name}
//                 className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Brands;

import React from 'react';

const Brands = () => {
  return (
    <div>
      
    </div>
  );
};

export default Brands;