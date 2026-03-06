"use client";

import Image from "next/image";

/* ─── All 66 brand logos inside /public/brands ──────────────────────────── */
const BRAND_LOGOS = [
  { src: "/brands/AmericanFinancing.png", alt: "American Financing" },
  { src: "/brands/BL-HorizontalLogo-Large.webp", alt: "BL" },
  { src: "/brands/BetterHelp.svg", alt: "BetterHelp" },
  { src: "/brands/CU_Logo_Horizontal-01.png", alt: "CU" },
  { src: "/brands/CashGiraffe.png", alt: "Cash Giraffe" },
  { src: "/brands/Cashapp.png", alt: "Cash App" },
  { src: "/brands/Chapter.png", alt: "Chapter" },
  { src: "/brands/Cowboycolostrum.png", alt: "Cowboy Colostrum" },
  {
    src: "/brands/CozyEarth_Wordmark_Horizontal_87958ec3-0fba-4c21-aa33-f571204b95b3.webp",
    alt: "Cozy Earth",
  },
  { src: "/brands/CyberGhost.png", alt: "CyberGhost" },
  { src: "/brands/DeleteMe.png", alt: "DeleteMe" },
  { src: "/brands/DraftKings.png", alt: "DraftKings" },
  { src: "/brands/DudeWipes.png", alt: "Dude Wipes" },
  { src: "/brands/Ekster.jpg", alt: "Ekster" },
  { src: "/brands/EllaOla.webp", alt: "Ella Ola" },
  { src: "/brands/Experian.png", alt: "Experian" },
  { src: "/brands/ExpressVPN.png", alt: "ExpressVPN" },
  { src: "/brands/Fabric.png", alt: "Fabric" },
  { src: "/brands/Factor.webp", alt: "Factor" },
  { src: "/brands/Freecash.svg", alt: "Freecash" },
  { src: "/brands/Gld.webp", alt: "GLD" },
  { src: "/brands/Goldco.avif", alt: "Goldco" },
  { src: "/brands/Goodchop.webp", alt: "Good Chop" },
  { src: "/brands/Harrys.png", alt: "Harry's" },
  { src: "/brands/Honeylove.avif", alt: "Honeylove" },
  { src: "/brands/Huel.png", alt: "Huel" },
  { src: "/brands/Incogni.com_logo.png", alt: "Incogni" },
  { src: "/brands/JoiandBlokes.svg", alt: "Joi & Blokes" },
  { src: "/brands/JonesRoad.jpg", alt: "Jones Road" },
  { src: "/brands/Kalshi.png", alt: "Kalshi" },
  { src: "/brands/Lovebird.webp", alt: "Lovebird" },
  { src: "/brands/Morgan%26Morgan.png", alt: "Morgan & Morgan" },
  { src: "/brands/MyHeritage.png", alt: "MyHeritage" },
  { src: "/brands/NationalDebtRelief.jpg", alt: "National Debt Relief" },
  { src: "/brands/NicNac.webp", alt: "NicNac" },
  { src: "/brands/Oneskin.webp", alt: "OneSkin" },
  { src: "/brands/Opusclip.webp", alt: "Opus Clip" },
  { src: "/brands/PDSDebt-.png", alt: "PDS Debt" },
  { src: "/brands/Particle-Logo.jpg", alt: "Particle" },
  { src: "/brands/Plaud.webp", alt: "Plaud" },
  { src: "/brands/Prizepicks.svg", alt: "PrizePicks" },
  { src: "/brands/Proof.webp", alt: "Proof" },
  { src: "/brands/Quo.png", alt: "Quo" },
  { src: "/brands/Raycon.webp", alt: "Raycon" },
  { src: "/brands/Rugiet.png", alt: "Rugiet" },
  { src: "/brands/SAN.jpeg", alt: "SAN" },
  { src: "/brands/Saily.svg", alt: "Saily" },
  { src: "/brands/Seatgeek.png", alt: "SeatGeek" },
  { src: "/brands/Simplisafe.png", alt: "SimpliSafe" },
  { src: "/brands/Stopbox.avif", alt: "Stopbox" },
  { src: "/brands/Surfshark.png", alt: "Surfshark" },
  { src: "/brands/TaxHardship-logo.webp", alt: "Tax Hardship" },
  { src: "/brands/TaxNetwork.png", alt: "Tax Network" },
  { src: "/brands/TiegeHanley.webp", alt: "Tiege Hanley" },
  { src: "/brands/ToupsandCo.webp", alt: "Toups & Co" },
  { src: "/brands/Trade.png", alt: "Trade" },
  { src: "/brands/Tseg.png", alt: "TSEG" },
  { src: "/brands/Underdog.webp", alt: "Underdog" },
  { src: "/brands/Upside.avif", alt: "Upside" },
  { src: "/brands/Vanman.avif", alt: "Vanman" },
  { src: "/brands/Wildgrain.png", alt: "Wildgrain" },
  { src: "/brands/Zocdoc.png", alt: "Zocdoc" },
  {
    src: "/brands/death-breath-metal-band-logo-logo-icon-png-svg.png",
    alt: "Death Breath",
  },
  { src: "/brands/odoo.png", alt: "Odoo" },
  { src: "/brands/omniwatch.jpeg", alt: "Omniwatch" },
  { src: "/brands/rag%26bone.png", alt: "Rag & Bone" },
];

/* Doubled for seamless infinite scroll — same trick as the HTML version */
const TICKER_ITEMS = [...BRAND_LOGOS, ...BRAND_LOGOS];

export default function Brands() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--cream)",
        overflow: "hidden",
      }}
    >
      {/* ── Header label ───────────────────────────────────────────────── */}
      <div
        style={{
          padding: "48px 48px 32px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          fontSize: "9px",
          letterSpacing: ".3em",
          textTransform: "uppercase",
          color: "var(--ink-lt)",
          fontWeight: 400,
        }}
      >
        {/* red dash before label — mirroring .brands-header::before */}
        <span
          style={{
            display: "inline-block",
            width: "24px",
            height: "1px",
            background: "var(--red)",
            flexShrink: 0,
          }}
        />
        Brands We Work With
      </div>

      {/* ── Ticker outer wrapper with fade edges ───────────────────────── */}
      <div
        style={{
          overflow: "hidden",
          padding: "20px 0 40px",
          position: "relative",
        }}
      >
        {/* Left fade */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "120px",
            background: "linear-gradient(to right, var(--cream), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "120px",
            background: "linear-gradient(to left, var(--cream), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* ── Scrolling track ──────────────────────────────────────────── */}
        <div
          className="ticker-track"
          style={{
            display: "flex",
            width: "max-content",
            alignItems: "center",
          }}
        >
          {TICKER_ITEMS.map((brand, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 52px",
                height: "60px",
                borderRight: "1px solid var(--border)",
                flexShrink: 0,
                userSelect: "none",
              }}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={120}
                height={40}
                style={{
                  objectFit: "contain",
                  height: "36px",
                  width: "auto",
                  maxWidth: "120px",
                  /* Desaturate slightly — matches the original CSS filter feel */
                  filter: "grayscale(30%) opacity(0.75)",
                  transition: "filter 0.2s",
                }}
                /* Only eagerly load the first set; the duplicate is lazy */
                loading={idx < BRAND_LOGOS.length ? "eager" : "lazy"}
                /* quality 75 is a great balance between sharpness and size */
                quality={75}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%) opacity(1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(30%) opacity(0.75)";
                }}
                unoptimized={
                  brand.src.endsWith(".svg") || brand.src.endsWith(".avif")
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
