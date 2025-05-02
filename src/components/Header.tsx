"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-background/80 backdrop-blur border-b border-divider shadow-md">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-heading font-bold tracking-tight text-primary">Suhaas</a>
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-secondary hover:text-accent transition-colors duration-200 px-1 py-0.5 focus:outline-none focus:text-accent"
            >
              {link.name}
              <span className="block h-0.5 w-0 group-hover:w-full transition-all bg-accent absolute left-0 bottom-0"></span>
            </a>
          ))}
        </div>
        <button
          className="md:hidden p-2 text-secondary hover:text-accent focus:outline-none focus:text-accent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 border-t border-divider px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondary hover:text-accent text-lg py-1 focus:outline-none focus:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
} 