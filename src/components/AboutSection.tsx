"use client";
import Image from 'next/image';
import { User } from 'lucide-react';
import type { Engine } from 'tsparticles-engine';

export default function AboutSection() {
  return (
    <section id="about" className="relative max-w-4xl mx-auto py-24 px-6 flex flex-col md:flex-row items-center gap-10">
      <div className="absolute inset-0 bg-black/40 pointer-events-none rounded-2xl" />
      <div className="flex-shrink-0 relative z-10">
        <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-divider shadow-lg">
          <Image
            src="/profile-bw.jpg"
            alt="Suhaas profile"
            width={160}
            height={160}
            className="object-cover grayscale"
          />
        </div>
      </div>
      <div className="flex-1 text-center md:text-left relative z-10">
        <User className="mx-auto md:mx-0 text-accent mb-4 drop-shadow" size={32} />
        <p className="text-lg text-secondary max-w-xl mx-auto md:mx-0">
          Hi, I'm Suhaas, a passionate software developer who loves building elegant solutions to complex problems. I thrive at the intersection of creativity and technology, always eager to learn and collaborate. Let's create something amazing together.
        </p>
      </div>
    </section>
  );
} 