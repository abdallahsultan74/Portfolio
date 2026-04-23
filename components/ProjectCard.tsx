import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubLink,
}: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-5 transition hover:-translate-y-1 hover:border-cyan-700/60">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-cyan-900/60 bg-cyan-900/20 px-3 py-1 text-xs font-medium text-cyan-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
      >
        View Repository <ArrowUpRight size={16} />
      </a>
    </article>
  );
}
