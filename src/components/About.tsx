export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            I&apos;m a results-driven Data Analyst with a strong foundation in
            business analytics and hands-on experience delivering end-to-end
            analytics solutions. Over the past 3+ years, I&apos;ve worked with
            global teams to design automated reporting frameworks, build
            predictive models, and craft interactive dashboards that support
            executives and operations teams in making better, faster decisions.
          </p>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            With a Master&apos;s in Business Analytics from the University of
            North Texas and a Bachelor&apos;s in Electronics &amp; Communication
            Engineering, I bridge the gap between technical depth and business
            understanding. I enjoy working with large datasets, solving complex
            data problems, and turning numbers into stories that non-technical
            stakeholders can easily act on.
          </p>
          <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-500">
            What I Do Best
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
            <li>• Build automated reporting solutions using SQL and Python</li>
            <li>• Design and deploy Power BI and Tableau dashboards</li>
            <li>• Develop predictive models and forecasting solutions</li>
            <li>• Perform ad-hoc analysis and present clear insights</li>
            <li>• Enforce data quality and integrity end-to-end</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Quick Facts
          </h3>
          <dl className="space-y-2 text-slate-600 dark:text-slate-300">
            <div className="flex justify-between">
              <dt className="font-medium">Location</dt>
              <dd>Dallas, TX</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium">Experience</dt>
              <dd>3+ years</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium">Specialization</dt>
              <dd>Analytics &amp; BI</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium">Cloud</dt>
              <dd>AWS</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium">Collaboration</dt>
              <dd>Operations, Finance, IT</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
