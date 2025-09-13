"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#products", label: "Products & Services" },
    { href: "#team", label: "Team" },
    { href: "#stories", label: "Stories" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact Us" },
  ];

  // Track scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "";
      navItems.forEach((item) => {
        if (item.href === "#home") return;
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 80) current = item.href;
        }
      });
      setActiveSection(current || "#home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.querySelector(href);
      section?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
      <div
        className={`flex items-center justify-between px-6 py-3 rounded-3xl shadow-xl backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-green-700 via-green-600 to-green-500"
            : "bg-gradient-to-r from-green-900 via-green-800 to-green-700"
        } w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-[70vw] font-inter`}
      >
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => scrollToSection("#home")}
        >
          <Image
            src="/favicon_color.png"
            alt="Urvanidhi Agritech LLP Logo"
            width={50}
            height={50}
            className="rounded-full drop-shadow-lg"
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-extrabold text-white tracking-wider">
              Urvanidhi
            </span>
            <span className="text-green-200 font-medium text-sm md:text-base tracking-wide">
              Agritech LLP
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-1 justify-end items-center space-x-3 text-white">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`px-4 py-1 rounded-full font-medium transition-all duration-300 relative group hover:scale-105 hover:cursor-pointer`}
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white hover:text-green-200 focus:outline-none hover:cursor-pointer"
          >
            {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 bg-green-800/95 backdrop-blur-md shadow-lg rounded-3xl px-4 py-4 flex flex-col space-y-2 text-white w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-[70vw] mx-auto font-inter">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-white/20 hover:cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;