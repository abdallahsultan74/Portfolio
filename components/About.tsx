"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <motion.section
      id="about"
      className="mt-16 rounded-3xl border border-slate-800/70 bg-slate-950/60 p-6 sm:p-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle title="About Me" subtitle="Who I Am" />
      <p className="max-w-4xl leading-8 text-slate-300">
        I&apos;m Abdallah Sultan, a Computer Science student at EELU (expected graduation
        2026), focused on building performant apps and secure systems. I combine
        software engineering with cybersecurity thinking, currently training with
        DEPI and actively pursuing OSCP to strengthen offensive security and
        vulnerability analysis skills.
      </p>
    </motion.section>
  );
}
