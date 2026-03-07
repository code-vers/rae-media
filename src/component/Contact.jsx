"use client";

const Contact = () => {
  return (
    <section
      id="contact"
      className="grid grid-cols-2 border-t border-(--border) min-h-[78vh]"
    >
      {/* ── Left Column ────────────────────────────────────────────────── */}
      <div className="bg-(--sand) py-22 px-12 flex flex-col justify-between border-r border-(--border)">
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-3.5 text-[9px] tracking-[0.3em] uppercase text-(--ink-lt) font-normal mb-8">
            <span className="w-6 h-px bg-(--red) shrink-0" />
            Get In Touch
          </div>

          {/* Heading */}
          <h2 className="[font-family:var(--serif)] text-[clamp(52px,8vw,110px)] font-bold leading-[0.88] tracking-[-0.03em] uppercase mt-6">
            Book
            <br />
            a
            <br />
            <em className="not-italic text-(--red)">call.</em>
          </h2>
        </div>

        {/* Contact detail */}
        <div className="[font-family:var(--body-serif)] text-xs leading-[2.1] text-(--ink-mid) font-normal">
          <a
            href="mailto:info@raemedia.com"
            className="text-(--ink) no-underline hover:text-(--red) transition-colors duration-200"
          >
            info@raemedia.com
          </a>
          <br />
          We respond within 24 hours.
        </div>
      </div>

      {/* ── Right Column — Form ────────────────────────────────────────── */}
      <div className="py-22 px-12 flex flex-col justify-center bg-(--cream)">
        {/* First + Last name row */}
        <div className="grid grid-cols-2">
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-transparent border-0 border-b border-(--border) border-r text-(--ink) py-4 pr-5 [font-family:var(--sans)] text-[13px] font-light outline-none transition-colors duration-250 appearance-none placeholder:text-(--ink-lt) placeholder:text-[11px] placeholder:tracking-[0.06em] focus:border-b-(--red)"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-transparent border-0 border-b border-(--border) text-(--ink) py-4 [font-family:var(--sans)] text-[13px] font-light outline-none transition-colors duration-250 appearance-none placeholder:text-(--ink-lt) placeholder:text-[11px] placeholder:tracking-[0.06em] focus:border-b-(--red)"
            />
          </div>
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Business Email"
          className="w-full bg-transparent border-0 border-b border-(--border) text-(--ink) py-4 [font-family:var(--sans)] text-[13px] font-light outline-none transition-colors duration-250 appearance-none placeholder:text-(--ink-lt) placeholder:text-[11px] placeholder:tracking-[0.06em] focus:border-b-(--red)"
        />

        {/* Company / Channel */}
        <input
          type="text"
          placeholder="Company or Channel Name"
          className="w-full bg-transparent border-0 border-b border-(--border) text-(--ink) py-4 [font-family:var(--sans)] text-[13px] font-light outline-none transition-colors duration-250 appearance-none placeholder:text-(--ink-lt) placeholder:text-[11px] placeholder:tracking-[0.06em] focus:border-b-(--red)"
        />

        {/* Select */}
        <select
          defaultValue=""
          className="w-full bg-transparent border-0 border-b border-(--border) text-(--ink) py-4 [font-family:var(--sans)] text-[13px] font-light outline-none transition-colors duration-250 appearance-none focus:border-b-(--red)"
        >
          <option value="" disabled className="bg-(--cream)">
            I am a...
          </option>
          <option className="bg-(--cream)">Brand / Advertiser</option>
          <option className="bg-(--cream)">YouTube Creator</option>
          <option className="bg-(--cream)">Agency / Partner</option>
        </select>

        {/* Textarea */}
        <textarea
          placeholder="Tell us about your goals..."
          className="w-full bg-transparent border-0 border-b border-(--border) text-(--ink) py-4 [font-family:var(--sans)] text-[13px] font-light outline-none transition-colors duration-250 appearance-none resize-none h-22 placeholder:text-(--ink-lt) placeholder:text-[11px] placeholder:tracking-[0.06em] focus:border-b-(--red)"
        />

        {/* Submit */}
        <button
          type="submit"
          className="[font-family:var(--sans)] text-[10px] tracking-[0.22em] uppercase font-medium bg-(--red) text-(--cream) border-none py-3.75 px-10 transition-colors duration-200 self-start mt-6 hover:bg-(--red-dk) cursor-pointer"
        >
          Send Message &rarr;
        </button>
      </div>
    </section>
  );
};

export default Contact;