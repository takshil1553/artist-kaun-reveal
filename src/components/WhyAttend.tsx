import teaserShoot from "@/assets/teaser-shoot.jpg";

const reasons = [
  {
    emoji: "👁",
    title: "Be the First to Witness the Reveal",
    desc: 'An exclusive moment where the question "Artist Kaun?" finally gets answered — live, raw, and unforgettable.',
  },
  {
    emoji: "🎶",
    title: "Experience Music Like Never Before",
    desc: "Not just a performance — a curated sonic journey designed to hit emotions, visuals, and energy all at once.",
  },
  {
    emoji: "🚀",
    title: "Be Part of Something That Will Go Viral",
    desc: "This isn't just a show, it's a moment. The kind influencers capture, post, and become a part of before the world catches on.",
  },
  {
    emoji: "🤝",
    title: "Network, Vibe & Belong",
    desc: "A room full of creators, artists, and tastemakers — connect, collaborate, and be seen where culture is being built.",
  },
];

const WhyAttend = () => {
  return (
    <section className="relative">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={teaserShoot}
          alt="Teaser shoot"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-5xl md:text-7xl text-center shimmer-text mb-16">
            Why You Should Attend?
          </h2>

          <div className="space-y-12">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="border-l-2 border-primary/30 pl-6 hover:border-primary transition-colors duration-500"
              >
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                  {i + 1}. {r.title} {r.emoji}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
