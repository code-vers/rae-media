"use client";

import { useState, useRef } from "react";
import Image from "next/image";

/* ─── Creator data ──────────────────────────────────────────────────────── */
const CREATORS = [
  {
    name: "The Iced Coffee Hour",
    subs: "1.55M Subscribers",
    img: "/creators/IcedCoffeeHour.AVIF",
    unoptimized: true, // avif → served as-is
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
const TOTAL_SLIDES = Math.ceil(CREATORS.length / PER_VIEW); // 3 slides

/* ─── Arrow SVG (inline, no external dep) ──────────────────────────────── */
function Arrow({ direction }) {
  return (
    <span style={{ fontSize: "20px", lineHeight: 1 }}>
      {direction === "prev" ? "←" : "→"}
    </span>
  );
}

export default function Creators() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  function goTo(idx) {
    if (idx < 0 || idx >= TOTAL_SLIDES) return;
    setCurrent(idx);
  }

  // Cards visible for the current slide index
  const start = current * PER_VIEW;
  const visibleCards = CREATORS.slice(start, start + PER_VIEW);

  return (
    <section
      id="creators"
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--border)",
        padding: "88px 0 0",
      }}
    >
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: "0 48px 56px",
        }}
      >
        {/* Left: eyebrow + headline */}
        <div>
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
            <em style={{ fontStyle: "normal", color: "var(--red)" }}>
              creators
            </em>
          </h2>
        </div>

        {/* Right: prev / counter / next */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button
            id="creatorPrev"
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            style={{
              width: "52px",
              height: "52px",
              border: "1.5px solid var(--border)",
              background: "transparent",
              cursor: current === 0 ? "default" : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--ink)",
              transition: "all .25s",
              flexShrink: 0,
              opacity: current === 0 ? 0.35 : 1,
            }}
            onMouseEnter={(e) => {
              if (current === 0) return;
              e.currentTarget.style.background = "var(--red)";
              e.currentTarget.style.borderColor = "var(--red)";
              e.currentTarget.style.color = "var(--cream)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--ink)";
            }}
          >
            <Arrow direction="prev" />
          </button>

          <span
            id="creatorCounter"
            style={{
              fontSize: "11px",
              letterSpacing: ".1em",
              color: "var(--ink-lt)",
              minWidth: "52px",
              textAlign: "center",
              fontFamily: "var(--sans)",
            }}
          >
            {current + 1} / {TOTAL_SLIDES}
          </span>

          <button
            id="creatorNext"
            onClick={() => goTo(current + 1)}
            disabled={current === TOTAL_SLIDES - 1}
            style={{
              width: "52px",
              height: "52px",
              border: "1.5px solid var(--border)",
              background: "transparent",
              cursor: current === TOTAL_SLIDES - 1 ? "default" : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--ink)",
              transition: "all .25s",
              flexShrink: 0,
              opacity: current === TOTAL_SLIDES - 1 ? 0.35 : 1,
            }}
            onMouseEnter={(e) => {
              if (current === TOTAL_SLIDES - 1) return;
              e.currentTarget.style.background = "var(--red)";
              e.currentTarget.style.borderColor = "var(--red)";
              e.currentTarget.style.color = "var(--cream)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--ink)";
            }}
          >
            <Arrow direction="next" />
          </button>
        </div>
      </div>

      {/* ── Slider ─────────────────────────────────────────────────────── */}
      <div style={{ overflow: "hidden" }}>
        <div
          ref={trackRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            transition: "opacity .4s ease",
          }}
        >
          {visibleCards.map((creator, idx) => (
            <CreatorCard key={`${current}-${idx}`} creator={creator} />
          ))}

          {/* Fill empty slots if last slide has < 3 creators */}
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
        cursor: "none",
      }}
    >
      {/* Photo */}
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

      {/* ── Always-visible centered info (matches original hover state) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px",
          /* Add a subtle dark overlay so white text is always legible */
          background: "rgba(26, 23, 20, 0.4)",
          zIndex: 2,
        }}
      >
        {/* Creator name (Oswald, 28px, cream) */}
        <div
          style={{
            fontFamily: "var(--serif)",
            fontSize: "28px",
            fontWeight: 700,
            color: "var(--cream)",
            textAlign: "center",
            lineHeight: 1.05,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            marginBottom: "8px",
          }}
        >
          {creator.name}
        </div>

        {/* Subscriber count (11px, DM Sans, muted cream) */}
        <div
          style={{
            fontSize: "14px",
            letterSpacing: ".1em",
            color: "rgba(245,242,236,0.7)",
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
