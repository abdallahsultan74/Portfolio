"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Globe, Server, ShieldCheck, Smartphone } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Smart Bracelet for Drowning Detection",
    description:
      "Proactive IoT wearable system using multi-sensor integration and machine learning to identify drowning risks in real time.",
    image: "https://placehold.co/600x360/080B2C/CBACF9?text=Smart+Bracelet+Project",
    techIcons: [Smartphone, BrainCircuit, ShieldCheck],
    cta: "View GitHub",
    link: "https://github.com/abdallahsultan74",
  },
  {
    title: "Cogni-Advisor Backend",
    description:
      "Academic advisory platform backend with complex integration tests and API-focused system architecture.",
    image: "https://placehold.co/600x360/070A24/82A8FF?text=Cogni-Advisor+Backend",
    techIcons: [Server, Globe, ShieldCheck],
    cta: "View GitHub",
    link: "https://github.com/abdallahsultan74",
  },
  {
    title: "TriaStack Software House",
    description:
      "Professional corporate portfolio website built with Next.js and modern Tailwind-based frontend composition.",
    image: "https://placehold.co/600x360/0A0D2E/A5F3FC?text=TriaStack+Website",
    techIcons: [Globe, Smartphone, Server],
    cta: "Check Live Site",
    link: "https://github.com/abdallahsultan74",
  },
  {
    title: "Cybersecurity Assessments",
    description:
      "Practical vulnerability analysis and OWASP Top 10 exploitation projects across modern web application targets.",
    image: "https://placehold.co/600x360/090A26/FCA5A5?text=Cybersecurity+Assessments",
    techIcons: [ShieldCheck, Server, Globe],
    cta: "View GitHub",
    link: "https://github.com/abdallahsultan74",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="mt-16"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
        A small selection of <span style={{ color: "#CBACF9" }}>recent projects</span>
      </h2>

      <div className="mt-8 grid gap-7 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="[perspective:1300px]">
            <motion.article
              whileHover={{ rotateX: 5, rotateY: -5, y: -7 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="cyber-surface h-full rounded-2xl p-5 [transform-style:preserve-3d]"
            >
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={600}
                height={360}
                className="h-44 w-full rounded-xl border border-slate-700/80 object-cover"
              />

              <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{project.description}</p>

              <div className="mt-4 flex items-center gap-2">
                {project.techIcons.map((Icon, index) => (
                  <span
                    key={`${project.title}-icon-${index}`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-violet-300/35 bg-violet-500/10 text-violet-200"
                  >
                    <Icon size={15} />
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
              >
                {project.cta} <ArrowRight size={15} />
              </a>
            </motion.article>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
