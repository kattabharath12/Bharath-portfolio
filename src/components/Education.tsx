export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Education
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Master of Science in Business Analytics
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            University of North Texas, Denton, TX
          </p>
          <p className="mt-1 text-xs text-slate-500">2023 – 2025</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            GPA: 3.6 / 4.0
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Bachelor of Engineering in Electronics &amp; Communication
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Sathyabama University, Chennai, India
          </p>
          <p className="mt-1 text-xs text-slate-500">2018 – 2022</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            GPA: 8.6 / 10
          </p>
        </div>
      </div>
    </section>
  );
}
