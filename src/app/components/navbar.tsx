"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <div className="top-0 left-0 w-full bg-customBlue text-white flex justify-between items-center p-4">
      <h1 className="text-4xl font-imperial">Kulsoom&apos;s Portfolio</h1>

      <div className="hidden md:flex space-x-6">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>

      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FiX className="text-3xl cursor-pointer" /> : <FiMenu className="text-3xl cursor-pointer" />}
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 bg-customBlue p-4">
          <Link href="#home" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#accounts" onClick={() => setIsOpen(false)}>Accounts</Link>
        </div>
      )}
    </div>
  );
}