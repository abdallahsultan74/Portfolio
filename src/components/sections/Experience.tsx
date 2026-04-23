"use client";

import { motion } from "framer-motion";
import { Briefcase, Shield, Server } from "lucide-react";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";
import { inView, reveal, stagger } from "@/components/ui/motion";

const icons = [Briefcase, Server, Shield];

export function Experience() {
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
          My{" "}
          <span className="text-[var(--accent)] drop-shadow-[0_0_18px_rgba(203,172,249,0.25)]">
            work experience
          </span>
        </motion.h2>
        <motion.p
          variants={reveal}
          className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base"
        >
          Hands-on roles across mobile, backend, and security—focused on clean
          delivery and measurable outcomes.
        </motion.p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {experience.map((item, idx) => {
          const Icon = icons[idx] ?? Briefcase;
          return (
            <motion.div
              key={`${item.title}-${item.org}`}
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={inView}
              transition={{ duration: 0.7, delay: idx * 0.06, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className={cn("card-surface rounded-2xl p-6 ring-glow")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="mt-1 text-xs font-medium text-white/60">
                    {item.org}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-[var(--accent)] shadow-[0_0_28px_rgba(203,172,249,0.12)]">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

