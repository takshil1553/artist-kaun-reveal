import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto space-y-16">
        <h2 className="font-heading text-5xl md:text-6xl text-center text-foreground">
          FAQs for <span className="text-primary">Invitees</span>
        </h2>

        {/* Influencers */}
        <div>
          <h3 className="font-heading text-3xl text-primary text-spaced mb-6">For Influencers</h3>
          <Accordion type="single" collapsible className="space-y-2">
            {influencerFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`inf-${i}`} className="border-border">
                <AccordionTrigger className="text-foreground font-body text-sm hover:text-primary text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Music Lovers */}
        <div>
          <h3 className="font-heading text-3xl text-primary text-spaced mb-6">For Music Lovers</h3>
          <Accordion type="single" collapsible className="space-y-2">
            {musicLoverFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`ml-${i}`} className="border-border">
                <AccordionTrigger className="text-foreground font-body text-sm hover:text-primary text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
