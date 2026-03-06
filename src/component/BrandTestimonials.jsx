import Image from "next/image";

export default function BrandTestimonials() {
  const testimonials = [
    {
      quote:
        "No one l've ever worked with in the podcasting business works as hard as Sam and the RAE Media team. They constantly deliver amazing opportunities for our brands, and are a pleasure to work with in any way.” - Ilyas Frenkel, Founder Single Source Media",
      initials: "IF",
      name: "Ilyas Frenkel",
      role: "Founder — Single Source Media",
      avatarColor: "red",
    },
    {
      quote:
        "Please use placeholder quote for now. Please use placeholder quote for now. Please use placeholder quote for now.” - John Doe, Marketing Manager",
      initials: "JD",
      name: "John Doe",
      role: "Marketing Manager",
    },
    {
      quote:
        "Please use placeholder quote for now. Please use placeholder quote for now. Please use placeholder quote for now.” - Jane Doe, Marketing Manager",
      initials: "JD",
      name: "Jane Doe",
      role: "Marketing Manager",
      avatarColor: "red",
    },
  ];

  return (
    <>
      {/* BRAND TESTIMONIALS */}

      <section
        id="brands-say"
        style={{
          padding: "88px 48px",
          backgroundColor: "#F5F2EC", // cream
          borderTop: "1px solid rgba(26,23,20,0.08)", // border
        }}
      >
        <div style={{ marginBottom: "64px" }}>
          <div
            style={{
              fontSize: "12px",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "#D63A5D", // red
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            Brand Testimonials
          </div>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(40px,5vw,72px)",
              fontWeight: 700,
              lineHeight: 0.88,
              letterSpacing: "-.03em",
              textTransform: "uppercase",
              color: "#1A1714", // ink
              marginTop: "12px",
            }}
          >
            Here's what our
            <br />
            <em
              style={{
                fontStyle: "normal",
                color: "#D63A5D", // red
              }}
            >
              brands
            </em>{" "}
            say.
          </h2>
        </div>

        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            backgroundColor: "rgba(26,23,20,0.08)", // border (creates the thin gap lines)
          }}
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className="tcard">
              <div className="tcard-quote">{t.quote}</div>

              <div className="tcard-author">
                <div
                  className={`tcard-avatar ${t.avatarColor === "red" ? "tcard-avatar-red" : ""}`}
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <Image
                    src="/brandSays/brands1.JPG"
                    alt={t.name}
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </div>
                <div>
                  <div className="tcard-name">{t.name}</div>
                  <div className="tcard-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
