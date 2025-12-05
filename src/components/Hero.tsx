"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20"
    >
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-medium uppercase tracking-wide text-brand-secondary">
          Data Analyst • SQL • Python • Power BI • Tableau
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          Data Analyst Turning 2M+ Rows into Business Decisions
        </h1>
        <p className="max-w-xl text-base text-slate-600 dark:text-slate-300">
          I&apos;m <span className="font-semibold">Bharath Katta</span>, a
          Dallas-based data analyst with 3+ years of experience building
          automated reporting solutions, predictive models, and interactive
          dashboards that improve forecast accuracy, reduce manual work, and
          drive strategic decisions.
        </p>
        <ul className="grid gap-2 text-sm text-slate-700 dark:text-slate-200 sm:grid-cols-2">
          <li>• 3+ years of analytics &amp; BI experience</li>
          <li>• Improved forecast accuracy by 25%</li>
          <li>• 2M+ record datasets from ERP &amp; WMS</li>
          <li>• Operational efficiency gains up to 40%</li>
        </ul>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-brand-primary px-6 py-2 text-sm font-medium text-white shadow hover:bg-blue-700"
          >
            View My Projects
          </a>
          <a
            href="/Bharath_Katta_Resume.pdf"
            className="rounded-full border border-slate-300 px-6 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        className="flex-1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="relative mx-auto h-64 w-64 max-w-xs rounded-3xl bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent p-[2px] shadow-lg md:h-72 md:w-72">
          <div className="flex h-full w-full flex-col justify-between rounded-3xl bg-slate-900 p-5 text-slate-50 dark:bg-slate-950">
            <div>
              <p className="text-xs font-medium text-slate-400">
                Key Metrics • Live
              </p>
              <p className="mt-1 text-xl font-semibold">Analytics Snapshot</p>
            </div>
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span>Forecast Accuracy</span>
                <span className="font-semibold text-emerald-400">+25%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Reporting Cycle Time</span>
                <span className="font-semibold text-sky-400">-25%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Manual Effort</span>
                <span className="font-semibold text-rose-400">-40%</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>SQL • Python • Power BI • Tableau</span>
              <span>2M+ rows</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
