const Banner = () => {
  return (
    <section
      id="mission"
      className="bg-(--cream) pt-24 px-5 pb-16 md:pt-40 md:px-8 md:pb-20 lg:pt-48 lg:px-12 lg:pb-25 flex flex-col items-start justify-center md:min-h-[90vh] lg:min-h-screen max-w-[1100px]"
    >
      {/* Heading */}
      <h2 className="[font-family:var(--serif)] text-[clamp(60px,16vw,150px)] lg:text-[clamp(44px,5vw,76px)] xl:text-[clamp(56px,6.5vw,110px)] font-bold leading-[0.88] tracking-[-0.03em] uppercase mt-4 md:mt-6 mb-8">
        YOUTUBE’S
        <br />
        <em className="not-italic text-(--red)">PREMIER </em>AD AGENCY
      </h2>

      {/* Subcopy */}
      <p className="[font-family:var(--body-serif)] text-[18px] md:text-[20px] leading-[1.7] text-(--ink-mid) font-normal max-w-[620px] mb-10">
        We match brands with Youtube’s top converting talent to execute
        campaigns that actually work.
      </p>

      {/* CTA */}
      <div className="flex gap-4 flex-wrap">
        <a
          href="#contact"
          className="[font-family:var(--sans)] text-[13px] uppercase tracking-[0.04em] font-semibold py-3 px-4 md:py-4.5 md:px-12 text-center no-underline inline-block transition-all duration-280 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-none  border-2 border-(--red) bg-(--red) text-(--cream) hover:bg-(--red-dk) hover:border-(--red-dk) hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,33,90,0.35)]"
        >
          BOOK A CALL
        </a>
      </div>
    </section>
  );
};

export default Banner;