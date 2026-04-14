const InviteButtons = () => {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-lg mx-auto text-center space-y-10">
        <h2 className="font-heading text-5xl md:text-6xl text-foreground">
          Get <span className="text-primary">Invite!</span>
        </h2>

        <div className="space-y-4">
          <a
            href="#"
            className="block w-full border border-primary text-primary font-heading text-xl text-spaced py-5 rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Are You an Influencer?
          </a>
          <a
            href="#"
            className="block w-full border border-muted-foreground/30 text-foreground font-heading text-xl text-spaced py-5 rounded-sm hover:border-primary hover:text-primary transition-all duration-300"
          >
            Are You a Music Lover?
          </a>
        </div>
      </div>
    </section>
  );
};

export default InviteButtons;
