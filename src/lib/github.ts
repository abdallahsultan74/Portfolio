export type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  topics?: string[];
  language?: string | null;
  archived?: boolean;
  stargazers_count?: number;
  pushed_at?: string;
  updated_at?: string;
};

export function scoreRepoForKeywords(repo: GithubRepo, keywords: string[]) {
  const hay = [
    repo.name,
    repo.full_name,
    repo.description ?? "",
    ...(repo.topics ?? []),
  ]
    .join(" ")
    .toLowerCase();

  let score = 0;
  for (const k of keywords) {
    if (hay.includes(k.toLowerCase())) score += 1;
  }
  return score;
}

export function pickRepoByPreferredNames(
  repos: GithubRepo[],
  preferredNames?: string[]
) {
  if (!preferredNames?.length) return undefined;
  const set = new Set(preferredNames.map((n) => n.toLowerCase()));
  return repos.find((r) => set.has(r.name.toLowerCase()));
}

