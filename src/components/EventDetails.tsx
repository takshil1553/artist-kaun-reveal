import { useRef, useState, useEffect } from "react";
import { MapPin, Instagram, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

const TeaserPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const v = videoRef.current;
        if (!v) return;
        if (entry.isIntersecting) {
          v.muted = false;
          v.play()
            .then(() => { setPlaying(true); setStarted(true); setMuted(false); })
            .catch(() => {
              v.muted = true;
              v.play().then(() => { setPlaying(true); setStarted(true); setMuted(true); }).catch(() => {});
            });
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!started) setStarted(true);
    if (v.paused) { v.muted = false; v.play(); setPlaying(true); setMuted(false); }
    else { v.pause(); setPlaying(false); }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const handleFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
  };

  return (
    <div className="w-full" ref={containerRef}>
      <p className="text-white/30 text-[9px] tracking-[0.6em] uppercase font-body mb-4 text-center">Watch Teaser</p>
      <div className="relative group border border-white/10 hover:border-primary/40 transition-colors duration-500 overflow-hidden">
        <video
          ref={videoRef}
          src="/teaser.mp4"
          className="w-full aspect-video object-cover"
          playsInline
          loop
        />

        {/* Overlay when paused */}
        {!playing && <div className="absolute inset-0 bg-black/50" />}

        {/* Big play button */}
        {!playing && (
          <button onClick={handlePlay} className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-primary flex items-center justify-center"
              style={{ boxShadow: "0 0 50px rgba(255,69,0,0.5)" }}
            >
              <Play className="w-9 h-9 md:w-11 md:h-11 text-primary fill-primary ml-1" />
            </div>
          </button>
        )}

        {/* Controls — always visible on hover */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-4 py-3 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={handlePlay} className="text-white/80 hover:text-primary transition-colors">
            {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
          </button>
          <button onClick={toggleMute} className="text-white/80 hover:text-primary transition-colors">
            {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <button onClick={handleFullscreen} className="text-white/80 hover:text-primary transition-colors ml-auto">
            <Maximize className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const EventDetails = () => {
  return (
    <section className="relative bg-black px-4 md:px-6 pb-32 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-4xl mx-auto text-center space-y-24 pt-24">

        {/* Teaser Player */}
        <TeaserPlayer />

      <div className="w-full">
          <a
            href="/invite"
            className="group relative inline-flex items-center justify-center w-full py-5 overflow-hidden rounded-sm"
            style={{ background: "linear-gradient(135deg, #ff4500, #cc3300)", boxShadow: "0 0 40px rgba(255,69,0,0.35)" }}
          >
            {/* Shimmer sweep */}
            <span
              className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }}
            />

            {/* Scale on hover */}
            <span className="relative flex items-center gap-3 font-heading text-xl md:text-2xl tracking-[0.3em] uppercase text-white group-hover:scale-105 transition-transform duration-300">
              Get Exclusive Invite
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <p className="text-white/25 text-[9px] tracking-[0.4em] uppercase font-body text-center mt-3">Limited Spots Available</p>
        </div>

        {/* Date & Venue */}
        <div className="space-y-6">
          <p className="text-white/50 text-[10px] tracking-[0.5em] uppercase font-body">
            Witness Live On
          </p>
          <h2
            className="font-heading text-7xl md:text-9xl text-primary leading-none"
            style={{ textShadow: "0 0 60px rgba(255,69,0,0.3)" }}
          >
            13.06.26
          </h2>
          <div className="w-12 h-px bg-primary/40 mx-auto" />
          <p className="text-white/50 text-[10px] tracking-[0.5em] uppercase font-body">At</p>
          <h3 className="font-heading text-3xl md:text-5xl text-white leading-tight">
            Monark University
            <br />
            <span className="text-white/50 text-2xl md:text-3xl">Ahmedabad</span>
          </h3>
        </div>

        {/* Map */}
        <a
          href="https://maps.google.com/?q=Monark+University+Ahmedabad"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative overflow-hidden border border-white/10 hover:border-primary/50 transition-colors duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5!2d72.5!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMonark+University+Ahmedabad!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="220"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(80%) brightness(0.4)" }}
              allowFullScreen
              loading="lazy"
              title="Monark University Map"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="flex items-center gap-2 text-primary font-heading text-lg text-spaced">
                <MapPin className="w-4 h-4" /> Get Directions
              </span>
            </div>
          </div>
          <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase mt-3 font-body">
            Tap to get directions
          </p>
        </a>

        {/* Hashtag */}
        <div className="space-y-5">
          <h2 className="font-heading text-5xl md:text-7xl text-white/90">
            #<span className="text-primary">Artist</span>Kaun?
          </h2>
          <a
            href="https://www.instagram.com/artist.kaun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors duration-300"
          >
            <Instagram className="w-4 h-4" />
            <span className="text-xs tracking-[0.3em] uppercase font-body">@artist.kaun</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default EventDetails;
