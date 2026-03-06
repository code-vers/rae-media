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
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--border)",
        padding: "88px 0 88px",
        overflow: "hidden",
      }}
    >
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div style={{ padding: "0 48px 48px" }}>
        <div
          style={{
            fontSize: "9px",
            letterSpacing: ".3em",
            textTransform: "uppercase",
            color: "var(--ink-lt)",
            fontFamily: "var(--sans)",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "24px",
              height: "1px",
              background: "var(--red)",
              flexShrink: 0,
            }}
          />
          Our Network
        </div>

        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(44px, 6vw, 80px)",
            fontWeight: 700,
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "var(--ink)",
          }}
        >
          Meet our
          <br />
          <em style={{ fontStyle: "normal", color: "var(--red)" }}>creators</em>
        </h2>
      </div>

      {/* ── Slider Wrapper ─────────────────────────────────────────────── */}
      <div style={{ position: "relative", padding: "0 48px" }}>
        {/* Prev Arrow */}
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          style={{
            position: "absolute",
            left: "24px", // Placed perfectly so it naturally overlaps padding and the card edge
            top: "50%",
            transform: "translateY(-50%)",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "white",
            border: "none",
            boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: current === 0 ? "default" : "pointer",
            zIndex: 10,
            opacity: current === 0 ? 0.35 : 1,
            transition: "opacity 0.2s, transform 0.2s",
          }}
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
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          }}
        >
          <div
            ref={trackRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            {visibleCards.map((creator, idx) => (
              <CreatorCard key={`${current}-${idx}`} creator={creator} />
            ))}

            {visibleCards.length < PER_VIEW &&
              Array.from({ length: PER_VIEW - visibleCards.length }).map(
                (_, i) => (
                  <div
                    key={`empty-${i}`}
                    style={{ background: "var(--sand-3)", aspectRatio: "3/4" }}
                  />
                ),
              )}
          </div>
        </div>

        {/* Next Arrow */}
        <button
          onClick={() => goTo(current + 1)}
          disabled={current === TOTAL_SLIDES - 1}
          style={{
            position: "absolute",
            right: "24px", // Matches left arrow perfectly
            top: "50%",
            transform: "translateY(-50%)",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "white",
            border: "none",
            boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: current === TOTAL_SLIDES - 1 ? "default" : "pointer",
            zIndex: 10,
            opacity: current === TOTAL_SLIDES - 1 ? 0.35 : 1,
            transition: "opacity 0.2s, transform 0.2s",
          }}
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
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--sand-3)",
        aspectRatio: "3/4",
      }}
    >
      <Image
        src={creator.img}
        alt={creator.name}
        fill
        sizes="33vw"
        style={{
          objectFit: "cover",
          objectPosition: "center top",
          filter: "saturate(0.85) brightness(0.97)",
          transition: "transform .7s ease, filter .6s ease",
        }}
        quality={80}
        unoptimized={creator.unoptimized}
      />

      {/* ── Always-visible centered info ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px",
          background: "rgba(26, 23, 20, 0.45)", // dark overlay for readability
          zIndex: 2,
        }}
      >
        {/* Creator name (Oswald, 28px, cream) */}
        <div
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(24px, 2.5vw, 32px)",
            fontWeight: 700,
            color: "var(--cream)",
            textAlign: "center",
            lineHeight: 1.05,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            marginBottom: "10px",
          }}
        >
          {creator.name}
        </div>

        {/* Subscriber count (13px, DM Sans, muted cream) */}
        <div
          style={{
            fontSize: "13px",
            letterSpacing: ".1em",
            color: "rgba(245,242,236,0.8)",
            textAlign: "center",
            fontFamily: "var(--sans)",
          }}
        >
          {creator.subs}
        </div>
      </div>
    </div>
  );
}
