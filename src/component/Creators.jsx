"use client";

import { useState, useRef } from "react";
import Image from "next/image";

/* ─── Creator data ──────────────────────────────────────────────────────── */
const CREATORS = [
  {
    name: "The Iced Coffee Hour",
    subs: "1.55M Subscribers",
    img: "/creators/IcedCoffeeHour.AVIF",
    unoptimized: true,
  },
  {
    name: "Brandon Buckingham",
    subs: "1.26M Subscribers",
    img: "/creators/BrandonBuckingham.jpg",
    unoptimized: false,
  },
  {
    name: "Dark Asia by Megan",
    subs: "1.08M Subscribers",
    img: "/creators/DarkAsiawithMegan.JPG",
    unoptimized: false,
  },
  {
    name: "Spencer Cornelia",
    subs: "565K Subscribers",
    img: "/creators/SpencerCornelia.JPEG",
    unoptimized: false,
  },
  {
    name: "The Lionel B Show",
    subs: "573K Subscribers",
    img: "/creators/TheLionelBShow.JPEG",
    unoptimized: false,
  },
  {
    name: "Reelz",
    subs: "266K Subscribers",
    img: "/creators/Reelz.JPG",
    unoptimized: false,
  },
  {
    name: "Michael Smerconish",
    subs: "82.6K Subscribers",
    img: "/creators/MichaelSmerconish.JPG",
    unoptimized: false,
  },
  {
    name: "THURL DES",
    subs: "401K Subscribers",
    img: "/creators/ThurlDes.jpg",
    unoptimized: false,
  },
  {
    name: "Always Marco",
    subs: "122K Subscribers",
    img: "/creators/AlwaysMarco.jpg",
    unoptimized: false,
  },
];

const PER_VIEW = 3;
const TOTAL_SLIDES = Math.ceil(CREATORS.length / PER_VIEW);

/* ─── Arrow SVG ──────────────────────────────────────────────────────── */
function Chevron({ direction }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "prev" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}

export default function Creators() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  function goTo(idx) {
    if (idx < 0 || idx >= TOTAL_SLIDES) return;
    setCurrent(idx);
  }

  const start = current * PER_VIEW;
  const visibleCards = CREATORS.slice(start, start + PER_VIEW);

  return (
    <section
      id="creators"
      className="bg-(--cream) border-t border-(--border) py-22 overflow-hidden"
    >
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="px-12 pb-12">
        <div className="text-[9px] tracking-[0.3em] uppercase text-(--ink-lt) [font-family:var(--sans)] flex items-center gap-3.5 mb-4">
          <span className="inline-block w-6 h-px bg-(--red) shrink-0" />
          Our Network
        </div>

        <h2 className="[font-family:var(--serif)] text-[clamp(44px,6vw,80px)] font-bold leading-[0.88] tracking-[-0.03em] uppercase text-(--ink)">
          Meet our
          <br />
          <em className="not-italic text-(--red)">creators</em>
        </h2>
      </div>

      {/* ── Slider Wrapper ─────────────────────────────────────────────── */}
      <div className="relative px-12">
        {/* Prev Arrow */}
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className={`absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-none shadow-[0_4px_14px_rgba(0,0,0,0.15)] flex items-center justify-center z-10 transition-[opacity,transform] duration-200 ${
            current === 0 ? "opacity-35 cursor-default" : "opacity-100 cursor-pointer"
          }`}
          onMouseEnter={(e) => {
            if (current !== 0)
              e.currentTarget.style.transform = "translateY(-50%) scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <Chevron direction="prev" />
        </button>

        {/* The grouped cards block (rounded corners, no gaps) */}
        <div className="rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          <div ref={trackRef} className="grid grid-cols-3">
            {visibleCards.map((creator, idx) => (
              <CreatorCard key={`${current}-${idx}`} creator={creator} />
            ))}

            {visibleCards.length < PER_VIEW &&
              Array.from({ length: PER_VIEW - visibleCards.length }).map(
                (_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="bg-(--sand-3) aspect-3/4"
                  />
                ),
              )}
          </div>
        </div>

        {/* Next Arrow */}
        <button
          onClick={() => goTo(current + 1)}
          disabled={current === TOTAL_SLIDES - 1}
          className={`absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-none shadow-[0_4px_14px_rgba(0,0,0,0.15)] flex items-center justify-center z-10 transition-[opacity,transform] duration-200 ${
            current === TOTAL_SLIDES - 1 ? "opacity-35 cursor-default" : "opacity-100 cursor-pointer"
          }`}
          onMouseEnter={(e) => {
            if (current !== TOTAL_SLIDES - 1)
              e.currentTarget.style.transform = "translateY(-50%) scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <Chevron direction="next" />
        </button>
      </div>
    </section>
  );
}

/* ─── Individual creator card ───────────────────────────────────────────── */
function CreatorCard({ creator }) {
  return (
    <div className="relative overflow-hidden bg-(--sand-3) aspect-3/4">
      <Image
        src={creator.img}
        alt={creator.name}
        fill
        sizes="33vw"
        className="object-cover object-top saturate-[0.85] brightness-[0.97] transition-[transform,filter] duration-700"
        quality={80}
        unoptimized={creator.unoptimized}
      />

      {/* ── Always-visible centered info ── */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-8 bg-[rgba(26,23,20,0.45)] z-2">
        <div className="[font-family:var(--serif)] text-[clamp(24px,2.5vw,32px)] font-bold text-(--cream) text-center leading-[1.05] uppercase tracking-[-0.02em] mb-2.5">
          {creator.name}
        </div>
        <div className="text-[13px] tracking-widest text-[rgba(245,242,236,0.8)] text-center [font-family:var(--sans)]">
          {creator.subs}
        </div>
      </div>
    </div>
  );
}
