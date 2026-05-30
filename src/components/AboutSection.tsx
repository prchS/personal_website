"use client";
import { User } from 'lucide-react';
import type { Engine } from 'tsparticles-engine';
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      {...{
        id: "about",
        className: "relative max-w-4xl mx-auto py-24 px-6 flex flex-col md:flex-row items-center gap-10"
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none rounded-2xl" />
      <div className="flex-shrink-0 relative z-10">
        {/* <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-divider shadow-lg">
          <Image
            src="/profile-bw.jpg"
            alt="Suhaas profile"
            width={160}
            height={160}
            className="object-cover grayscale"
          />
        </div> */}
      </div>
      <div className="flex-1 text-center md:text-left relative z-10">
        <User className="mx-auto md:mx-0 text-accent mb-4 drop-shadow" size={32} />
        <p className="text-lg text-secondary max-w-xl mx-auto md:mx-0">
        I’m Suhaas, a Computer Science graduate from McMaster University focused on machine learning, full stack development, and end-to-end software systems. Within machine learning, I work across deep learning and applied modeling, spanning areas like natural language processing, computer vision, and real-world domains such as healthcare and automation. I enjoy building through the full pipeline, from data processing and model training to deployment and production integration. I’m also interested in automation, scalable systems, and open source collaboration, and I like turning complex ideas into practical, impactful tools.
        </p>
      </div>
    </motion.section>
  );
} 