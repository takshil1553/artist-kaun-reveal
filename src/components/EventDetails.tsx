import { MapPin, Instagram } from "lucide-react";

const EventDetails = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-2xl mx-auto text-center space-y-16">
        {/* Witness Live */}
        <div className="animate-slide-up space-y-4">
          <p className="text-muted-foreground text-sm text-spaced uppercase">Witness "Live" On</p>
          <h2 className="font-heading text-6xl md:text-8xl text-primary">13.06.26</h2>
          <p className="text-muted-foreground text-sm text-spaced uppercase">At</p>
          <h3 className="font-heading text-3xl md:text-5xl text-foreground">
            Monark University,
            <br />
            Ahmedabad
          </h3>
        </div>

        {/* Map */}
        <a
          href="https://maps.google.com/?q=Monark+University+Ahmedabad"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative overflow-hidden rounded-lg border border-border hover:border-primary transition-colors duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5!2d72.5!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMonark+University+Ahmedabad!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="250"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(50%)" }}
              allowFullScreen
              loading="lazy"
              title="Monark University Map"
            />
            <div className="absolute inset-0 bg-background/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="flex items-center gap-2 text-primary font-heading text-xl text-spaced">
                <MapPin className="w-5 h-5" /> Get Directions
              </span>
            </div>
          </div>
          <p className="text-muted-foreground text-xs text-spaced uppercase mt-3">
            Touch to get directions
          </p>
        </a>

        {/* Hashtag */}
        <div className="space-y-6">
          <h2 className="font-heading text-5xl md:text-7xl text-foreground">
            #<span className="text-primary">Artist</span>Kaun ?
          </h2>
          <a
            href="https://www.instagram.com/artist.kaun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm text-wide uppercase">@artist.kaun</span>
          </a>
        </div>

        {/* CTA */}
        <a
          href="/invite"
          className="inline-block bg-gradient-gold text-primary-foreground font-heading text-2xl text-spaced px-12 py-4 rounded-sm hover:scale-105 transition-transform duration-300"
        >
          Get "E X C L U S I V E" Invite
        </a>
      </div>
    </section>
  );
};

export default EventDetails;
