import Image from "next/image";

export const metadata = {
  title: "Team | RAE Media Agency",
  description: "Meet the RAE Media Team.",
};

const teamMembers = [
  {
    name: "Sam Goldberg",
    role: "Founder + CEO",
    image: "/teams/KristinaMacaraeg.jpg",
  },
  {
    name: "Ellie Goldberg",
    role: "Head of Operations + Marketing",
    image: "/teams/Angeli Tinapay.JPG",
  },
  {
    name: "Kristina Macaraeg",
    role: "Ad Ops + Campaign Manager",
    image: "/teams/KristinaMacaraeg.jpg",
  },
  {
    name: "Angeli Tinapay",
    role: "Campaign Coordinator",
    image: "/teams/Angeli Tinapay.JPG",
  },
  { name: "Name", role: "Sales Associate", placeholder: true },
  { name: "Name", role: "Sales Associate", placeholder: true },
];

export default function Team() {
  return (
    <main className="bg-(--cream) min-h-screen pt-32 px-5 pb-16 md:pt-40 md:px-8 md:pb-20 lg:pt-48 lg:px-12 lg:pb-25">
      <div className="max-w-7xl mx-auto">
        {/* ── Header Section ────────────────────────────────────────────── */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3.5 text-[10px] md:text-[12px] tracking-[0.3em] uppercase text-(--red) font-normal mb-6 md:mb-8">
            <span className="w-6 h-px bg-(--red) shrink-0" />
            ABOUT US
          </div>

          {/* Heading */}
          <h1 className="[font-family:var(--serif)] text-[clamp(48px,12vw,110px)] lg:text-[clamp(52px,8vw,110px)] font-bold leading-[0.88] tracking-[-0.03em] uppercase text-(--ink) mb-6 md:mb-8">
            Meet the
            <br />
            <em className="not-italic text-(--red)">Team.</em>
          </h1>
        </div>

        {/* ── Team Grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6 md:gap-y-16 md:gap-x-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-start text-left"
            >
              {/* Image Container */}
              <div className="w-full aspect-4/5 bg-[rgba(26,23,20,0.03)] relative overflow-hidden mb-5 rounded-[12px] border border-(--border)">
                {member.placeholder ? (
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] tracking-[0.2em] uppercase text-(--ink-lt) [font-family:var(--sans)] font-medium px-4 text-center">
                    [ TBD ]
                  </div>
                ) : (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                )}
              </div>

              {/* Member Details */}
              <h3 className="[font-family:var(--serif)] text-[18px] md:text-[20px] font-bold text-(--ink) uppercase tracking-[-0.02em] leading-tight transition-colors duration-300 group-hover:text-(--red)">
                {member.name}
              </h3>
              <div className="text-[10px] md:text-[11px] tracking-widest uppercase text-(--ink-mid) font-medium mt-1.5 opacity-80">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
