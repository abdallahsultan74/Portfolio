"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const skillGroups = [
  {
    category: "Mobile & Web Development",
    skills: ["Flutter", "Dart", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Cybersecurity",
    skills: [
      "Penetration Testing",
      "Vulnerability Analysis",
      "OWASP Top 10",
      "Nmap",
      "Burp Suite",
      "Metasploit",
    ],
  },
  {
    category: "Backend & Quality",
    skills: ["Integration Testing", "API Development", "System Architecture"],
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle title="Skills" subtitle="What I Use" />
      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.category}
            className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-5"
          >
            <h3 className="text-lg font-semibold text-cyan-300">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
