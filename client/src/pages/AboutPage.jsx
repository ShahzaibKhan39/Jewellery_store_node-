import React from "react";
import { PenTool, Flame, Gem, Sparkles, Hammer } from "lucide-react";
import { AboutHeroAndStory } from "../components/about/AboutHeroAndStory";
import { CraftGrid, PurityGrid, ArtisansGrid } from "../components/about/AboutSections";

const CRAFT_STEPS = [
  { icon: PenTool, title: "Design & Sketch", text: "Every piece begins as a hand-drawn sketch, refined until proportion, balance and wearability feel effortless." },
  { icon: Flame, title: "Casting & Forming", text: "Pure metal is melted, cast and hand-formed by our goldsmiths into the shape of the design." },
  { icon: Gem, title: "Stone Setting", text: "Each gemstone is selected and set by hand, secured with care so it sits flawlessly and lasts for generations." },
  { icon: Sparkles, title: "Finishing & Polish", text: "Final shaping, texturing and a high-polish finish bring out the warm glow of the metal." },
];

const ALLMARK_STANDARDS = [
  { purity: "22K", fineness: "916", content: "91.6% pure gold", text: "A rich, deep yellow colour. Our choice for bridal and heritage pieces." },
  { purity: "18K", fineness: "750", content: "75.0% pure gold", text: "A balance of strength and brilliance, ideal for fine jewellery and gemstone settings." },
  { purity: "14K", fineness: "585", content: "58.5% pure gold", text: "Durable and practical for pieces worn every day." },
  { purity: "PT950", fineness: "950", content: "95.0% pure platinum", text: "A naturally white, dense metal that holds fine detail and resists tarnish." },
];

const HALLMARK_POINTS = [
  "Purity is verified before a piece is added to the catalog.",
  "Each piece carries its purity mark, shown on its product page.",
  "Metal weight is recorded so every listing is transparent.",
];

const ARTISANS = [
  { icon: Hammer, title: "Master Goldsmiths", tag: "Generational Craft", text: "Skills in forming, soldering and shaping gold are passed from one generation to the next, learned at the bench." },
  { icon: Gem, title: "Kundan & Meena Artisans", tag: "Heritage Technique", text: "Traditional kundan setting and enamel work keep the character of heritage and bridal jewellery alive." },
  { icon: Sparkles, title: "Setters & Polishers", tag: "Finishing Touch", text: "Specialists in stone setting and polishing give each piece its final brilliance and fine detail." },
];

const SectionHeading = ({ eyebrow, title, text }) => (
  <div className="text-center space-y-2 mb-10 max-w-2xl mx-auto">
    <span className="text-[11px] uppercase tracking-widest text-[#B38332] font-semibold">{eyebrow}</span>
    <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-normal text-[#27221D]">{title}</h2>
    {text && <p className="text-xs sm:text-sm text-[#7D756D] leading-relaxed">{text}</p>}
  </div>
);

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-20">
      <AboutHeroAndStory />
      
      <section>
        <SectionHeading eyebrow="Craftsmanship" title="Made by Hand, Step by Step" text="From the first sketch to the final polish, every piece passes through skilled hands." />
        <CraftGrid steps={CRAFT_STEPS} />
      </section>

      <section>
        <SectionHeading eyebrow="Hallmarking Standards" title="Purity You Can Trust" text="Purity is verified before a piece is added to our catalog archives." />
        <PurityGrid standards={ALLMARK_STANDARDS} points={HALLMARK_POINTS} />
      </section>

      <section>
        <SectionHeading eyebrow="Our Artisans" title="The Hands Behind the Bench" text="Meet the master craftsmen preserving ancient techniques with contemporary precision." />
        <ArtisansGrid artisans={ARTISANS} />
      </section>
    </div>
  );
};

export default AboutPage;
