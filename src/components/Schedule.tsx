const Schedule = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        <div className="space-y-2">
          <p className="text-muted-foreground text-xs text-spaced uppercase">Date</p>
          <h2 className="font-heading text-6xl md:text-8xl text-primary">13/06/26</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-border rounded-sm p-8 hover:border-primary/50 transition-colors duration-300">
            <p className="text-muted-foreground text-xs text-spaced uppercase mb-2">Red Carpet</p>
            <p className="font-heading text-4xl text-foreground">6:20 PM</p>
            <p className="text-muted-foreground text-sm mt-1">Onwards</p>
          </div>
          <div className="border border-border rounded-sm p-8 hover:border-primary/50 transition-colors duration-300">
            <p className="text-muted-foreground text-xs text-spaced uppercase mb-2">Show</p>
            <p className="font-heading text-4xl text-foreground">8:00 PM</p>
            <p className="text-muted-foreground text-sm mt-1">Onwards</p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-muted-foreground text-xs text-spaced uppercase">At</p>
          <p className="font-heading text-2xl md:text-3xl text-foreground">
            Monark University, Ahmedabad
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
