"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#products", label: "Products & Services" },
    { href: "#team", label: "Team" },
    { href: "#stories", label: "Stories" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link
          href="#hero"
          className="flex items-center space-x-3 whitespace-nowrap flex-shrink-0"
        >
          <Image
            src="/favicon_color.png"
            alt="Urvanidhi Agritech LLP Logo"
            width={55}
            height={55}
            className="drop-shadow-md"
          />
          <span className="text-2xl md:text-3xl font-extrabold tracking-wide text-green-800 font-serif">
            Urvanidhi <span className="text-green-600">Agritech</span>{" "}
            <span className="text-gray-500 text-sm font-medium">LLP</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-1 justify-end space-x-4 text-gray-700 font-medium text-base font-sans">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative whitespace-nowrap px-3 py-1 rounded-md transition-colors duration-300 hover:bg-green-200 hover:text-green-900"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Tablet & Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-700 hover:text-green-800 focus:outline-none"
          >
            {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="flex flex-col px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-md text-gray-700 font-medium text-base hover:bg-green-200 hover:text-green-900 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
