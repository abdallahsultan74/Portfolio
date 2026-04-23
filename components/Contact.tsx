"use client";

import { motion } from "framer-motion";
import { Globe, Mail, Phone, UserRound } from "lucide-react";
import SectionTitle from "./SectionTitle";

const contacts = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdallahsultan74/",
    value: "linkedin.com/in/abdallahsultan74",
    icon: UserRound,
  },
  {
    label: "GitHub",
    href: "https://github.com/abdallahsultan74",
    value: "github.com/abdallahsultan74",
    icon: Globe,
  },
  {
    label: "Email",
    href: "mailto:abdallahsultan792@gmail.com",
    value: "abdallahsultan792@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:+201221923765",
    value: "+201221923765",
    icon: Phone,
  },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mt-16 rounded-3xl border border-slate-800/70 bg-slate-950/60 p-6 sm:p-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle title="Contact" subtitle="Let&apos;s Connect" />
      <div className="grid gap-8 lg:grid-cols-2">
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
            required
          />
          <button
            type="submit"
            className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-4">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label === "Phone" || contact.label === "Email" ? undefined : "_blank"}
                rel={contact.label === "Phone" || contact.label === "Email" ? undefined : "noopener noreferrer"}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-cyan-600"
              >
                <Icon size={18} className="text-cyan-300" />
                <div>
                  <p className="text-sm text-slate-400">{contact.label}</p>
                  <p className="font-medium text-slate-100">{contact.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
