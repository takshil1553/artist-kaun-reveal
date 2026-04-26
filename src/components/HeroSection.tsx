import { useEffect, useRef, useState } from "react";

const TARGET = new Date("2026-06-13T20:00:00");

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#@$%&";

function useGlitch(text: string, trigger: boolean) {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    const total = 18;
    const id = setInterval(() => {
      if (frame >= total) { setDisplay(text); clearInterval(id); return; }
      setDisplay(
        text.split("").map((ch, i) =>
          i < (frame / total) * text.length
            ? ch
            : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
        ).join("")
      );
      frame++;
    }, 40);
    return () => clearInterval(id);
  }, [trigger, text]);
  return display;
}

const Pad = (n: number) => String(n).padStart(2, "0");

export default function HeroSection() {
  const [time, setTime] = useState(getTimeLeft());
  const [revealed, setRevealed] = useState(false);
  const [lineW, setLineW] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const artistText = useGlitch("#ARTIST", revealed);
  const kaunText = useGlitch("KAUN?", revealed);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setRevealed(true), 600);
    const t2 = setTimeout(() => setLineW(100), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vy: -(Math.random() * 0.4 + 0.1),
      vx: (Math.random() - 0.5) * 0.2,
      o: Math.random() * 0.5 + 0.1,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,69,0,${p.o})`;
        ctx.fill();
        p.y += p.vy;
        p.x += p.vx;
        if (p.y < 0) { p.y = canvas.height; p.x = Math.random() * canvas.width; }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

      {/* BG Image */}
      <div className="absolute inset-0">
        <img
          src="/01-banner.jpg"
          // src="/AK1.jpg"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.65) contrast(1.1) saturate(0.7)" }}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />

      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 3px)",
          backgroundSize: "100% 3px",
        }}
      />

      {/* Top — Orave label — inside video */}
      <div className="absolute top-8 w-full text-center z-10">
        <p className="text-white text-xs md:text-sm tracking-[0.5em] uppercase font-body animate-text-reveal"
          style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards", textShadow: "0 0 20px rgba(255,0,0,0.8)" }}>
          {/* <span className="text-primary">Orave Studios</span> <span className="text-white/60">Presents</span> */}
        </p>
      </div>

      {/* Center — Main title */}
      <div className="relative z-10 text-center px-4 w-full animate-text-reveal"
        style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
        <h1 className="font-heading leading-[0.88] tracking-tight select-none">
          <span
            className="block text-[clamp(5.5rem,24vw,15rem)] text-white"
          >
            {artistText}
          </span>
          <span
            className="block text-[clamp(5.5rem,24vw,15rem)] text-primary"
            style={{ textShadow: "0 0 80px rgba(255,69,0,0.5), 0 0 160px rgba(255,69,0,0.2)" }}
          >
            {kaunText.slice(0, -1)}<span className="text-white">?</span>
          </span>
        </h1>
      </div>

      {/* Bottom — line + subtitle + countdown */}
      <div className="absolute bottom-0 w-full z-10 flex flex-col items-center gap-4 pb-8 px-6">

        {/* Gold line */}
        <div
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-[1.8s] ease-out"
          style={{ width: `${lineW}%`, maxWidth: "400px" }}
        />

        {/* Subtitle */}
        <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-body animate-text-reveal"
          style={{ animationDelay: "1.4s", opacity: 0, animationFillMode: "forwards" }}>
          The Identity Drops &nbsp;·&nbsp; 13 · 06 · 26
        </p>

        {/* Countdown */}
        <div className="animate-text-reveal w-full"
          style={{ animationDelay: "1.8s", opacity: 0, animationFillMode: "forwards" }}>
          <div className="flex items-end justify-center gap-3 md:gap-8">
            {[
              { val: time.d, label: "Days" },
              { val: time.h, label: "Hours" },
              { val: time.m, label: "Mins" },
              { val: time.s, label: "Secs" },
            ].map(({ val, label }, i) => (
              <div key={label} className="flex items-end gap-3 md:gap-8">
                {i > 0 && <span className="font-heading text-2xl md:text-4xl text-primary/40 mb-3">:</span>}
                <div className="flex flex-col items-center">
                  <span className="font-heading text-4xl md:text-6xl text-white tabular-nums"
                    style={{ textShadow: "0 0 30px rgba(255,69,0,0.3)" }}>
                    {Pad(val)}
                  </span>
                  <span className="text-white/25 text-[8px] tracking-[0.3em] uppercase font-body mt-1">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
