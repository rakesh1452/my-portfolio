"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCloudDownloadAlt, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="text-gray-600 body-font sticky top-0 bg-white z-100 shadow-sm">
      <div className="container mx-auto p-5 flex items-center justify-between relative">

        {/* Left: Logo */}
        <Link href="/" className="flex items-center text-gray-900">
          <Image
            src="/assets/pictures/logo.jpg"
            alt="Logo"
            width={100}
            height={47}
            priority
            className="w-[128]"
          />
        </Link>

        {/* Center: Nav Links (desktop) */}
       <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-6 text-base">
        {[
          { href: "#home", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#skills", label: "Skills" },
          { href: "#projects", label: "Projects" },
          { href: "#contact", label: "Contact" }
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group relative text-black transition-colors duration-300 hover:text-red-500"
          >
            {item.label}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>


        {/* Right: CV Download (desktop) + Menu icon (mobile) */}
        <div className="flex items-center space-x-4">
          {/* CV Button (only visible on desktop) */}
          <Link href="/assets/cv/resume.pdf" target="_blank" className="hidden md:inline-flex">
            <button className="bg-gray-100 border-0 py-1 px-3 hover:bg-gray-200 rounded text-base inline-flex items-center">
              Download CV
              <FaCloudDownloadAlt className="text-lg ms-2" />
            </button>
          </Link>

          {/* Hamburger Icon (mobile only) */}
         <button
          className="relative w-10 h-10 md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {/* Hamburger Icon */}
          <FaBars
            className={`absolute inset-0 m-auto text-2xl transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-75 rotate-45" : "opacity-100 scale-100 rotate-0"
            }`}
          />

          {/* Close Icon */}
          <FaTimes
            className={`absolute inset-0 m-auto text-2xl transition-all duration-300 ${
              menuOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-45"
            }`}
          />
        </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="md:hidden px-5 pb-5 flex flex-col gap-4 bg-white shadow text-center">
          <Link href="#home" onClick={handleLinkClick} className="hover:text-red-500">Home</Link>
          <Link href="#about" onClick={handleLinkClick} className="hover:text-red-500">About</Link>
          <Link href="#skills" onClick={handleLinkClick} className="hover:text-red-500">Skills</Link>
          <Link href="#projects" onClick={handleLinkClick} className="hover:text-red-500">Projects</Link>
          <Link href="#contact" onClick={handleLinkClick} className="hover:text-red-500">Contact</Link>
          <Link href="/assets/cv/resume.pdf" target="_blank" onClick={handleLinkClick} className="hover:text-red-500">Download CV</Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
