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
    <main className="bg-(--cream) min-h-screen pt-20 px-5 pb-16 md:pt-24 md:px-8 md:pb-20 lg:pt-32 lg:px-12 lg:pb-32">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* ── Header Section ────────────────────────────────────────────── */}
        <div className="mb-8 md:mb-12 lg:mb-16 text-center">
          {/* Heading */}
          <h1 className="[font-family:var(--serif)] text-[clamp(44px,11vw,84px)] md:text-[clamp(56px,7vw,104px)] font-bold leading-none md:leading-[0.88] tracking-[-0.03em] uppercase text-(--ink)">
            Meet the
            <br />
            <em className="not-italic text-(--red)">Team</em>
          </h1>
        </div>

        {/* ── Team Grid ────────────────────────────────────────── */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 md:gap-y-16 md:gap-x-12">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center text-center"
            >
              {/* Image Container */}
              <div className="w-full aspect-4/5 bg-[rgba(26,23,20,0.03)] relative overflow-hidden mb-5 md:mb-6 rounded-[12px] md:rounded-[16px] border border-(--border)">
                {member.placeholder ? (
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] tracking-[0.2em] uppercase text-(--ink-lt) [font-family:var(--sans)] font-medium">
                    [ Placeholder Image ]
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
              <h3 className="[font-family:var(--serif)] text-[22px] md:text-[24px] font-bold text-(--ink) uppercase tracking-[-0.02em] leading-tight transition-colors duration-300 group-hover:text-(--red)">
                {member.name}
              </h3>
              <div className="text-[11px] md:text-xs tracking-winest uppercase text-(--ink-mid) font-medium mt-1.5 opacity-80">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
