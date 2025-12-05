"use client";

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="#home" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-end gap-0.5 rounded-md bg-slate-900 p-1 dark:bg-slate-100">
            <span className="h-3 w-1 rounded bg-brand-primary"></span>
            <span className="h-5 w-1 rounded bg-brand-secondary"></span>
            <span className="h-7 w-1 rounded bg-brand-accent"></span>
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Bharath Katta
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Bharath_Katta_Resume.pdf"
            className="rounded-full bg-brand-primary px-4 py-1.5 text-sm font-medium text-white shadow hover:bg-blue-700"
          >
            Download Resume
          </a>
          <ThemeToggle />
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span className="mb-1 block h-0.5 w-5 bg-current"></span>
          <span className="mb-1 block h-0.5 w-5 bg-current"></span>
          <span className="block h-0.5 w-5 bg-current"></span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-700 dark:text-slate-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Bharath_Katta_Resume.pdf"
              className="mt-2 rounded-full bg-brand-primary px-4 py-1.5 text-sm font-medium text-white shadow hover:bg-blue-700"
            >
              Download Resume
            </a>
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
