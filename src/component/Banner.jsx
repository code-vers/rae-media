
const Banner = () => {
  return (
    <section
      id="mission"
      className="bg-(--cream) pt-35 px-12 pb-25 grid md:grid-cols-2 gap-20 items-center min-h-screen"
    >
      {/* Left Column */}
      <div className="flex flex-col gap-10">
        {/* Mission Label */}
        <div className="flex items-center gap-3.5 text-[9px] tracking-[0.3em] uppercase text-(--red) font-normal">
          <span className="w-6 h-px bg-(--red) shrink-0" />
          Mission
        </div>

        {/* Heading */}
        <h2 className="[font-family:var(--serif)]  text-[clamp(56px,6.5vw,104px)] font-bold leading-[0.88] tracking-[-0.03em] uppercase text-(--ink)">
          We engineer<br />campaigns that<br />
          <em className="not-italic text-(--red)">actually</em> work.
        </h2>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="#contact"
            className="[font-family:var(--sans)] text-[13px] tracking-[0.04em] font-semibold py-4.5 px-12 no-underline inline-block transition-all duration-280 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-[60px] border-2 border-(--red) bg-(--red) text-(--cream) hover:bg-(--red-dk) hover:border-(--red-dk) hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,33,90,0.35)]"
          >
            I&rsquo;m a Brand
          </a>
          <a
            href="#creators"
            className="[font-family:var(--sans)] text-[13px] tracking-[0.04em] font-semibold py-4.5 px-12 no-underline inline-block transition-all duration-280 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-[60px] border-2 border-(--red) bg-transparent text-(--red) hover:bg-(--red) hover:text-(--cream) hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,33,90,0.25)]"
          >
            I&rsquo;m a Creator
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-10 justify-center">
        <p className="[font-family:var(--body-serif)] text-[15px] leading-[1.9] text-(--ink-mid) font-normal">
          RAE Media connects ambitious brands with the right YouTube creators —
          not just anyone with a following, but the right voice for your
          audience. We handle every part of the partnership so your campaign
          feels native, performs measurably, and lasts beyond the upload.
        </p>
      </div>
    </section>
  );
};

export default Banner;