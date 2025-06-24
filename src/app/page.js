"use client";

import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100); // Match progress to 100%
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="transition-opacity duration-500 ease-in opacity-100">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      )}
    </>
  );
}
