"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Flutter Developer (Freelance/Projects)",
    description:
      "Developed cross-platform mobile applications using Flutter and Dart with production-ready architecture.",
  },
  {
    title: "Backend Developer (Cogni-Advisor)",
    description:
      "Architected and implemented robust backend systems and APIs with reliable integration-first engineering.",
  },
  {
    title: "Penetration Testing Trainee (DEPI)",
    description:
      "Conducted vulnerability analysis and penetration testing exercises focused on real-world security weaknesses.",
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="mt-16"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
        My <span style={{ color: "#CBACF9" }}>work experience</span>
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {experiences.map((experience) => (
          <article
            key={experience.title}
            className="cyber-surface rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{experience.description}</p>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
