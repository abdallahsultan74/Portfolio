import { NextResponse } from "next/server";
import type { GithubRepo } from "@/lib/github";

export const revalidate = 60 * 60 * 6; // 6 hours

const OWNER = "abdallahsultan74";
const TARGET_REPOS = [
  "royal_fitness_admin",
  "royal_fitness_app",
  "cogni-advisor-backend",
  "smart_offline_task_manager",
  "eelu_Login",
  "movies_app",
  "islam-i_app",
  "try-before-buy",
] as const;

async function fetchJson<T>(url: string) {
  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    next: { revalidate },
  });

  if (!res.ok) {
    return { ok: false as const, status: res.status };
  }
  return { ok: true as const, data: (await res.json()) as T };
}

type ReadmeResponse = { content: string; encoding: "base64" };

export async function GET() {
  const reposUrl = `https://api.github.com/users/${OWNER}/repos?per_page=100&sort=updated`;
  const reposRes = await fetchJson<GithubRepo[]>(reposUrl);
  if (!reposRes.ok) {
    return NextResponse.json(
      { ok: false, status: reposRes.status, message: "GitHub fetch failed" },
      { status: 502 }
    );
  }

  const repos = reposRes.data;

  const readmes: Record<string, { ok: boolean; contentBase64?: string }> = {};

  await Promise.all(
    TARGET_REPOS.map(async (name) => {
      const readmeUrl = `https://api.github.com/repos/${OWNER}/${name}/readme`;
      const r = await fetchJson<ReadmeResponse>(readmeUrl);
      if (!r.ok) {
        readmes[name] = { ok: false };
        return;
      }
      readmes[name] = { ok: true, contentBase64: r.data.content };
    })
  );

  return NextResponse.json({ ok: true, repos, readmes, targets: TARGET_REPOS });
}

