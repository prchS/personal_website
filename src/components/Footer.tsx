import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-divider py-6 text-center text-secondary text-sm flex items-center justify-center gap-4 relative">
      <span>© 2025 Suhaas</span>
      <a
        href="#home"
        className="absolute right-6 top-1/2 -translate-y-1/2 text-secondary hover:text-accent transition-colors duration-200"
        aria-label="Back to top"
      >
        <ArrowUp size={22} />
      </a>
    </footer>
  );
} 