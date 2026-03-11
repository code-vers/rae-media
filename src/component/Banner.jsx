const Banner = () => {
  return (
    <section
      id="mission"
      className="bg-(--cream) pt-32 px-5 pb-16 md:pt-40 md:px-8 md:pb-20 lg:pt-48 lg:px-12 lg:pb-25 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center min-h-[90vh] lg:min-h-screen"
    >
      {/* Left Column */}
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
        {/* Mission Label */}
        <div className="flex items-center gap-3.5 text-[10px] md:text-[9px] tracking-[0.3em] uppercase text-(--red) font-normal">
          <span className="w-6 h-px bg-(--red) shrink-0" />
          Mission
        </div>

        {/* Heading */}
        <h2 className="[font-family:var(--serif)] text-[clamp(44px,11vw,104px)] md:text-[clamp(56px,6.5vw,104px)] font-bold leading-normal md:leading-[0.88] tracking-[-0.03em] uppercase text-(--ink)">
YOUTUBE’S  
       
          <em className="not-italic text-(--red)">PREMIER </em>AD. AGENCY
        </h2>

        {/* Buttons */}
        <div className="flex  gap-4 mt-2">
          <a
            href="#contact"
            className="[font-family:var(--sans)] text-[13px] uppercase tracking-[0.04em] font-semibold py-4 md:py-4.5 px-8 md:px-12 text-center no-underline inline-block transition-all duration-280 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-[60px] border-2 border-(--red) bg-(--red) text-(--cream) hover:bg-(--red-dk) hover:border-(--red-dk) hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,33,90,0.35)]"
          >
            I&rsquo;m a Brand
          </a>
          <a
            href="#creators"
            className="[font-family:var(--sans)] uppercase text-[13px] tracking-[0.04em] font-semibold py-4 md:py-4.5 px-8 md:px-12 text-center no-underline inline-block transition-all duration-280 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-[60px] border-2 border-(--red) bg-transparent text-(--red) hover:bg-(--red) hover:text-(--cream) hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,33,90,0.25)]"
          >
            I&rsquo;m a Creator
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6 md:gap-10 justify-center">
        <p className="[font-family:var(--body-serif)] text-[14px] md:text-[15px] leading-[1.8] md:leading-[1.9] text-(--ink-mid) font-normal">
    We match brands with Youtube’s top converting talent to execute campaigns that actually work
        </p>
      </div>
    </section>
  );
};

export default Banner;
