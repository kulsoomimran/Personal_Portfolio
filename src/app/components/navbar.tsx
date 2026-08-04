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
      const sections = ["home", "about", "skills", "experience", "education", "projects"];
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
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-5xl z-50 transition-all duration-500 rounded-full border ${
      scrolled 
        ? "bg-portfolioBg/95 backdrop-blur-lg border-portfolioMuted/15 shadow-2xl shadow-black/30" 
        : "bg-portfolioCard/30 backdrop-blur-sm border-portfolioMuted/10"
    }`}>
      <div className="w-full px-6 py-2.5 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="group relative">
          <h1 className="text-xl lg:text-2xl font-bold text-portfolioHeading hover:text-portfolioHeading transition-all duration-300">
            Kulsoom Imran
          </h1>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolioHeading group-hover:w-full transition-all duration-300"></div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-portfolioCard/80 backdrop-blur-sm rounded-full px-1.5 py-1 border border-portfolioMuted/15">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-portfolioAccent bg-portfolioBg border border-portfolioMuted/15 shadow-sm"
                    : "text-portfolioBody hover:text-portfolioHeading hover:bg-portfolioBg/45"
                }`}
              >
                {link.label}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-portfolioAccent rounded-full"></div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2.5 bg-portfolioCard/80 backdrop-blur-sm border border-portfolioMuted/15 rounded-lg text-portfolioBody hover:text-portfolioHeading hover:border-portfolioAccent transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden pb-6 border-t border-portfolioMuted/15 mt-2 bg-portfolioBg/95 backdrop-blur-lg rounded-b-3xl px-6">
          <div className="flex flex-col space-y-2 pt-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-portfolioAccent bg-portfolioCard border-l-4 border-portfolioAccent"
                      : "text-portfolioBody hover:text-portfolioHeading hover:bg-portfolioCard/50 border-l-4 border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
