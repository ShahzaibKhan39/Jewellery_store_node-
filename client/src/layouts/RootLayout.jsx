import React, { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F3] text-[#2C2723] font-['Plus_Jakarta_Sans',sans-serif]">
      <ScrollRestoration />
      
      {/* Top promotion banner */}
      <div className="bg-[#27221D] text-[#EFEBE4] text-[11px] py-1.5 px-4 text-center tracking-widest uppercase font-medium">
        Exclusive Catalog Collection &bull; Bespoke Inquiries &amp; Consultations
      </div>

      <div className="pt-3">
        <Navbar />
      </div>

      {/* Main Outlet for children routes */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
