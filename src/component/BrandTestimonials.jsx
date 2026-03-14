import Image from "next/image";
import image from '../../public/testomonial/image.jpeg';
import image1 from '../../public/testomonial/image1.jpeg';

export default function BrandTestimonials() {
  const testimonials = [
    {
      quote:
        "Sam is the ultimate hustler and determined to get the very best deals. He is always grinding – and at his core a respectful, amazing advocate who has his client’s best interest at heart",
      initials: "IF",
      name: "Brian Entin",
      role: "Senior National Correspondent NewsNation",
      avatarColor: "red",
      image:image
    },
    {
      quote:
        "I have known Sam Goldberg many years.  He is not a guy who is afraid to ask for the order.  Today that is a rare, but essential trait",
      initials: "JD",
      name: "Michael Smerconish",
      role: "SiriusXM Host + TV Correspondent",
      image:image1
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
          <div className="flex items-center gap-3.5 text-[10px] md:text-[12px] tracking-[0.3em] uppercase text-(--ink-lt) font-normal mb-6 md:mb-8">
            <span className="w-6 h-px bg-(--red) shrink-0" />
            Brand Testimonials
          </div>
        <h2 className="[font-family:var(--serif)] text-[clamp(36px,6vw,72px)] font-bold leading-[0.88] tracking-[-0.03em] uppercase text-(--ink) mt-2 md:mt-3">
          Here&apos;s what our
          <br />
          <em className="not-italic text-(--red)">brands</em> say.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-(--border) border border-(--border)">
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
                className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shrink-0 relative overflow-hidden ${
                  t.avatarColor === "red"
                    ? "bg-(--red) text-(--cream)"
                    : "bg-(--sand-3) text-(--ink)"
                }`}
              >
                {t.image ? (
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
                    unoptimized
                  />
                ) : (
                  <span className="[font-family:var(--serif)] text-sm md:text-base lg:text-lg font-bold tracking-[0.04em]">
                    {t.initials}
                  </span>
                )}
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