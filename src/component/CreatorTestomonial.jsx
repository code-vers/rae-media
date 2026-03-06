import Image from "next/image";

export default function creatorTestimonials() {
  const creatorTestimonials = [
    {
      quote:
        '"Since partnering with RAE, my channel revenue has tripled. They handle all the inbound so I can just focus on making videos."',
      name: "Brandon Buckingham",
      role: "1.26M Subscribers",
      imgSrc: "/brandSays/brands1.JPG",
    },
    {
      quote:
        '"The deals they bring are actually relevant to my audience. I\'ve never felt like I had to compromise my content for a sponsorship."',
      name: "The Iced Coffee Hour",
      role: "1.55M Subscribers",
      imgSrc: "/brandSays/brands1.JPG",
    },
    {
      quote:
        '"Working with RAE feels like having a true team behind me. They negotiated rates I didn\'t even know were possible in my niche."',
      name: "Dark Asia by Megan",
      role: "1.08M Subscribers",
      imgSrc: "/brandSays/brands1.JPG",
    },
  ];

  return (
    <>
      {/* CREATOR TESTIMONIALS */}
      <section
        className="testimonials-section testimonials-dark"
        id="creators-say"
        style={{ position: "relative", overflow: "hidden", borderTop: "none" }}
      >
        <div
          className="t-bg-img"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAJElEQVR42mP8z8AARAyMQAiMRxk1cNTAUQNHDRw1cNTAUQMHAPfOIf6u2X1eAAAAAElFTkSuQmCC')",
            backgroundSize: "20px 20px",
            backgroundRepeat: "repeat",
            opacity: 0.15,
            zIndex: 0,
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="testimonials-header">
            <div
              style={{
                fontSize: "12px",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "#D63A5D",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Creator Testimonials
            </div>
            <h2
              className="testimonials-h2"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(40px,5vw,72px)",
                fontWeight: 700,
                lineHeight: 0.88,
                letterSpacing: "-.03em",
                textTransform: "uppercase",
                color: "#F5F2EC", // cream
                marginTop: "12px",
              }}
            >
              And our
              <br />
              <em>creators</em> too.
            </h2>
          </div>

          <div className="testimonials-grid photo-grid">
            {creatorTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="tcard-photo"
                style={{ position: "relative", flex: 1 }}
              >
                <Image
                  src={t.imgSrc}
                  alt={t.name}
                  fill
                  unoptimized
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="tcard-photo-overlay" style={{ zIndex: 2 }}>
                  <div className="tcard-quote" style={{ marginBottom: "20px" }}>
                    {t.quote}
                  </div>
                  <div>
                    <div className="tcard-name" style={{ color: "#F5F2EC" }}>
                      {t.name}
                    </div>
                    <div
                      className="tcard-role"
                      style={{
                        color: "rgba(245,242,236,0.65)",
                        marginTop: "3px",
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
