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
    <header className="text-gray-600 body-font sticky top-0 bg-white z-10 shadow-sm">
      <div className="container mx-auto p-5 flex items-center justify-between relative">

        {/* Left: Logo */}
        <Link href="/" className="flex items-center text-gray-900">
          <Image
            src="/assets/pictures/logo.png"
            alt="Logo"
            width={100}
            height={100}
            priority
            className="w-[128]"
          />
        </Link>

        {/* Center: Nav Links (desktop) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-6 text-base">
          <Link href="#home" className="hover:text-red-500">Home</Link>
          <Link href="#about" className="hover:text-red-500">About</Link>
          <Link href="#skills" className="hover:text-red-500">Skills</Link>
          <Link href="#projects" className="hover:text-red-500">Projects</Link>
          <Link href="#contact" className="hover:text-red-500">Contact</Link>
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
            className="text-2xl md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
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
