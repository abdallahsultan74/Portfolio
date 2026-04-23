export type ProjectDefinition = {
  repoName: string;
  displayTitle: string;
  heroImage: string;
  tags: string[];
};

export const projects: ProjectDefinition[] = [
  {
    repoName: "royal_fitness_admin",
    displayTitle: "Royal Fitness Admin Dashboard",
    heroImage:
      "https://placehold.co/1200x800/04071d/cbacf9/png?text=Royal+Fitness+Admin",
    tags: ["React", "TypeScript", "Tailwind", "Supabase"],
  },
  {
    repoName: "royal_fitness_app",
    displayTitle: "Royal Fitness Mobile App",
    heroImage:
      "https://placehold.co/1200x800/0c0e23/cbacf9/png?text=Royal+Fitness+App",
    tags: ["Flutter", "Dart", "Supabase", "Mobile"],
  },
  {
    repoName: "cogni-advisor-backend",
    displayTitle: "Cogni-Advisor Backend",
    heroImage:
      "https://placehold.co/1200x800/04071d/7dd3fc/png?text=Cogni-Advisor+Backend",
    tags: ["TypeScript", "Backend", "API", "Testing"],
  },
  {
    repoName: "smart_offline_task_manager",
    displayTitle: "Smart Offline Task Manager",
    heroImage:
      "https://placehold.co/1200x800/0c0e23/7dd3fc/png?text=Offline+Task+Manager",
    tags: ["Flutter", "Offline-first", "Sync", "Clean Architecture"],
  },
  {
    repoName: "eelu_Login",
    displayTitle: "EELU Login",
    heroImage: "https://placehold.co/1200x800/04071d/cbacf9/png?text=EELU+Login",
    tags: ["Auth", "UI", "Prototype"],
  },
  {
    repoName: "movies_app",
    displayTitle: "Movies App",
    heroImage: "https://placehold.co/1200x800/0c0e23/cbacf9/png?text=Movies+App",
    tags: ["Flutter", "API", "UI"],
  },
  {
    repoName: "islam-i_app",
    displayTitle: "Islamic App",
    heroImage: "https://placehold.co/1200x800/04071d/7dd3fc/png?text=Islamic+App",
    tags: ["Flutter", "Offline", "Localization"],
  },
  {
    repoName: "try-before-buy",
    displayTitle: "Try Before Buy",
    heroImage:
      "https://placehold.co/1200x800/0c0e23/7dd3fc/png?text=Try+Before+Buy",
    tags: ["Product", "Prototype", "Experiment"],
  },
];

