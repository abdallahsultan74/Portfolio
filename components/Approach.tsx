"use client";

import { motion } from "framer-motion";

const phases = [
  {
    title: "Phase 1",
    heading: "Planning & Architecture",
    description:
      "Clarifying product goals, defining scalable architecture, and mapping secure implementation milestones.",
  },
  {
    title: "Phase 2",
    heading: "Development & Progress Update",
    description:
      "Building iteratively with Flutter, Node.js, and security tools while sharing consistent progress updates.",
  },
  {
    title: "Phase 3",
    heading: "Deployment & Testing",
    description:
      "Hardening release quality with deployment automation, integration checks, and security-focused validation.",
  },
];

export default function Approach() {
  return (
    <motion.section
      id="approach"
      className="mt-16"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">My approach</h2>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {phases.map((phase) => (
          <article
            key={phase.heading}
            className="cyber-surface flex min-h-[280px] flex-col justify-between rounded-2xl p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{phase.title}</p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-white">{phase.heading}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{phase.description}</p>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
