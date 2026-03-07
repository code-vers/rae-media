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
      className="py-12 px-5 md:py-16 md:px-8 lg:py-22 lg:px-12 bg-(--cream) border-t border-(--border)"
    >
      <div className="mb-8 md:mb-12 lg:mb-16">
        <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-(--red) font-semibold mb-3 md:mb-4">
          Brand Testimonials
        </div>
        <h2 className="[font-family:var(--serif)] text-[clamp(36px,6vw,72px)] font-bold leading-[0.88] tracking-[-0.03em] uppercase text-(--ink) mt-2 md:mt-3">
          Here&apos;s what our
          <br />
          <em className="not-italic text-(--red)">brands</em> say.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.25 bg-(--border) border border-(--border)">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`bg-(--cream) p-6 md:p-8 lg:p-12 flex flex-col justify-between gap-6 md:gap-8 lg:gap-10 transition-colors duration-300 hover:bg-(--sand) ${
              idx === 2 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="[font-family:var(--sans)] text-[14px] md:text-[15px] leading-[1.65] md:leading-[1.75] text-(--ink-mid) italic font-light">
              {t.quote}
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div
                className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center [font-family:var(--serif)] text-[12px] md:text-[13px] font-bold tracking-[0.04em] shrink-0 relative overflow-hidden ${
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
