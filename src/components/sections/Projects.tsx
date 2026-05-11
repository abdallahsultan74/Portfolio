"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PinCard } from "@/components/ui/PinCard";
import { projects } from "@/data/projects";
import type { GithubRepo } from "@/lib/github";
import { cn } from "@/lib/utils";
import { inView, reveal, stagger } from "@/components/ui/motion";

const OWNER = "abdallahsultan74";
const TARGET_REPOS = projects.map((project) => project.repoName);
const githubHeaders = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

type ProjectCard = {
  repoName: string;
  title: string;
  summary: string;
  description?: string | null;
  image: string;
  tags: string[];
  ctas: Array<{ label: "View GitHub" | "Check Live Site"; href: string }>;
  meta?: { name: string; url: string; stars?: number; lang?: string; updated?: string };
};

function TechPill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70">
      {label}
    </div>
  );
}

function fmtDate(iso?: string) {
  if (!iso) return undefined;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short" });
}

type ReadmeResult = { ok: boolean; contentBase64?: string };
type ReadmeResponse = { content: string; encoding: "base64" };

async function fetchJson<T>(url: string): Promise<
  { ok: true; data: T } | { ok: false; status: number }
> {
  const res = await fetch(url, { headers: githubHeaders });
  if (!res.ok) return { ok: false, status: res.status };
  return { ok: true, data: (await res.json()) as T };
}

function safeAtobBase64(b64: string) {
  try {
    // GitHub adds newlines in base64 payload sometimes
    const cleaned = b64.replace(/\s/g, "");
    return atob(cleaned);
  } catch {
    return "";
  }
}

function buildSummaryFromReadme(readmeText: string, fallback: string) {
  const lines = readmeText
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  // Prefer first meaningful paragraph (skip titles/badges)
  const skip = (l: string) =>
    l.startsWith("#") ||
    l.startsWith("![") ||
    l.startsWith("[![") ||
    l.startsWith("<") ||
    l.startsWith("---");

  const candidates = lines.filter((l) => !skip(l));
  const first = candidates.find((l) => l.length >= 40) ?? candidates[0];
  const text = (first ?? fallback).replace(/\s+/g, " ").trim();
  return text.length > 160 ? `${text.slice(0, 157)}…` : text;
}

export function Projects() {
  const [repos, setRepos] = useState<GithubRepo[] | null>(null);
  const [readmes, setReadmes] = useState<
    Record<string, ReadmeResult> | null
  >(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      const reposUrl = `https://api.github.com/users/${OWNER}/repos?per_page=100&sort=updated`;
      const reposPromise = fetchJson<GithubRepo[]>(reposUrl);
      const readmesPromise = Promise.all(
        TARGET_REPOS.map(async (name) => {
          const readmeUrl = `https://api.github.com/repos/${OWNER}/${name}/readme`;
          const r = await fetchJson<ReadmeResponse>(readmeUrl);
          if (!r.ok) return [name, { ok: false }] as const;
          return [name, { ok: true, contentBase64: r.data.content }] as const;
        })
      );

      const [reposRes, readmeEntries] = await Promise.all([
        reposPromise,
        readmesPromise,
      ]);

      if (!mounted) return;
      if (reposRes.ok && Array.isArray(reposRes.data)) {
        setRepos(reposRes.data);
      }
      setReadmes(Object.fromEntries(readmeEntries));
    };

    void load().catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  const cards: ProjectCard[] = useMemo(() => {
    return projects.map((p) => {
      const repo = repos?.find((r) => r.name === p.repoName);
      const rm = readmes?.[p.repoName];
      const readmeText = rm?.ok && rm.contentBase64 ? safeAtobBase64(rm.contentBase64) : "";

      const description = repo?.description ?? null;
      const summary = buildSummaryFromReadme(
        readmeText,
        description || `${p.displayTitle} — a GitHub project by Abdallah Sultan.`
      );

      const githubHref = repo?.html_url || `https://github.com/abdallahsultan74/${p.repoName}`;
      const liveHref = repo?.homepage || "";

      const ctas: ProjectCard["ctas"] = [
        { label: "View GitHub", href: githubHref },
        ...(liveHref
          ? ([{ label: "Check Live Site", href: liveHref }] as const)
          : []),
      ];

      return {
        repoName: p.repoName,
        title: p.displayTitle,
        summary,
        description,
        image: p.heroImage,
        tags: p.tags,
        ctas,
        meta: repo
          ? {
              name: repo.name,
              url: repo.html_url,
              stars: repo.stargazers_count ?? 0,
              lang: repo.language ?? undefined,
              updated: fmtDate(repo.pushed_at || repo.updated_at),
            }
          : undefined,
      };
    });
  }, [repos, readmes]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <motion.div
        variants={stagger as any}
        initial="hidden"
        whileInView="show"
        viewport={inView}
      >
        <motion.h2
          variants={reveal as any}
          className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          Featured{" "}
          <span className="text-[var(--accent)]">GitHub projects</span>
        </motion.h2>
        <motion.p
          variants={reveal as any}
          className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base"
        >
          Real data pulled from GitHub (description, stars, language, updates) +
          a refined summary from each README.
        </motion.p>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {cards.map((p, idx) => (
          <motion.div
            key={p.repoName}
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={inView}
            transition={{ duration: 0.7, delay: idx * 0.06, ease: "easeOut" }}
          >
            <PinCard className="h-full">
              <div className="grid h-full gap-6 p-6 md:grid-cols-5">
                <div className="md:col-span-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xl font-semibold text-white">
                        {p.title}
                      </div>
                      {p.meta?.name ? (
                        <div className="mt-1 text-xs text-white/55">
                          Repo:{" "}
                          <a
                            className="underline decoration-white/20 underline-offset-4 hover:decoration-white/40"
                            href={p.meta.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {p.meta.name}
                          </a>
                          <span className="mx-2 text-white/35">•</span>
                          <span className="text-white/60">
                            ⭐ {p.meta.stars ?? 0}
                            {p.meta.lang ? (
                              <>
                                <span className="mx-2 text-white/35">•</span>
                                {p.meta.lang}
                              </>
                            ) : null}
                            {p.meta.updated ? (
                              <>
                                <span className="mx-2 text-white/35">•</span>
                                Updated {p.meta.updated}
                              </>
                            ) : null}
                          </span>
                        </div>
                      ) : (
                        <div className="mt-1 text-xs text-white/45">
                          Loading repo details…
                        </div>
                      )}
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-2">
                      {p.ctas.slice(0, 2).map((c) => (
                        <a
                          key={`${p.repoName}-${c.label}`}
                          href={c.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition hover:bg-white/10"
                        >
                          {c.label}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-white/80">
                    {p.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <TechPill key={`${p.repoName}-${t}`} label={t} />
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs text-white/55">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(203,172,249,0.55)]" />
                    Hover the card for 3D pin tilt
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div
                    className={cn(
                      "relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5",
                      "shadow-[0_0_0_1px_rgba(203,172,249,0.07),0_26px_80px_rgba(0,0,0,0.55)]"
                    )}
                  >
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ rotate: -1.5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    >
                      <Image
                        alt={p.title}
                        src={p.image}
                        fill
                        className="object-cover opacity-90"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(203,172,249,0.22),transparent_55%)]" />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,3,25,0.78),transparent_55%)]" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </PinCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
