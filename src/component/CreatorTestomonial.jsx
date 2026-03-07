import Image from "next/image";

export default function CreatorTestimonials() {
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
    <section
      id="creators-say"
      className="py-22 px-12 bg-(--ink) relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-repeat opacity-15 z-0"
        style={{
          backgroundImage:
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAJElEQVR42mP8z8AARAyMQAiMRxk1cNTAUQNHDRw1cNTAUQMHAPfOIf6u2X1eAAAAAElFTkSuQmCC')",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-1">
        <div className="mb-16">
          <div className="text-xs tracking-[0.2em] uppercase text-(--red) font-semibold mb-4">
            Creator Testimonials
          </div>
          <h2 className="[font-family:var(--serif)] text-[clamp(40px,5vw,72px)] font-bold leading-[0.88] tracking-[-0.03em] uppercase text-(--cream) mt-3">
            And our
            <br />
            <em className="not-italic text-(--red)">creators</em> too.
          </h2>
        </div>

        <div className="flex gap-4 items-stretch">
          {creatorTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative flex-1 overflow-hidden rounded aspect-3/4 group"
            >
              <Image
                src={t.imgSrc}
                alt={t.name}
                fill
                unoptimized
                className="object-cover object-top brightness-[0.6] saturate-[0.8] transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-9 bg-linear-to-t from-black/75 to-transparent z-2">
                <div className="[font-family:var(--sans)] text-[13px] leading-[1.7] text-[rgba(245,242,236,0.88)] italic font-light mb-5">
                  {t.quote}
                </div>
                <div>
                  <div className="[font-family:var(--serif)] text-sm font-bold tracking-[-0.01em] uppercase text-(--cream)">
                    {t.name}
                  </div>
                  <div className="text-[11px] tracking-[0.08em] text-[rgba(245,242,236,0.65)] mt-0.75">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
