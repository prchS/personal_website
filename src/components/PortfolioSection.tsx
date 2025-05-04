import { useState } from 'react';
import { ExternalLink, Github, Globe, Smartphone, Brain, Code2 } from 'lucide-react';
import { motion } from "framer-motion";

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'AI', value: 'ai' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Open Source', value: 'oss' },
];

const projects = [
  {
    name: 'Chest X-ray Analysis',
    blurb: 'AI-powered chest X-ray analysis web app. Built with SvelteKit, Node.js, and Python. Capstone project at McMaster University.',
    tech: [Brain, Globe, Code2],
    type: 'ai',
    github: 'https://github.com/prchS/4ZP6A-capstone',
    live: 'https://4zp6a-capstone.vercel.app/',
  },
  {
    name: 'Fire Image Classification',
    blurb: 'Machine learning project for classifying fire vs. non-fire images. Compared CNN, SVM, and KNN.',
    tech: [Brain, Code2],
    type: 'ai',
    github: 'https://github.com/prchS/Fire-Image-Classification',
    live: '',
  },
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter);

  return (
    <motion.section
      {...{
        id: "portfolio",
        className: "max-w-5xl mx-auto py-24 px-6"
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-heading font-bold mb-10 text-center">Portfolio</h2>
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-5 py-2 rounded-full border border-divider text-secondary hover:text-accent hover:border-accent transition-colors duration-200 text-sm font-medium ${filter === f.value ? 'bg-accent/10 text-accent border-accent' : ''}`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.map(project => (
          <div
            key={project.name}
            className="group flex flex-col border border-divider rounded-xl p-6 bg-background/80 transition-shadow duration-200 hover:shadow-[0_0_0_2px_#4fd1c5]"
          >
            <h3 className="font-heading text-xl font-bold mb-2 text-primary">{project.name}</h3>
            <p className="text-secondary text-sm mb-4">{project.blurb}</p>
            <div className="flex gap-2 mb-4">
              {project.tech.map((Icon, i) => (
                <Icon key={i} className="text-accent2" size={20} />
              ))}
            </div>
            <div className="mt-auto flex gap-3">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent2 flex items-center gap-1 text-sm">
                  <ExternalLink size={16} /> Live
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent2 flex items-center gap-1 text-sm">
                  <Github size={16} /> GitHub
                </a>
              )}
            </div>
          </div>
        ))} 
      </div>
    </motion.section>
  );
} 