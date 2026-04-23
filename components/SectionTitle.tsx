interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <header className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        {subtitle}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    </header>
  );
}
