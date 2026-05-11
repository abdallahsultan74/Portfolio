"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { GlowButton } from "@/components/ui/Button";
import { Spotlight } from "@/components/ui/Spotlight";
import { reveal, stagger } from "@/components/ui/motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spotlight className="opacity-80" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-18 pt-24 md:pb-22 md:pt-28">
        <motion.div
          variants={stagger as any}
          initial={false}
          animate="show"
          className="mx-auto grid max-w-5xl items-center gap-10 text-center md:grid-cols-12 md:text-left"
        >
          <div className="md:col-span-8">
            <motion.div
              variants={reveal as any}
              className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 ring-glow md:mx-0"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(203,172,249,0.55)]" />
              <span>
                {profile.name} • {profile.location} • {profile.titles[0]}
              </span>
            </motion.div>

            <motion.h1
              variants={reveal as any}
              className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl"
            >
              Ready to take your digital presence to the{" "}
              <span className="text-gradient">next level</span>?
            </motion.h1>

            <motion.p
              variants={reveal as any}
              className="mt-5 text-pretty text-base leading-7 text-[var(--muted)] md:text-lg"
            >
              I build robust mobile and web solutions with a clean architecture,
              modern UI, and a security-first mindset.
            </motion.p>

            <motion.div
              variants={reveal as any}
              className="mt-8 flex flex-col items-center justify-center gap-3 md:justify-start md:items-start sm:flex-row"
            >
              <GlowButton href="#contact" className="">
                <span className="inline-flex items-center gap-2">
                  Contact Me Now
                  <ArrowRight className="h-4 w-4 opacity-90" />
                </span>
              </GlowButton>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-5 py-3 text-sm font-medium text-white/80 ring-1 ring-white/10 transition hover:bg-white/5 hover:text-white"
              >
                View GitHub
              </a>
            </motion.div>
          </div>

          <div className="md:col-span-4">
            <motion.div
              variants={reveal as any}
              className="relative mx-auto aspect-square w-[240px] max-w-full md:mx-0 md:w-[320px]"
              whileHover={{ rotate: 0.3, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(203,172,249,0.28),transparent_60%)] blur-xl" />
              <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_70%_20%,rgba(125,211,252,0.18),transparent_55%)] blur-xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-[#05081f] shadow-[0_0_0_1px_rgba(203,172,249,0.12),0_30px_90px_rgba(0,0,0,0.55)]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(203,172,249,0.14),transparent_45%)]" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-[rgba(203,172,249,0.20)]" />
                <Image
                  src={`${basePath}/me.png`}
                  alt="Abdallah Sultan"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 240px, 320px"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
