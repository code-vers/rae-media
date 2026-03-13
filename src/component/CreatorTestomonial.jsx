import Image from "next/image";
import image from '../../public/testomonial/image.jpeg';
import image1 from '../../public/testomonial/image1.jpeg';

export default function CreatorTestimonials() {
  const creatorTestimonials = [
    {
      quote:
        "Sam is the ultimate hustler and determined to get the very best deals. He is always grinding – and at his core a respectful, amazing advocate who has his client’s best interest at heart",
      name: " Brian Entin",
      role: "Senior National Correspondent NewsNation",
      imgSrc: image
    },
    {
      quote:
        "I have known Sam Goldberg many years.  He is not a guy who is afraid to ask for the order.  Today that is a rare, but essential trai",
      name: " Michael Smerconish",
      role: "SiriusXM Host + TV Correspondent",
      imgSrc:image1,
    },
    {
      quote:
        "Working with RAE feels like having a true team behind me. They negotiated rates I didn’t even know were possible in my niche.",
      name: "Dark Asia by Megan",
      role: "1.08M Subscribers",
      imgSrc: "/creators/creators2.png",
    },
  ];

  return (
    <section className="py-[88px] px-6 md:px-12 bg-(--ink) relative overflow-hidden border-t border-(--border)">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-15 z-0"
        style={{
          backgroundImage:
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAJElEQVR42mP8z8AARAyMQAiMRxk1cNTAUQNHDRw1cNTAUQMHAPfOIf6u2X1eAAAAAElFTkSuQmCC')",
          backgroundSize: "20px 20px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16  max-w-[720px]">
          <div className="text-xs  tracking-[0.2em] uppercase text-(--red) font-semibold mb-4">
            Creator Testimonials
          </div>

          <h2 className="[font-family:var(--serif)] text-[clamp(40px,5vw,72px)] font-bold leading-[0.88] tracking-[-0.03em] uppercase text-(--cream)">
       HERE’S WHAT OUR 
            <br />
            <span className="text-(--red) [font-family:var(--serif)]">
           CREATORS
            </span>{" "}
        SAY.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {creatorTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-[6px] aspect-3/4 group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={t.imgSrc}
                alt={t.name}
                fill
                unoptimized
                className="object-cover object-top brightness-[0.65] saturate-[0.85] transition-transform duration-700 ease-in-out group-hover:scale-[1.04]"
                sizes="(max-width:768px) 100vw, 33vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-9 bg-linear-to-t from-black/80 via-black/20 to-transparent z-20">
                {/* Quote */}
                <p className="text-[13px] leading-[1.7] text-[rgba(245,242,236,0.9)] italic font-light mb-5">
                  “{t.quote}”
                </p>

                {/* Author */}
                <div>
                  <div className="text-sm font-bold tracking-[-0.01em] uppercase text-(--sand)">
                    {t.name}
                  </div>

                  <div className="text-[11px] tracking-[0.08em] text-[rgba(245,242,236,0.6)] mt-0.5">
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
