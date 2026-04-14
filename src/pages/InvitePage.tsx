import WhyAttend from "@/components/WhyAttend";
import Schedule from "@/components/Schedule";
import InviteButtons from "@/components/InviteButtons";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const InvitePage = () => {
  return (
    <main className="bg-background min-h-screen">
      <WhyAttend />
      <Schedule />
      <InviteButtons />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default InvitePage;
