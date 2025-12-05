interface TimelineItem {
  title: string;
  company: string;
  location: string;
  dateRange: string;
  bullets: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative border-l border-slate-200 pl-5 dark:border-slate-700">
      {items.map((item, index) => (
        <div key={index} className="relative mb-8">
          <span className="absolute -left-[10px] mt-1 h-3 w-3 rounded-full border-2 border-brand-primary bg-slate-50 dark:bg-slate-950" />
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {item.title}
            </h3>
            <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
              {item.company} • {item.location}
            </p>
            <p className="mt-0.5 text-xs text-slate-500">{item.dateRange}</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
              {item.bullets.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
