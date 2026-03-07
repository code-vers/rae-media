
const Banner = () => {
  return (
    <section 
      id="mission" 
      className="bg-[#f5f2ec] font-dm-sans px-12 py-[140px] pb-[100px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-screen"
    >
      {/* Left Column */}
      <div className="flex flex-col gap-10">
        {/* Mission Label */}
        <div className="flex items-center gap-3.5">
          <span className="w-6 h-px bg-[#d63a5d]"></span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#d63a5d] font-normal">
            Mission
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-[clamp(56px,6.5vw,104px)] font-bold leading-[0.88] tracking-[-0.03em] uppercase text-[#1a1714]">
          We engineer<br />campaigns that<br />
          <em className="not-italic text-[#d63a5d]">actually</em> work.
        </h2>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <a 
            href="#contact" 
            className="font-sans text-[13px] tracking-[0.04em] font-semibold py-[18px] px-12 no-underline transition-all duration-[280ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-[60px] border-2 border-[#d63a5d] bg-[#d63a5d] text-[#f5f2ec] hover:bg-[#b32e4d] hover:border-[#b32e4d] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,33,90,0.35)]"
          >
            I'm a Brand
          </a>
          <a 
            href="#creators" 
            className="font-sans text-[13px] tracking-[0.04em] font-semibold py-[18px] px-12 no-underline transition-all duration-[280ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-[60px] border-2 border-[#d63a5d] bg-transparent text-[#d63a5d] hover:bg-[#d63a5d] hover:text-[#f5f2ec] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,33,90,0.25)]"
          >
            I'm a Creator
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-10 justify-center">
        <p className="font-serif text-[15px] leading-[1.9] text-[#4a4642] font-normal">
          RAE Media connects ambitious brands with the right YouTube creators — not just anyone with a following, but the right voice for your audience. We handle every part of the partnership so your campaign feels native, performs measurably, and lasts beyond the upload.
        </p>
      </div>
    </section>
  );
};

export default Banner;