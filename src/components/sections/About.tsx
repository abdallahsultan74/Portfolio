"use client";

import { motion } from "framer-motion";
import { Code2, ShieldCheck, Smartphone } from "lucide-react";
import { profile } from "@/data/profile";
import { inView, reveal, stagger } from "@/components/ui/motion";

const bullets = [
  {
    icon: Smartphone,
    title: "Flutter-first, Product-minded",
    body: "Premium mobile experiences with clean architecture, offline-first patterns, and smooth UX.",
  },
  {
    icon: Code2,
    title: "Backend Integration",
    body: "APIs, auth, and data flows—shipping reliable integrations that scale and stay testable.",
  },
  {
    icon: ShieldCheck,
    title: "Security Awareness",
    body: "Practical security mindset: safer defaults, basic hardening, and thoughtful edge-case handling.",
  },
];

export function About() {
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
          About <span className="text-[var(--accent)]">{profile.name}</span>
        </motion.h2>
        <motion.p
          variants={reveal}
          className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)] md:text-base"
        >
          I’m a <span className="text-white/90">Flutter Developer</span> based in{" "}
          {profile.location}, building robust mobile and web solutions with a
          modern UI, clean delivery, and a security-first mindset.
        </motion.p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {bullets.map((b, idx) => {
          const Icon = b.icon;
          return (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={inView}
              transition={{ duration: 0.7, delay: idx * 0.06, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="card-surface rounded-2xl p-6 ring-glow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-lg font-semibold text-white">{b.title}</div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-[var(--accent)] shadow-[0_0_28px_rgba(203,172,249,0.12)]">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {b.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

