"use client";

/* ─────────────────────────────────────────────────────────────────────────
   Banner / Mission Section
   Matches the HTML .mission section exactly:
   ─ 2-column grid (left: label + headline + CTA buttons, right: body copy)
   ─ Oswald  → headline  (.mission-h2)
   ─ DM Sans → label, buttons, body copy  (.mission-label, .btn-audience, .mission-body)
   ─ min-height: 100vh, padding: 140px 48px 100px, gap: 80px
────────────────────────────────────────────────────────────────────────── */

const Banner = () => {
  return (
    <section
      id="mission"
      style={{
        padding: "140px 48px 100px",
        background: "var(--cream)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {/* ── Left column ── label + headline + buttons ───────────────────── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {/* Mission label  —  .mission-label  (DM Sans, 9px, red) */}
        <div
          style={{
            fontSize: "9px",
            letterSpacing: ".3em",
            textTransform: "uppercase",
            color: "var(--red)",
            fontWeight: 400,
            fontFamily: "var(--sans)",
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          {/* ::before red dash */}
          <span
            style={{
              display: "inline-block",
              width: "24px",
              height: "1px",
              background: "var(--red)",
              flexShrink: 0,
            }}
          />
          Mission
        </div>

        {/* Headline  —  .mission-h2  (Oswald, bold, tight leading, ink) */}
        <h2
          style={{
            fontFamily: "var(--serif)" /* Oswald */,
            fontSize: "clamp(56px, 6.5vw, 104px)",
            fontWeight: 700,
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "var(--ink)",
          }}
        >
          We engineer
          <br />
          campaigns that
          <br />
          {/* em  →  red, non-italic  (--red accent word) */}
          <em style={{ fontStyle: "normal", color: "var(--red)" }}>
            actually
          </em>{" "}
          work.
        </h2>

        {/* CTA buttons  —  .btn-audience  (DM Sans, 13px, pill shape) */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {/* Filled: I'm a Brand */}
          <a
            href="#contact"
            style={{
              fontFamily: "var(--sans)" /* DM Sans */,
              fontSize: "13px",
              letterSpacing: ".04em",
              fontWeight: 600,
              padding: "18px 48px",
              textDecoration: "none",
              display: "inline-block",
              transition: "all .28s cubic-bezier(.25,.46,.45,.94)",
              borderRadius: "60px",
              border: "2px solid var(--red)",
              background: "var(--red)",
              color: "var(--cream)",
              cursor: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--red-dk)";
              e.currentTarget.style.borderColor = "var(--red-dk)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(232,33,90,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--red)";
              e.currentTarget.style.borderColor = "var(--red)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            I&rsquo;m a Brand
          </a>

          {/* Outline: I'm a Creator */}
          <a
            href="#creators"
            style={{
              fontFamily: "var(--sans)" /* DM Sans */,
              fontSize: "13px",
              letterSpacing: ".04em",
              fontWeight: 600,
              padding: "18px 48px",
              textDecoration: "none",
              display: "inline-block",
              transition: "all .28s cubic-bezier(.25,.46,.45,.94)",
              borderRadius: "60px",
              border: "2px solid var(--red)",
              background: "transparent",
              color: "var(--red)",
              cursor: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--red)";
              e.currentTarget.style.color = "var(--cream)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(232,33,90,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--red)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            I&rsquo;m a Creator
          </a>
        </div>
      </div>

      {/* ── Right column ── body copy  (.mission-right / .mission-body) ─── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        {/* Body text  —  .mission-body  (DM Sans, 15px, 1.9 leading, ink-mid) */}
        <p
          style={{
            fontFamily: "var(--body-serif)" /* DM Sans */,
            fontSize: "15px",
            lineHeight: 1.9,
            color: "var(--ink-mid)",
            fontWeight: 400,
          }}
        >
          RAE Media connects ambitious brands with the right YouTube creators —
          not just anyone with a following, but the right voice for your
          audience. We handle every part of the partnership so your campaign
          feels native, performs measurably, and lasts beyond the upload.
        </p>
      </div>
    </section>
  );
};

export default Banner;
