"use client";
import { Typewriter } from 'react-simple-typewriter';
import "../app/landingpage.css";
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[70vh] py-24 text-center"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight text-primary drop-shadow-lg">
          Hi, I'm <span className="text-accent">Suhaas</span>
        </h1>
        <div className="text-xl md:text-2xl font-light text-secondary mb-10 h-8">
          <Typewriter
            words={["Engineer.", "Builder.", "Problem Solver."]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </div>
        <a
          href="#portfolio"
          className="inline-block border border-accent text-accent px-8 py-3 rounded-full font-medium text-lg hover:shadow-[0_0_8px_0_#4fd1c5] hover:bg-accent hover:text-background transition-all duration-200"
        >
          View My Work
        </a>
      </div>
    </section>
  );
} 