"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Flutter Developer",
  "Backend Developer",
  "Penetration Testing Trainee",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");

  useEffect(() => {
    const fullRole = roles[roleIndex];
    let currentIndex = 0;
    let nextRoleTimeout: ReturnType<typeof setTimeout> | undefined;

    const typingInterval = setInterval(() => {
      currentIndex += 1;
      setTypedRole(fullRole.slice(0, currentIndex));

      if (currentIndex === fullRole.length) {
        clearInterval(typingInterval);
        nextRoleTimeout = setTimeout(() => {
          setTypedRole("");
          setRoleIndex((previousIndex) => (previousIndex + 1) % roles.length);
        }, 1000);
      }
    }, 80);

    return () => {
      clearInterval(typingInterval);
      if (nextRoleTimeout) {
        clearTimeout(nextRoleTimeout);
      }
    };
  }, [roleIndex]);

  return (
    <section className="rounded-3xl border border-cyan-900/40 bg-slate-950/70 p-6 shadow-2xl shadow-cyan-900/20 sm:p-10">
      <motion.p
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400"
      >
        Abdallah Sultan · Cairo, Egypt
      </motion.p>

      <motion.h1
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
      >
        Building modern software and secure digital experiences.
      </motion.h1>

      <motion.p
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-5 text-lg text-slate-300"
      >
        I&apos;m a{" "}
        <span className="font-semibold text-cyan-300">
          {typedRole}
          <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-cyan-300 align-middle" />
        </span>
      </motion.p>

      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          View Projects <ArrowRight size={16} />
        </a>
        <a
          href="/cv-abdallah-sultan.pdf"
          download
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          Download CV <Download size={16} />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          Contact Me <Mail size={16} />
        </a>
      </motion.div>
    </section>
  );
}
