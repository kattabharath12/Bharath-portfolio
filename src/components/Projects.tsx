"use client";

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          A selection of analytics work focused on scalable reporting,
          self-service dashboards, and predictive forecasting.
        </p>
      </div>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.12 }
          }
        }}
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
        >
          <ProjectCard
            title="Scalable Reporting & Dashboard Framework"
            role="Data Analyst"
            tech={['SQL', 'Python', 'Power BI', 'Tableau']}
            description="Designed and implemented an automated reporting framework for 2M+ record datasets across ERP and financial systems, enabling fast, self-service analytics for business stakeholders."
            impact={[
              'Reduced reporting cycles by 25% through automated SQL and Python pipelines.',
              'Eliminated 35% of manual reporting tasks with standardized templates and scripts.',
              'Improved stakeholder satisfaction with real-time KPI tracking dashboards.'
            ]}
            cta={
              <button className="text-sm font-medium text-brand-primary hover:underline">
                View Case Study
              </button>
            }
          />
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
        >
          <ProjectCard
            title="Predictive Analytics & Forecasting Solutions"
            role="Data Analyst"
            tech={['Python', 'PySpark', 'SQL', 'Statistical Modeling']}
            description="Built forecasting models on integrated ERP, WMS, and financial data to optimize resource allocation and capacity planning for operations and finance teams."
            impact={[
              'Improved forecast accuracy by 25% using time-series and regression techniques.',
              'Enhanced operational efficiency by 12% with better planning and data-driven decisions.',
              'Aligned analytics outputs with strategic planning cycles for cross-functional teams.'
            ]}
            cta={
              <button className="text-sm font-medium text-brand-primary hover:underline">
                Explore Forecasting Work
              </button>
            }
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
