import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Sparkles, Menu, X, Search, PhoneCall } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Floating rounded luxury bar inspired by the LUMINA UI */}
      <nav className="bg-white/90 backdrop-blur-md border border-[#EDE7DD] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-5 py-3 flex items-center justify-between transition-all duration-300">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#E4D8C3] flex items-center justify-center text-[#C99A45] group-hover:rotate-12 transition-transform duration-300">
            <Sparkles className="w-4 h-4 fill-[#C99A45]" />
          </div>
          <span className="font-['Cormorant_Garamond'] tracking-[0.22em] text-2xl font-bold text-[#27221D] uppercase">
            Lumina
          </span>
          <span className="hidden sm:inline-block text-[9px] uppercase tracking-widest text-[#B38332] font-semibold bg-[#F7F2E7] px-2 py-0.5 rounded-full ml-1 border border-[#E9DFC8]">
            Catalog
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors tracking-wide relative py-1 ${
                  isActive
                    ? "text-[#C99A45] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C99A45] after:rounded-full"
                    : "text-[#625950] hover:text-[#27221D]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Search input & Quick Inquiry CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#F8F6F1] border border-[#E8DFD3] text-xs rounded-full pl-8 pr-4 py-2 w-48 text-[#27221D] placeholder-[#9E9488] focus:outline-none focus:border-[#C99A45] focus:ring-1 focus:ring-[#C99A45] transition-all"
            />
            <Search className="w-3.5 h-3.5 text-[#9E9488] absolute left-3 top-1/2 -translate-y-1/2" />
          </form>

          <Link
            to="/contact"
            className="flex items-center gap-1.5 text-xs font-medium bg-[#C99A45] hover:bg-[#B38332] text-white px-4 py-2 rounded-full transition-all shadow-sm shadow-[#C99A45]/30 active:scale-95"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Inquire Now</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-[#F8F6F1] text-[#27221D] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white/95 backdrop-blur-md border border-[#EDE7DD] rounded-3xl p-5 shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F8F6F1] border border-[#E8DFD3] text-sm rounded-full pl-9 pr-4 py-2.5 text-[#27221D] focus:outline-none focus:border-[#C99A45]"
            />
            <Search className="w-4 h-4 text-[#9E9488] absolute left-3.5 top-1/2 -translate-y-1/2" />
          </form>

          <div className="flex flex-col gap-2 pt-1 border-t border-[#F2ECE1]">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#FAF4E6] text-[#B38332] font-semibold"
                      : "text-[#625950] hover:bg-[#F8F6F1] hover:text-[#27221D]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center text-sm font-medium bg-[#C99A45] hover:bg-[#B38332] text-white py-2.5 rounded-full transition-all shadow-sm"
          >
            Send Inquiry
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
