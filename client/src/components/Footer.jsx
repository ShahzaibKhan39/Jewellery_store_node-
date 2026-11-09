import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Gem, Compass, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-[#EDE7DD] bg-[#FAF8F5] text-[#2C2723]">
      {/* Brand value pillars */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-[#EDE7DD]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 border border-[#EDE7DD]/60">
            <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] flex items-center justify-center text-[#C99A45] shrink-0">
              <Gem className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#27221D]">Certified Purity</h4>
              <p className="text-xs text-[#7D756D] mt-0.5">Hallmarked 18K & 22K solid gold and premium platinum craftsmanship.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 border border-[#EDE7DD]/60">
            <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] flex items-center justify-center text-[#C99A45] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#27221D]">Bespoke Catalog</h4>
              <p className="text-xs text-[#7D756D] mt-0.5">Explore our exclusive catalog pieces and submit personalized design inquiries.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 border border-[#EDE7DD]/60">
            <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] flex items-center justify-center text-[#C99A45] shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#27221D]">Artisanal Heritage</h4>
              <p className="text-xs text-[#7D756D] mt-0.5">Meticulously handcrafted by master goldsmiths with generational expertise.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer navigation */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#FAF6EE] border border-[#E4D8C3] flex items-center justify-center text-[#C99A45]">
              <Sparkles className="w-3.5 h-3.5 fill-[#C99A45]" />
            </div>
            <span className="font-['Cormorant_Garamond'] tracking-[0.2em] text-2xl font-bold uppercase">
              Lumina
            </span>
          </div>
          <p className="text-xs text-[#7D756D] leading-relaxed">
            Curated haute jewelry catalog crafted in warm neutrals and pure metals for timeless living.
          </p>
          <div className="text-[11px] text-[#B38332] bg-[#FAF4E6] px-3 py-1.5 rounded-lg border border-[#EDE7DD] inline-block font-medium">
            * Catalog Portfolio Only &bull; Direct Consultation
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#27221D] mb-4">
            Collections
          </h4>
          <ul className="space-y-2 text-xs text-[#7D756D]">
            <li><Link to="/products?category=Rings" className="hover:text-[#C99A45] transition-colors">Rings & Bands</Link></li>
            <li><Link to="/products?category=Necklaces" className="hover:text-[#C99A45] transition-colors">Necklaces</Link></li>
            <li><Link to="/products?category=Earrings" className="hover:text-[#C99A45] transition-colors">Earrings</Link></li>
            <li><Link to="/products?category=Bracelets and Bangles" className="hover:text-[#C99A45] transition-colors">Bracelets & Bangles</Link></li>
            <li><Link to="/products?category=Chains and Pendants" className="hover:text-[#C99A45] transition-colors">Chains & Pendants</Link></li>
            <li><Link to="/products?category=Sets" className="hover:text-[#C99A45] transition-colors">Bridal & Heritage Sets</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#27221D] mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs text-[#7D756D]">
            <li><Link to="/" className="hover:text-[#C99A45] transition-colors">Home Page</Link></li>
            <li><Link to="/products" className="hover:text-[#C99A45] transition-colors">All Catalog Products</Link></li>
            <li><Link to="/about" className="hover:text-[#C99A45] transition-colors">Our Atelier Story</Link></li>
            <li><Link to="/contact" className="hover:text-[#C99A45] transition-colors">Send Inquiry</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#27221D] mb-4">
            Atelier Contact
          </h4>
          <ul className="space-y-3 text-xs text-[#7D756D]">
            <li className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C99A45] shrink-0" />
              <span>Pakistan Lahore Devstive Market</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#C99A45] shrink-0" />
              <span>tayyab@lumina-jewelry.com</span>
              <span>shahzaib@lumina-jewelry.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C99A45] shrink-0" />
              <span>+92 (300) 415-1320</span>
              <span>+92 (370) 830-0032</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#EDE7DD] bg-[#F4F0E8] py-4 text-center text-xs text-[#7D756D]">
        <p>&copy; {new Date().getFullYear()} LUMINA Haute Joaillerie &bull; Pure Catalog Portfolio &bull; All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
