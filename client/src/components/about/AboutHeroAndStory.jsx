import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Local image folder se import ho rahi hai
import aboutJewelryImg from "../../assets/about-jewelry.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export const AboutHeroAndStory = () => (
  <>
    {/* Header Banner */}
    <div className="rounded-3xl bg-[#F4EFE6] border border-[#E5DACD] p-8 sm:p-12 text-center space-y-3">
      <span className="text-[11px] uppercase tracking-widest text-[#B38332] font-semibold bg-[#FAF4E6] px-3 py-1 rounded-full border border-[#EDE7DD]">
        Our Atelier
      </span>
      <h1 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-normal text-[#27221D]">
        The Story of LUMINA
      </h1>
      <p className="text-xs sm:text-sm text-[#7D756D] max-w-xl mx-auto leading-relaxed">
        Fine jewellery crafted in warm metals and pure gold, made to be treasured and passed on.
      </p>
    </div>

    {/* Brand story */}
    <motion.section {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-4">
      <div className="space-y-5">
        <span className="text-[11px] uppercase tracking-widest text-[#B38332] font-semibold">
          Brand Story
        </span>
        <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl text-[#27221D] leading-tight">
          Jewellery with a Sense of Heritage
        </h2>
        <div className="space-y-4 text-sm text-[#625950] leading-relaxed">
          <p>
            LUMINA was created around a simple belief: fine jewellery should feel personal,
            honest and made to last. We bring together traditional goldsmith skills and a
            modern, understated eye for design.
          </p>
          <p>
            Our collections of rings, necklaces, earrings, bangles, chains and bridal sets are
            shaped in warm gold tones and finished by hand. Each piece is documented with its
            material, purity and weight, so you know exactly what you are looking at.
          </p>
          <p>
            This website is our catalog. Pieces are not sold online. Instead, you can explore
            the collection, send a query about any piece, and talk with our atelier about
            sizing, customisation or a bespoke commission.
          </p>
        </div>
        <Link
          to="/products"
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#B38332] hover:text-[#27221D] group transition-colors"
        >
          <span>Explore the Collection</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="relative">
        <div className="absolute -inset-3 rounded-[2.5rem] border border-[#E5DACD]" aria-hidden="true" />
        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#FAF6EE] border border-[#E5DACD] shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
          {/* Local imported image dynamic layout setup */}
          <img
            src={aboutJewelryImg}
            alt="Fine gold jewellery from the LUMINA atelier"
            className="w-full h-full object-cover block"
          />
        </div>
      </div>
    </motion.section>
  </>
);
