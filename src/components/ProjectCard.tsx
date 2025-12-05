import { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  role: string;
  tech: string[];
  description: string;
  impact: string[];
  cta?: ReactNode;
}

export default function ProjectCard({
  title,
  role,
  tech,
  description,
  impact,
  cta
}: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-brand-secondary">
          {role}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-50">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {description}
        </p>
        <ul className="mt-3 space-y-1 text-sm text-slate-700 dark:text-slate-200">
          {impact.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map(t => (
            <span
              key={t}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      {cta && <div className="mt-4">{cta}</div>}
    </div>
  );
}
