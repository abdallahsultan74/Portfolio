import { Code2, UserRound } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 rounded-3xl border border-slate-800/80 bg-[#050824]/90 px-6 py-8">
      <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-sm text-slate-300">Copyright ©2024 Abdallah Sultan</p>
          <p className="mt-2 text-sm text-slate-400">abdallahsultan792@gmail.com · +2011221923765</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/abdallahsultan74/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet-300/45 bg-violet-500/10 text-violet-200 shadow-[0_0_18px_rgba(203,172,249,0.28)] transition hover:scale-105"
          >
            <UserRound size={18} />
          </a>
          <a
            href="https://github.com/abdallahsultan74"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/45 bg-cyan-500/10 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.25)] transition hover:scale-105"
          >
            <Code2 size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
