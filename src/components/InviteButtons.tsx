import { useState } from "react";

const cards = [
  {
    emoji: "🎥",
    tag: "VVIP Access",
    title: "Influencer",
    desc: "For content creators, artists & tastemakers with an audience.",
    perks: ["Red Carpet Entry", "VVIP Seating", "Exclusive Photo Zone", "Parking Assistance"],
    gold: true,
  },
  {
    emoji: "🎶",
    tag: "General Access",
    title: "Music Lover",
    desc: "For those who live for music and want to be part of a historic night.",
    perks: ["Pre-Allotted Seating", "Parking Assistance", "Complimentary Refreshments"],
    gold: false,
  },
];

const InviteButtons = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-xs text-spaced uppercase mb-3">Apply Now</p>
          <h2 className="font-heading text-5xl md:text-7xl text-foreground">
            Get Your <span className="text-primary">Invite!</span>
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-3 mb-8">
          {cards.map((c, i) => (
            <button
              key={c.title}
              onClick={() => setActive(i)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 font-heading text-base tracking-widest uppercase rounded-sm border transition-all duration-300 ${
                active === i
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-white/20 text-white/60 hover:border-primary/60 hover:text-white"
              }`}
            >
              <span>{c.emoji}</span>
              <span>{c.title}</span>
            </button>
          ))}
        </div>

        {/* Card */}
        <div className={`relative rounded-sm border overflow-hidden transition-all duration-300 ${
          cards[active].gold ? "border-primary/50" : "border-border"
        }`}>

          {/* Top accent bar */}
          <div className={`h-1 w-full ${cards[active].gold ? "bg-gradient-gold" : "bg-border"}`} />

          <div className="p-8 md:p-10">

            {/* Tag */}
            <span className={`inline-block text-[10px] tracking-[0.4em] uppercase font-body px-3 py-1 rounded-full border mb-6 ${
              cards[active].gold
                ? "border-primary/40 text-primary bg-primary/10"
                : "border-border text-muted-foreground"
            }`}>
              {cards[active].tag}
            </span>

            {/* Title */}
            <h3 className={`font-heading text-5xl md:text-6xl mb-3 ${
              cards[active].gold ? "text-primary" : "text-foreground"
            }`}>
              {cards[active].title}
            </h3>

            {/* Desc */}
            <p className="text-white/60 text-sm font-body leading-relaxed mb-8 max-w-sm">
              {cards[active].desc}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-border mb-8" />

            {/* Perks */}
            <div className="grid grid-cols-1 gap-3 mb-10">
              {cards[active].perks.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                    cards[active].gold ? "bg-primary/20" : "bg-muted"
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      cards[active].gold ? "bg-primary" : "bg-muted-foreground"
                    }`} />
                  </div>
                  <span className="text-sm text-white/80 font-body">{p}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#"
              className={`flex items-center justify-center gap-3 w-full py-4 font-heading text-lg tracking-widest uppercase rounded-sm transition-all duration-300 ${
                cards[active].gold
                  ? "bg-gradient-gold text-primary-foreground hover:shadow-[0_0_30px_hsl(40_80%_55%/0.4)] hover:scale-[1.02]"
                  : "border border-white/20 text-white hover:border-primary hover:text-primary"
              }`}
            >
              Apply for {cards[active].title} →
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default InviteButtons;
