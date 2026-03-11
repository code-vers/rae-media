"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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

/* ─── Hook: responsive cards per view ───────────────────────────────────── */
function usePerView() {
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perView;
}

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
  const perView = usePerView();
  const totalSlides = Math.ceil(CREATORS.length / perView);
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  // Reset slide to 0 when perView changes to avoid out-of-bounds
  useEffect(() => {
    setCurrent(0);
  }, [perView]);

  const goTo = useCallback(
    (idx) => {
      if (idx < 0 || idx >= totalSlides) return;
      setCurrent(idx);
    },
    [totalSlides],
  );

  /* Image sizes attribute for responsive optimization */
  const imageSizes = perView === 1 ? "100vw" : perView === 2 ? "50vw" : "33vw";

  /* Each card width as a percentage of the track container */
  const cardWidthPercent = 100 / perView;
  const translateX = -(current * 100);

  return (
    <section
      id="creators"
      className="bg-(--cream) border-t border-(--border) py-12 md:py-16 lg:py-22 overflow-hidden"
    >
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="px-5 pb-8 md:px-8 md:pb-10 lg:px-12 lg:pb-12">
        <div className="text-[9px] tracking-[0.3em] uppercase text-(--ink-lt) [font-family:var(--sans)] flex items-center gap-3.5 mb-4">
          <span className="inline-block w-6 h-px bg-(--red) shrink-0" />
          Our Network
        </div>

        <h2 className="[font-family:var(--serif)] text-[clamp(36px,6vw,80px)] font-bold leading-[0.88] tracking-[-0.03em] uppercase text-(--ink)">
          Meet our
          <br />
          <em className="not-italic text-(--red)">creators.</em>
        </h2>
      </div>

      {/* ── Slider Wrapper ─────────────────────────────────────────────── */}
      <div className="relative px-5 md:px-8 lg:px-12">
        {/* Prev Arrow — hidden on mobile (shown below instead) */}
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className={`hidden md:flex absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border-none shadow-[0_4px_14px_rgba(0,0,0,0.15)] items-center justify-center z-10 transition-[opacity,transform] duration-200 ${
            current === 0
              ? "opacity-35 cursor-default"
              : "opacity-100 cursor-pointer"
          }`}
          onMouseEnter={(e) => {
            if (current !== 0)
              e.currentTarget.style.transform = "";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
          }}
        >
          <Chevron direction="prev" />
        </button>

        {/* The sliding track */}
        <div className="rounded-[12px] md:rounded-[16px] lg:rounded-[20px] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.15)] md:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          <div
            ref={trackRef}
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {CREATORS.map((creator, idx) => (
              <div
                key={idx}
                className="shrink-0"
                style={{ width: `${cardWidthPercent}%` }}
              >
                <CreatorCard creator={creator} sizes={imageSizes} />
              </div>
            ))}
          </div>
        </div>

        {/* Next Arrow — hidden on mobile (shown below instead) */}
        <button
          onClick={() => goTo(current + 1)}
          disabled={current === totalSlides - 1}
          className={`hidden md:flex absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border-none shadow-[0_4px_14px_rgba(0,0,0,0.15)] items-center justify-center z-10 transition-[opacity,transform] duration-200 ${
            current === totalSlides - 1
              ? "opacity-35 cursor-default"
              : "opacity-100 cursor-pointer"
          }`}
          onMouseEnter={(e) => {
            if (current !== totalSlides - 1)
              e.currentTarget.style.transform = "";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
          }}
        >
          <Chevron direction="next" />
        </button>
      </div>

      {/* ── Mobile navigation (below carousel) ─────────────────────────── */}
      <div className="flex md:hidden items-center justify-center gap-4 mt-6 px-5">
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className={`w-11 h-11 rounded-full bg-white border-none shadow-[0_4px_14px_rgba(0,0,0,0.15)] flex items-center justify-center transition-opacity duration-200 ${
            current === 0
              ? "opacity-35 cursor-default"
              : "opacity-100 cursor-pointer"
          }`}
        >
          <Chevron direction="prev" />
        </button>

        {/* Slide dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full border-none transition-all duration-300 ${
                i === current
                  ? "bg-(--red) w-5"
                  : "bg-(--sand-3) cursor-pointer"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(current + 1)}
          disabled={current === totalSlides - 1}
          className={`w-11 h-11 rounded-full bg-white border-none shadow-[0_4px_14px_rgba(0,0,0,0.15)] flex items-center justify-center transition-opacity duration-200 ${
            current === totalSlides - 1
              ? "opacity-35 cursor-default"
              : "opacity-100 cursor-pointer"
          }`}
        >
          <Chevron direction="next" />
        </button>
      </div>
    </section>
  );
}

/* ─── Individual creator card ───────────────────────────────────────────── */
function CreatorCard({ creator, sizes }) {
  return (
    <div className="relative overflow-hidden bg-(--sand-3) aspect-3/4">
      <Image
        src={creator.img}
        alt={creator.name}
        fill
        sizes={sizes}
        className="object-cover object-top saturate-[0.85] brightness-[0.97] transition-[transform,filter] duration-700"
        quality={80}
        unoptimized={creator.unoptimized}
      />

      {/* ── Always-visible centered info ── */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8 bg-[rgba(26,23,20,0.45)] z-2">
        <div className="[font-family:var(--serif)] text-[clamp(18px,2.5vw,32px)] font-bold text-(--cream) text-center leading-[1.05] uppercase tracking-[-0.02em] mb-1.5 md:mb-2.5">
          {creator.name}
        </div>
        <div className="text-[11px] md:text-[13px] tracking-widest text-[rgba(245,242,236,0.8)] text-center [font-family:var(--sans)]">
          {creator.subs}
        </div>
      </div>
    </div>
  );
}
