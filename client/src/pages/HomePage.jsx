import React from "react";
import { 
  CircleDot,     // For Rings
  Trophy,        // For Necklaces
  Gem,           // For Earrings
  Sliders,       // For Bracelets and Bangles
  Layers,        // For Chains and Pendants
  Boxes,         // For Sets (Heritage Bridal Suites)
} from "lucide-react";

import { useFeaturedProducts } from "../hooks/useFeaturedProducts";
import { HomeHero } from "../components/home/HomeHero";
import { HomeCategories } from "../components/home/HomeCategories";
import { HomeFeaturedSection } from "../components/home/HomeFeaturedSection";
import { HomeConsultation } from "../components/home/HomeConsultation";

const CATEGORIES = [
  { name: "Rings", slug: "Rings", icon: CircleDot, tagline: "Timeless Solitaires & Bands" },
  { name: "Necklaces", slug: "Necklaces", icon: Trophy, tagline: "Graceful Chokers & Collars" },
  { name: "Earrings", slug: "Earrings", icon: Gem, tagline: "Studs, Drops & Chandeliers" },
  { name: "Bracelets and Bangles", slug: "Bracelets and Bangles", icon: Sliders, tagline: "Solid Gold Bangles & Cuffs" },
  { name: "Chains and Pendants", slug: "Chains and Pendants", icon: Layers, tagline: "Artisan Link & Motif Chains" },
  { name: "Sets", slug: "Sets", icon: Boxes, tagline: "Complete Heritage Bridal Suites" },
];



const HomePage = () => {
  const { featuredProducts, loading, error } = useFeaturedProducts();

  return (
    <div className="space-y-20 pb-16">
      <HomeHero />
      <HomeCategories categories={CATEGORIES} />
      <HomeFeaturedSection products={featuredProducts} loading={loading} error={error} />
      <HomeConsultation />
    </div>
  );
};

export default HomePage;
