"use client";

import { useEffect, useState } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface Props {
  items: Testimonial[];
}

export default function TestimonialCarousel({ items }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % items.length);
    }, 8000);
    return () => clearInterval(id);
  }, [items.length]);

  const current = items[index];

  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <p className="text-sm italic text-slate-700 dark:text-slate-200">
        “{current.quote}”
      </p>
      <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-50">
        {current.name}
      </p>
      <p className="text-xs text-slate-500">{current.role}</p>

      <div className="mt-4 flex items-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index
                ? 'bg-brand-primary'
                : 'bg-slate-300 dark:bg-slate-600'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
