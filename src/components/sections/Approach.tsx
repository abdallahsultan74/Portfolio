"use client";

import { motion } from "framer-motion";
import { Boxes, CloudUpload, Code2 } from "lucide-react";
import { inView, reveal, stagger } from "@/components/ui/motion";

const phases = [
  {
    title: "Phase 1",
    headline: "Planning & Architecture",
    icon: Boxes,
    body: "Define scope, user journeys, and a scalable architecture that stays maintainable under real-world changes.",
  },
  {
    title: "Phase 2",
    headline: "Development & Progress Update",
    icon: Code2,
    body: "Build with Flutter, Node.js, and security tools—shipping in tight iterations with transparent progress updates.",
  },
  {
    title: "Phase 3",
    headline: "Deployment & Testing",
    icon: CloudUpload,
    body: "Harden the release via tests, performance checks, and secure deployment workflows.",
  },
];

export function Approach() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
      >
        <motion.h2
          variants={reveal}
          className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          My <span className="text-[var(--accent)]">approach</span>
        </motion.h2>
        <motion.p
          variants={reveal}
          className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base"
        >
          A predictable, high-quality delivery process that keeps the UI modern
          and the system reliable.
        </motion.p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {phases.map((p, idx) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={inView}
              transition={{ duration: 0.7, delay: idx * 0.06, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="card-surface group relative min-h-[260px] rounded-2xl p-6 ring-glow"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-xs font-semibold text-white/60">
                  {p.title}
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-[var(--accent)] shadow-[0_0_28px_rgba(203,172,249,0.12)]">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 text-xl font-semibold text-white">
                {p.headline}
              </div>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {p.body}
              </p>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(to_top,rgba(0,3,25,0.85),transparent)]" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

