import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      {...{
        id: "contact",
        className: "max-w-2xl mx-auto py-24 px-6"
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
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
      <div className="flex justify-end gap-8 mt-2 w-full pr-11">
        <a href="https://github.com/prchS" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent2 transition-colors duration-200">
          <Github size={28} />
        </a>
        <a href="https://www.linkedin.com/in/suhaas-parcha-352714363/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent2 transition-colors duration-200">
          <Linkedin size={28} />
        </a>
      </div>
    </motion.section>
  );
} 