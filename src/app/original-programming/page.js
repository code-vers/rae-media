import Image from "next/image";

export const metadata = {
  title: "Original Programming | RAE Media Agency",
  description:
    "Beyond partnerships, RAE Media develops and produces original Youtube shows.",
};

export default function OriginalProgramming() {
  return (
    <main className="bg-(--cream) min-h-screen pt-32 px-5 pb-16 md:pt-40 md:px-8 md:pb-20 lg:pt-48 lg:px-12 lg:pb-25">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-start">
        {/* ── Left Column (Header Section) ────────────────────────────────────────────── */}
        <div className="md:col-span-6 xl:col-span-5 md:sticky md:top-36">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3.5 text-[10px] md:text-[9px] tracking-[0.3em] uppercase text-(--red) font-normal mb-6 md:mb-8">
            <span className="w-6 h-px bg-(--red) shrink-0" />
            Original Shows
          </div>

          {/* Heading */}
          <h1 className="[font-family:var(--serif)] text-[clamp(44px,11vw,84px)] md:text-[clamp(56px,5.5vw,88px)] xl:text-[clamp(56px,5vw,84px)] font-bold leading-[1] md:leading-[0.88] tracking-[-0.03em] uppercase text-(--ink) mb-6 md:mb-10">
            Original
            <br />
            <em className="not-italic text-(--red)">Programming</em>
          </h1>

          {/* Description */}
          <p className="[font-family:var(--body-serif)] text-[15px] md:text-[16px] leading-[1.8] md:leading-[1.9] text-(--ink-mid) font-normal">
            Beyond partnerships, RAE Media develops and produces original
            Youtube shows.
          </p>
        </div>

        {/* ── Right Column (Shows Lineup) ────────────────────────────────────────── */}
        <div className="md:col-span-6 xl:col-span-7 flex flex-col gap-8 md:gap-12 mt-4 md:mt-0">
          {/* Show Card: Bodycam Blowups */}
          <a
            href="#" // Placeholder link
            className="group block no-underline transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white rounded-[16px] md:rounded-[20px] overflow-hidden border border-(--border)"
          >
            {/* Image Container (Aspect Video) */}
            <div className="aspect-video bg-[rgba(26,23,20,0.03)] relative overflow-hidden flex items-center justify-center border-b border-(--border)">
              <div className="text-[10px] tracking-[0.2em] uppercase text-(--ink-lt) [font-family:var(--sans)] font-medium">
                [ Placeholder Image ]
              </div>
              {/* 
                  When ready, replace the placeholder text above with real Image:
                  <Image src="/your-image.jpg" alt="Bodycam Blowups" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized /> 
               */}
            </div>

            {/* Card Content Container */}
            <div className="p-6 md:p-8 flex flex-col gap-4">
              <h3 className="[font-family:var(--serif)] text-[clamp(24px,3vw,30px)] font-bold text-(--ink) uppercase tracking-[-0.02em] leading-[1.1] transition-colors duration-300 group-hover:text-(--red)">
                Bodycam Blowups
              </h3>

              <div className="inline-flex items-center gap-2 [font-family:var(--sans)] text-[11px] font-semibold tracking-[0.2em] uppercase text-(--red)">
                Watch Channel{" "}
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  &rarr;
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
