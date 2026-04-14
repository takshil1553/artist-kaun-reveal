const reasons = [
  { number: "01", emoji: "👁", title: "Be the First to Witness the Reveal", desc: 'An exclusive moment where "Artist Kaun?" finally gets answered — live, raw, and unforgettable.' },
  { number: "02", emoji: "🎶", title: "Experience Music Like Never Before", desc: "Not just a performance — a curated sonic journey designed to hit emotions, visuals, and energy all at once." },
  { number: "03", emoji: "🚀", title: "Be Part of Something That Will Go Viral", desc: "This isn't just a show, it's a moment. The kind influencers capture, post, and become a part of before the world catches on." },
  { number: "04", emoji: "🤝", title: "Network, Vibe & Belong", desc: "A room full of creators, artists, and tastemakers — connect, collaborate, and be seen where culture is being built." },
];

const WhyAttend = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-white/40 text-xs text-spaced uppercase mb-3">Reasons</p>
          <h2 className="font-heading text-5xl md:text-7xl text-white">
            Why You Should <span className="text-primary">Attend?</span>
          </h2>
        </div>

        <div className="grid gap-4">
          {reasons.map((r) => (
            <div
              key={r.number}
              className="group flex gap-6 p-6 border border-white/10 rounded-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <span className="font-heading text-4xl text-primary/40 group-hover:text-primary/70 transition-colors duration-300 leading-none mt-1 shrink-0">
                {r.number}
              </span>
              <div>
                <h3 className="font-heading text-2xl md:text-3xl text-white mb-2">
                  {r.title} <span className="text-xl">{r.emoji}</span>
                </h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
