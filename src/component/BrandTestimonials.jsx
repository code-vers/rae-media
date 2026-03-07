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
    <section
      id="brands-say"
      className="py-22 px-12 bg-(--cream) border-t border-(--border)"
    >
      <div className="mb-16">
        <div className="text-xs tracking-[0.2em] uppercase text-(--red) font-semibold mb-4">
          Brand Testimonials
        </div>
        <h2 className="[font-family:var(--serif)] text-[clamp(40px,5vw,72px)] font-bold leading-[0.88] tracking-[-0.03em] uppercase text-(--ink) mt-3">
          Here&apos;s what our
          <br />
          <em className="not-italic text-(--red)">brands</em> say.
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-[2px] bg-(--border)">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-(--cream) p-12 flex flex-col justify-between gap-10 transition-colors duration-300 hover:bg-(--sand)"
          >
            <div className="[font-family:var(--sans)] text-[15px] leading-[1.75] text-(--ink-mid) italic font-light">
              {t.quote}
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center [font-family:var(--serif)] text-[13px] font-bold tracking-[0.04em] shrink-0 relative overflow-hidden ${
                  t.avatarColor === "red"
                    ? "bg-(--red) text-(--cream)"
                    : "bg-(--sand-3) text-(--ink)"
                }`}
              >
                <Image
                  src="/brandSays/brands1.JPG"
                  alt={t.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div>
                <div className="[font-family:var(--serif)] text-sm font-bold tracking-[-0.01em] uppercase text-(--ink)">
                  {t.name}
                </div>
                <div className="text-[11px] tracking-[0.08em] text-(--ink-lt) mt-0.75">
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
