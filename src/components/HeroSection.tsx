import heroImage from "@/assets/teaser-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Artist Kaun teaser"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-text-reveal">
        <p className="text-muted-foreground text-sm text-spaced uppercase mb-6 font-body">
          Teaser Preview
        </p>
        <h1 className="font-heading text-7xl md:text-9xl lg:text-[12rem] leading-none tracking-tight text-foreground">
          <span className="shimmer-text">#ARTIST</span>
          <br />
          <span className="text-primary animate-pulse-glow">KAUN?</span>
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
