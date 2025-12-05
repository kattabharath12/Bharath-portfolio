import Timeline from './Timeline';

export default function Experience() {
  const items = [
    {
      title: 'Data Analyst',
      company: 'COSMIC WEALTH',
      location: 'Dallas, TX',
      dateRange: 'June 2024 – Present',
      bullets: [
        'Collect, clean, and analyze large datasets (2M+ records) from ERP, WMS, and financial systems to support business intelligence and strategic initiatives.',
        'Build and maintain scalable Power BI and Tableau dashboards that track KPIs and reduce reporting cycles by 25% using automated SQL and Python pipelines.',
        'Identify trends, patterns, and anomalies through advanced analytics and root-cause analysis, partnering with operations, finance, and IT teams to deliver actionable insights.',
        'Enforce data integrity, accuracy, and compliance with rigorous quality assurance processes, reducing data errors by 20%.',
        'Handle ad-hoc analysis requests and communicate findings in a clear, non-technical way to business stakeholders.',
        'Mentor junior analysts on SQL, visualization best practices, and analytics techniques, leveraging AI-powered analytics to accelerate insight delivery.'
      ]
    },
    {
      title: 'Data Analyst',
      company: 'COGNIZANT',
      location: 'Chennai, India',
      dateRange: 'July 2021 – June 2023',
      bullets: [
        'Analyzed large, global datasets and delivered custom data solutions with comprehensive reporting frameworks and interactive dashboards using Tableau, Power BI, and SQL.',
        'Developed automated ETL workflows in SQL and Python, reducing manual effort by 40% while maintaining high data quality and consistency standards.',
        'Designed predictive models and statistical forecasting solutions that increased forecast accuracy by 25%, enabling better resource utilization and demand planning.',
        'Collaborated with cross-functional global teams to gather requirements, define KPIs, and deliver scalable analytics solutions aligned with business goals.',
        'Communicated analytical findings through visualizations, reports, and presentations in an Agile delivery environment.'
      ]
    }
  ];

  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Experience
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          A timeline of my professional experience as a data analyst, focusing
          on automated reporting, business intelligence, and predictive
          analytics.
        </p>
      </div>

      <Timeline items={items} />
    </section>
  );
}
