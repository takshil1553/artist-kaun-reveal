const Schedule = () => {
  return (
    <section className="py-24 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-white/40 text-xs text-spaced uppercase mb-3">When & Where</p>
          <h2 className="font-heading text-5xl md:text-7xl text-white">
            The <span className="text-primary">Night</span>
          </h2>
        </div>

        <div className="text-center mb-16">
          <p className="font-heading text-8xl md:text-[10rem] leading-none shimmer-text">
            13.06.26
          </p>
        </div>

        <div className="relative flex flex-row gap-4">
          <div className="flex-1 p-4 md:p-8 border border-white/10 rounded-sm hover:border-primary/50 hover:bg-primary/5 transition-colors duration-300 group">
            <p className="text-white/40 text-[10px] md:text-xs text-spaced uppercase mb-3">Red Carpet</p>
            <p className="font-heading text-3xl md:text-5xl text-white group-hover:text-primary transition-colors duration-300">
              6:20 PM
            </p>
            <p className="text-white/40 text-[10px] md:text-xs mt-2 uppercase tracking-widest">Onwards</p>
          </div>
          <div className="flex-1 p-4 md:p-8 border border-white/10 rounded-sm hover:border-primary/50 hover:bg-primary/5 transition-colors duration-300 group">
            <p className="text-white/40 text-[10px] md:text-xs text-spaced uppercase mb-3">Show Begins</p>
            <p className="font-heading text-3xl md:text-5xl text-white group-hover:text-primary transition-colors duration-300">
              8:00 PM
            </p>
            <p className="text-white/40 text-[10px] md:text-xs mt-2 uppercase tracking-widest">Onwards</p>
          </div>
        </div>

        <div className="mt-4 p-8 border border-white/10 rounded-sm text-center hover:border-primary/40 transition-colors duration-300">
          <p className="text-white/40 text-xs text-spaced uppercase mb-3">Venue</p>
          <p className="font-heading text-3xl md:text-4xl text-white">
            Monark University
          </p>
          <p className="text-white/50 text-sm mt-1">Ahmedabad</p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
