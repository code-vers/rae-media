"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_078uomg",
        "template_5j3j31i",
        formRef.current,
        "jorxjXimefb2FSNFU",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="grid grid-cols-1 p-t lg:grid-cols-2 min-h-screen border-t border-(--border)"
    >
      {/* ── Left Column ────────────────────────────────────────────────── */}
      <div className="bg-(--sand) py-12 px-5 md:py-16 md:px-8 lg:py-22 lg:px-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-(--border)">
        <div>
          <div className="flex items-center gap-3.5 text-[10px] md:text-[9px] tracking-[0.3em] uppercase text-(--ink-lt) font-normal mb-6 md:mb-8">
            <span className="w-6 h-px bg-(--red) shrink-0" />
            Get In Touch
          </div>

          <h2 className="[font-family:var(--serif)] text-[clamp(48px,12vw,110px)] lg:text-[clamp(52px,8vw,110px)] font-bold leading-[0.88] tracking-[-0.03em] uppercase mt-4 md:mt-6 mb-12 lg:mb-0">
            Book
            <br />
            a
            <br />
            <em className="not-italic text-(--red)">call.</em>
          </h2>
        </div>

        <div className="[font-family:var(--body-serif)] text-[13px] md:text-xs leading-[2.1] text-(--ink-mid) font-normal">
          <a
            href="mailto:info@raemedia.com"
            className="text-(--ink) no-underline hover:text-(--red) transition-colors duration-200"
          >
            Or email us at hi@raemedia.io
          </a>
        </div>
      </div>

      {/* ── Right Column — Form ────────────────────────────────────────── */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="py-12 px-5 md:py-16 md:px-8 lg:py-22 lg:px-12 flex flex-col justify-center bg-(--cream)"
      >
        {/* First + Last name row */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
          <div>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="w-full bg-transparent border-0 border-b border-(--border) md:border-r text-(--ink) py-4 md:pr-5 [font-family:var(--sans)] text-[14px] md:text-[13px] font-light outline-none transition-colors duration-250 appearance-none placeholder:text-(--ink-lt) placeholder:text-[12px] md:placeholder:text-[11px] placeholder:tracking-[0.06em] focus:border-b-(--red)"
            />
          </div>

          <div>
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="w-full bg-transparent border-0 border-b border-(--border) text-(--ink) py-4 pl-5 [font-family:var(--sans)] text-[14px] md:text-[13px] font-light outline-none transition-colors duration-250 appearance-none placeholder:text-(--ink-lt) placeholder:text-[12px] md:placeholder:text-[11px] placeholder:tracking-[0.06em] focus:border-b-(--red)"
            />
          </div>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Business Email"
          className="w-full bg-transparent border-0 border-b border-(--border) text-(--ink) py-4 [font-family:var(--sans)] text-[14px] md:text-[13px] font-light outline-none transition-colors duration-250 appearance-none placeholder:text-(--ink-lt) placeholder:text-[12px] md:placeholder:text-[11px] placeholder:tracking-[0.06em] focus:border-b-(--red)"
        />

        <input
          type="text"
          name="company"
          placeholder="Company or Channel Name"
          className="w-full bg-transparent border-0 border-b border-(--border) text-(--ink) py-4 [font-family:var(--sans)] text-[14px] md:text-[13px] font-light outline-none transition-colors duration-250 appearance-none placeholder:text-(--ink-lt) placeholder:text-[12px] md:placeholder:text-[11px] placeholder:tracking-[0.06em] focus:border-b-(--red)"
        />

        <select
          name="role"
          defaultValue=""
          className="w-full bg-transparent border-0 border-b border-(--border) text-(--ink) py-4 [font-family:var(--sans)] text-[14px] md:text-[13px] font-light outline-none transition-colors duration-250 appearance-none focus:border-b-(--red)"
        >
          <option value="" disabled className="bg-(--cream)">
            I am a...
          </option>
          <option className="bg-(--cream)">Brand / Advertiser</option>
          <option className="bg-(--cream)">YouTube Creator</option>
          <option className="bg-(--cream)">Agency / Partner</option>
        </select>

        <textarea
          name="message"
          placeholder="Tell us about your goals..."
          className="w-full bg-transparent border-0 border-b border-(--border) text-(--ink) py-4 md:py-6 [font-family:var(--sans)] text-[14px] md:text-[13px] font-light outline-none transition-colors duration-250 appearance-none resize-none h-24 md:h-22 placeholder:text-(--ink-lt) placeholder:text-[12px] md:placeholder:text-[11px] placeholder:tracking-[0.06em] focus:border-b-(--red)"
        />

        <button
          type="submit"
          className="[font-family:var(--sans)] text-[11px] md:text-[10px] tracking-[0.22em] uppercase font-medium bg-(--red) text-(--cream) border-none py-4 md:py-3.75 px-8 md:px-10 transition-colors duration-200 self-start mt-8 md:mt-6 hover:bg-(--red-dk) cursor-pointer w-full md:w-auto text-center"
        >
          Send Message &rarr;
        </button>
      </form>
    </section>
  );
};

export default Contact;
