"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const identity = {
  name: "Abdallah Sultan",
  location: "Cairo, Egypt",
  titles: "Flutter Developer | Backend Developer | Cybersecurity Analyst",
  imageUrl: "https://github.com/user-attachments/assets/8d7b0535-a1bc-487a-b1bf-53d8fbf62644",
};

export default function Hero() {
  return (
    <section className="cyber-surface relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(203,172,249,0.2),transparent_62%)]" />
      <motion.div
        className="relative z-10 mx-auto h-24 w-24 overflow-hidden rounded-full border border-violet-300/60 shadow-[0_0_32px_rgba(203,172,249,0.38)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={identity.imageUrl}
          alt="Abdallah Sultan"
          width={96}
          height={96}
          className="h-24 w-24 object-cover"
          priority
        />
      </motion.div>

      <motion.p
        className="relative z-10 mt-5 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        {identity.name} · {identity.location}
      </motion.p>

      <motion.h1
        className="relative z-10 mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15 }}
      >
        Ready to take your digital presence to the next level?
      </motion.h1>

      <motion.p
        className="relative z-10 mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2 }}
      >
        I craft robust mobile and web solutions with a security-first mindset,
        combining modern engineering with practical cybersecurity insight.
      </motion.p>

      <motion.p
        className="relative z-10 mt-5 text-sm text-violet-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.25 }}
      >
        {identity.titles}
      </motion.p>

      <motion.a
        href="mailto:abdallahsultan792@gmail.com"
        className="glow-button relative z-10 mt-8 inline-flex items-center gap-2 rounded-full border border-violet-300/60 bg-gradient-to-r from-violet-500/25 to-cyan-400/20 px-7 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        Contact Me Now <ArrowUpRight size={16} />
      </motion.a>
    </section>
  );
}
