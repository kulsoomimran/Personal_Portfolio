"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "education", "experience", "projects"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        const { hash } = window.location;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      };

      handleHashChange();
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-black/95 backdrop-blur-lg border-b border-gray-800/50 shadow-2xl shadow-black/50" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link href="#home" className="group relative">
            <h1 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00FFFF] group-hover:to-[#FF00FF] transition-all duration-300">
              Kulsoom Imran
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] group-hover:w-full transition-all duration-300"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-gray-900/50 backdrop-blur-sm rounded-full px-2 py-2 border border-gray-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2.5 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg text-gray-300 hover:text-white hover:border-[#00FFFF] transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-gray-800/50 mt-2">
            <div className="flex flex-col space-y-2 pt-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-gray-800 to-gray-700 border-l-4 border-[#00FFFF]"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50 border-l-4 border-transparent"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
