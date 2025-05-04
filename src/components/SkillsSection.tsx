import { Code, Database, Server, Smartphone, Zap, Brain, Globe, Wrench, BookOpen, Terminal, Layers, Cloud, GitBranch, FlaskConical, FileText, FileCode } from 'lucide-react';
import { motion } from "framer-motion";

const skills = [
  // Programming Languages
  { name: 'Python', icon: Code, description: '', group: 'Programming Languages' },
  { name: 'SQL', icon: Database, description: '', group: 'Programming Languages' },
  { name: 'C/C++', icon: Code, description: '', group: 'Programming Languages' },
  { name: 'JavaScript', icon: Code, description: '', group: 'Programming Languages' },
  { name: 'Java', icon: Code, description: '', group: 'Programming Languages' },
  { name: 'HTML/CSS', icon: Globe, description: '', group: 'Programming Languages' },

  // Frameworks & Libraries
  { name: 'NumPy', icon: Layers, description: '', group: 'Frameworks & Libraries' },
  { name: 'Pandas', icon: Layers, description: '', group: 'Frameworks & Libraries' },
  { name: 'React.js', icon: Zap, description: '', group: 'Frameworks & Libraries' },
  { name: 'Node.js', icon: Server, description: '', group: 'Frameworks & Libraries' },
  { name: 'Flask', icon: FlaskConical, description: '', group: 'Frameworks & Libraries' },
  { name: 'TensorFlow', icon: Brain, description: '', group: 'Frameworks & Libraries' },
  { name: 'scikit-learn', icon: Brain, description: '', group: 'Frameworks & Libraries' },
  { name: 'Hugging Face', icon: Brain, description: '', group: 'Frameworks & Libraries' },

  // Tools
  { name: 'Git', icon: GitBranch, description: '', group: 'Tools' },
  { name: 'Linux', icon: Terminal, description: '', group: 'Tools' },
  { name: 'Docker', icon: Cloud, description: '', group: 'Tools' },
  { name: 'MongoDB', icon: Database, description: '', group: 'Tools' },
];

const groupOrder = ['Programming Languages', 'Frameworks & Libraries', 'Tools'];

export default function SkillsSection() {
  return (
    <motion.section
      {...{
        id: "skills",
        className: "max-w-4xl mx-auto py-24 px-6"
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-heading font-bold mb-10 text-center">Skills</h2>
      {groupOrder.map(group => (
        <div key={group} className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-accent">{group}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {skills.filter(skill => skill.group === group).map(skill => (
              <div
                key={skill.name}
                className="group flex flex-col items-center p-6 rounded-lg border border-divider bg-background/80 transition-transform duration-200 hover:scale-105 cursor-pointer"
              >
                <skill.icon className="text-accent2 mb-3" size={36} />
                <span className="font-medium text-primary mb-1">{skill.name}</span>
                <span className="text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
                  {skill.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.section>
  );
} 