import SkillBadge from './SkillBadge';

const programming = ['Python', 'R', 'Pandas', 'NumPy', 'SciPy', 'PySpark'];
const db = [
  'Advanced SQL',
  'Hive',
  'Query Optimization',
  'Microsoft SQL Server',
  'Oracle',
  'Teradata'
];
const bi = ['Power BI', 'Tableau', 'Looker', 'Excel (Advanced)', 'VBA'];
const dataManagement = [
  'ETL Pipelines',
  'Data Collection & Cleaning',
  'Data Quality Assurance',
  'Data Validation',
  'Large Dataset Analysis',
  'Relational Databases',
  'ERP Systems Integration'
];
const analytics = [
  'Predictive Modeling',
  'Trend Analysis',
  'Pattern Recognition',
  'Anomaly Detection',
  'Statistical Analysis',
  'Forecasting',
  'Root Cause Analysis',
  'Data Mining',
  'Regression Analysis'
];
const cloud = ['AWS (Amazon Web Services)'];
const softSkills = [
  'Stakeholder Communication',
  'Cross-Functional Collaboration',
  'Mentoring Junior Analysts',
  'Problem-Solving',
  'Attention to Detail'
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Skills &amp; Tools
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          A practical tech stack for end-to-end analytics, from data collection
          to dashboards and predictive modeling.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SkillGroup title="Programming & Analysis" items={programming} />
        <SkillGroup title="Database & Query" items={db} />
        <SkillGroup
          title="Business Intelligence & Visualization"
          items={bi}
        />
        <SkillGroup title="Data Management" items={dataManagement} />
        <SkillGroup
          title="Analytical Techniques"
          items={analytics}
        />
        <SkillGroup title="Cloud Platforms" items={cloud} />
        <SkillGroup title="Soft Skills" items={softSkills} />
      </div>
    </section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
        {title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map(item => (
          <SkillBadge key={item} label={item} />
        ))}
      </div>
    </div>
  );
}
