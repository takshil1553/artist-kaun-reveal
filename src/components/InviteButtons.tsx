import { useState } from "react";

const cards = [
  {
    tag: "General Access",
    title: "Music Lover",
    emoji: "🎶",
    desc: "For those who live for music and want to be part of a historic night.",
    perks: ["Pre-Allotted Seating", "Parking Assistance", "Complimentary Refreshments"],
    vip: false,
    href:"https://wa.me/919723845852?text=I%20want%20to%20experience%20it%E2%80%94live.%20The%20mystery%2C%20the%20music%2C%20the%20moment%20the%20world%20discovers%20the%20artist.%20I%20want%20to%20be%20there%20when%20the%20brand%20drops.%20Let%20me%20in.%2013.06.26%20%23ArtistKaun",
  },
  {
    tag: "VVIP Access",
    title: "Influencer",
    emoji: "🎥",
    desc: "For content creators, artists & tastemakers with an audience.",
    perks: ["Red Carpet Entry", "VVIP Seating", "Exclusive Photo Zone", "Parking Assistance"],
    vip: true,
    href: "https://wa.me/919723845852?text=I%20create.%20I%20influence.%20I%20need%20to%20be%20there%20%E2%80%94%20VVIP.%2013.06.26%20%23ArtistKaun",
  },
];

const InviteButtons = () => {
  const [active, setActive] = useState(0);
  const c = cards[active];

  return (
    <section className="py-24 px-6 border-t border-white/10">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase font-body mb-4">Apply Now</p>
          <h2 className="font-heading text-6xl md:text-8xl text-white">
            Get Your <span className="text-primary">Invite!</span>
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="grid grid-cols-2 gap-3 mb-10 p-1 bg-white/5 rounded-sm">
          {cards.map((card, i) => (
            <button
              key={card.title}
              onClick={() => setActive(i)}
              className={`py-3.5 font-heading text-sm tracking-[0.2em] uppercase rounded-sm transition-all duration-300 ${
                active === i ? "bg-primary text-white shadow-lg" : "text-white/40 hover:text-white/70"
              }`}
            >
              {card.emoji} {card.title}
            </button>
          ))}
        </div>

        {/* Card */}
        <div
          className="rounded-sm overflow-hidden border transition-all duration-500"
          style={{
            borderColor: c.vip ? "rgba(255,69,0,0.4)" : "rgba(255,255,255,0.3)",
            background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(0,0,0,0.6))",
          }}
        >
          {/* Top bar */}
          <div
            className="h-1 w-full"
            style={{
              background: c.vip
                ? "linear-gradient(90deg, #ff4500, #cc3300)"
                : "white",
            }}
          />

          <div className="p-8 md:p-10 space-y-6">

            {/* Tag */}
            <span
              className="inline-block text-[9px] tracking-[0.5em] uppercase font-body px-3 py-1 rounded-full border"
              style={{
                borderColor: c.vip ? "rgba(255,69,0,0.4)" : "rgba(255,255,255,0.5)",
                color: c.vip ? "#ff7733" : "white",
              }}
            >
              {c.tag}
            </span>

            {/* Title */}
            <h3
              className="font-heading text-5xl md:text-6xl"
              style={{ color: c.vip ? "#ff4500" : "white" }}
            >
              {c.title}
            </h3>

            <p className="text-white/50 text-sm font-body leading-relaxed">{c.desc}</p>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Perks */}
            <div className="space-y-3">
              {c.perks.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: c.vip ? "#ff4500" : "white" }}
                  />
                  <span className="text-sm text-white/75 font-body">{p}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={c.href}
              target={c.href !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 w-full py-4 rounded-sm overflow-hidden font-heading text-lg tracking-[0.2em] uppercase text-white transition-all duration-300"
              style={
                c.vip
                  ? { background: "#ff4500" }
                  : { border: "1px solid white", color: "white" }
              }
              onMouseEnter={(e) => {
                if (c.vip) (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(255,69,0,0.4)";
                else (e.currentTarget as HTMLElement).style.borderColor = "#ff4500";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                if (!c.vip) (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
              }}
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }}
              />
              Apply for {c.title}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default InviteButtons;
