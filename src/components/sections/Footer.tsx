"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "@/data/profile";
import { inView, reveal, stagger } from "@/components/ui/motion";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 shadow-[0_0_0_1px_rgba(203,172,249,0.08)] transition hover:text-white hover:shadow-[0_0_0_1px_rgba(203,172,249,0.18),0_0_30px_rgba(203,172,249,0.14)]"
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {children}
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="mx-auto w-full max-w-6xl scroll-mt-10 px-6 pb-10 pt-12"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="card-surface rounded-2xl p-6 ring-glow"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <motion.div
              variants={reveal}
              className="text-lg font-semibold text-white"
            >
              {profile.name}
            </motion.div>
            <motion.div
              variants={reveal}
              className="mt-1 text-sm text-[var(--muted)]"
            >
              {profile.location} • {profile.titles[0]}
            </motion.div>
            <motion.div
              variants={reveal}
              className="mt-4 flex flex-col gap-2 text-sm text-white/70"
            >
              <a
                className="inline-flex items-center gap-2 hover:text-white"
                href={`mailto:${profile.email}`}
              >
                <Mail className="h-4 w-4 text-[var(--accent)]" />
                {profile.email}
              </a>
              <a
                className="inline-flex items-center gap-2 hover:text-white"
                href={`tel:${profile.phone}`}
              >
                <Phone className="h-4 w-4 text-[var(--accent)]" />
                {profile.phone}
              </a>
            </motion.div>
          </div>

          <motion.div variants={reveal} className="flex items-center gap-3">
            <SocialIcon href={profile.linkedin} label="LinkedIn">
              <FaLinkedinIn className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={profile.github} label="GitHub">
              <FaGithub className="h-5 w-5" />
            </SocialIcon>
          </motion.div>
        </div>

        <motion.div
          variants={reveal}
          className="mt-8 border-t border-white/10 pt-4 text-xs text-white/55"
        >
          Copyright ©2024 {profile.name}
        </motion.div>
      </motion.div>
    </footer>
  );
}

