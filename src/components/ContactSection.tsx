import { Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-2xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-heading font-bold mb-10 text-center">Contact</h2>
      <form className="flex flex-col gap-6 mb-8">
        <input
          type="text"
          placeholder="Name"
          className="bg-transparent border-0 border-b border-divider focus:border-accent outline-none py-3 px-2 text-primary placeholder-secondary transition-colors"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent border-0 border-b border-divider focus:border-accent outline-none py-3 px-2 text-primary placeholder-secondary transition-colors"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="bg-transparent border-0 border-b border-divider focus:border-accent outline-none py-3 px-2 text-primary placeholder-secondary transition-colors resize-none"
        />
        <button
          type="submit"
          className="self-end border border-accent text-accent px-8 py-2 rounded-full font-medium hover:bg-accent hover:text-background transition-all duration-200"
        >
          Send Message
        </button>
      </form>
      <div className="flex justify-center gap-8">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent2 transition-colors duration-200">
          <Github size={28} />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent2 transition-colors duration-200">
          <Linkedin size={28} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent2 transition-colors duration-200">
          <Twitter size={28} />
        </a>
      </div>
    </section>
  );
} 