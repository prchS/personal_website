import { Code, Database, Server, Smartphone, Zap } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Code, description: '5+ years with Python' },
  { name: 'React', icon: Zap, description: 'React enthusiast' },
  { name: 'Backend', icon: Server, description: 'API & server design' },
  { name: 'Databases', icon: Database, description: 'SQL & NoSQL' },
  { name: 'Mobile', icon: Smartphone, description: 'Cross-platform apps' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-4xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-heading font-bold mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {skills.map(skill => (
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
    </section>
  );
} 