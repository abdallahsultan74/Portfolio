"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "Smart Bracelet for Drowning Detection",
    description:
      "A proactive IoT wearable system using multi-sensor integration and machine learning to detect and prevent drowning risks in real-time.",
    tags: ["IoT", "Machine Learning", "Embedded Systems", "Safety"],
    githubLink: "https://github.com/abdallahsultan74",
  },
  {
    title: "Cogni-Advisor Backend",
    description:
      "A robust backend architecture for an academic advisory platform, featuring complex integration tests for user and course management.",
    tags: ["Backend", "Integration Testing", "APIs", "Architecture"],
    githubLink: "https://github.com/abdallahsultan74",
  },
  {
    title: "TriaStack Software House",
    description:
      "A fully responsive corporate portfolio website built with Next.js 14 and Tailwind CSS.",
    tags: ["Next.js 14", "Tailwind CSS", "Responsive UI"],
    githubLink: "https://github.com/abdallahsultan74",
  },
  {
    title: "Vulnerability Assessments",
    description:
      "Manual and automated penetration testing projects identifying and exploiting OWASP Top 10 vulnerabilities.",
    tags: ["Penetration Testing", "OWASP Top 10", "Burp Suite", "Nmap"],
    githubLink: "https://github.com/abdallahsultan74",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle title="Projects" subtitle="Selected Work" />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </motion.section>
  );
}
