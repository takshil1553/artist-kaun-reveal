import { useNavigate } from "react-router-dom";
import WhyAttend from "@/components/WhyAttend";
import Schedule from "@/components/Schedule";
import InviteButtons from "@/components/InviteButtons";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const InvitePage = () => {
  const navigate = useNavigate();
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Banner */}
      <div className="relative py-20 px-6 text-center border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors duration-300 text-spaced uppercase"
        >
          ← Back
        </button>
        <p className="text-muted-foreground text-xs text-spaced uppercase mb-4 tracking-widest">
          Exclusive Access
        </p>
        <h1 className="font-heading text-6xl md:text-8xl shimmer-text mb-4">
          Get Your Invite
        </h1>
        <p className="text-muted-foreground font-body text-sm max-w-md mx-auto leading-relaxed">
          A night of mystery, music & culture. Be there before the world finds out.
        </p>
      </div>

      <WhyAttend />
      <Schedule />
      <InviteButtons />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default InvitePage;
