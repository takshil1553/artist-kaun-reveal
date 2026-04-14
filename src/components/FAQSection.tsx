import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const influencerFaqs = [
  { q: "Is there a red carpet experience?", a: "Yes. Influencers will have access to an exclusive red carpet entry with a professional photoshoot setup." },
  { q: "Is there a dedicated photo zone?", a: "Yes, a specially curated Influencers Photo Zone will be available for content creation and media capture." },
  { q: "What kind of seating will be provided?", a: "All influencers will receive pre-allotted VVIP seating for the best viewing experience." },
  { q: "Is parking available?", a: "Yes, parking assistance will be provided for a smooth arrival experience." },
  { q: "Will food and beverages be available?", a: "Food & beverages will be available at your seat (chargeable)." },
  { q: "Are any refreshments complimentary?", a: "Yes, each guest will receive a one-time serving of a cold drink and a 500ml water bottle." },
  { q: "What is required for entry?", a: "Entry will be strictly permitted only with a valid pass or confirmed invitation." },
  { q: "Can I choose or change my seat?", a: "All seating is pre-assigned, and seat allotment rights are reserved by Orave Studios & Monark University." },
];

const musicLoverFaqs = [
  { q: "What kind of seating will be provided?", a: "All attendees will receive pre-allotted seating to ensure a seamless experience." },
  { q: "Is parking available?", a: "Yes, parking assistance will be provided at the venue." },
  { q: "Will food and beverages be available?", a: "Food & beverages will be available at your seat (chargeable)." },
  { q: "Are any refreshments complimentary?", a: "Yes, each guest will receive a one-time serving of a cold drink and a 500ml water bottle." },
  { q: "What is required for entry?", a: "Entry will be strictly permitted only with a valid pass or confirmed invitation." },
  { q: "Can I choose or change my seat?", a: "All seating is pre-assigned, and seat allotment rights are reserved by Orave Studios & Monark University." },
];

const FAQSection = () => {
  const [tab, setTab] = useState<"influencer" | "music">("influencer");
  const faqs = tab === "influencer" ? influencerFaqs : musicLoverFaqs;

  return (
    <section className="py-24 px-6 border-t border-white/10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-white/40 text-xs text-spaced uppercase mb-3">Questions</p>
          <h2 className="font-heading text-5xl md:text-7xl text-white">
            FAQ<span className="text-primary">s</span>
          </h2>
        </div>

        <div className="flex border border-white/10 rounded-sm overflow-hidden mb-10">
          <button
            onClick={() => setTab("influencer")}
            className={`flex-1 py-3 font-heading text-sm text-spaced uppercase transition-all duration-300 ${
              tab === "influencer" ? "bg-primary text-primary-foreground" : "text-white/50 hover:text-white"
            }`}
          >
            🎥 Influencer
          </button>
          <button
            onClick={() => setTab("music")}
            className={`flex-1 py-3 font-heading text-sm text-spaced uppercase transition-all duration-300 ${
              tab === "music" ? "bg-primary text-primary-foreground" : "text-white/50 hover:text-white"
            }`}
          >
            🎶 Music Lover
          </button>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-white/10">
              <AccordionTrigger className="text-white font-body text-sm hover:text-primary text-left py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/50 font-body text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
