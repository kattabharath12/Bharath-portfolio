"use client";

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Let&apos;s Connect
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          If you&apos;re looking for a data analyst to build dashboards,
          automate reporting, or design predictive models—or if you&apos;d just
          like to talk about analytics—feel free to reach out.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
          <p>
            <span className="font-semibold">Location:</span> Dallas, TX
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{' '}
            <a href="tel:+19408437756" className="hover:underline">
              (940) 843-7756
            </a>
          </p>
          <p>
            <span className="font-semibold">Email:</span>{' '}
            <a
              href="mailto:kattabharath.kb@gmail.com"
              className="hover:underline"
            >
              kattabharath.kb@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">LinkedIn:</span>{' '}
            <a
              href="https://www.linkedin.com"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Add your LinkedIn URL
            </a>
          </p>

          <div className="mt-4 flex gap-3">
            <a
              href="mailto:kattabharath.kb@gmail.com"
              className="rounded-full bg-brand-primary px-5 py-2 text-sm font-medium text-white shadow hover:bg-blue-700"
            >
              Email Me
            </a>
            <a
              href="/Bharath_Katta_Resume.pdf"
              className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Download Resume
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
        >
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-200">
              Name
            </label>
            <input
              type="text"
              required
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-200">
              Email
            </label>
            <input
              type="email"
              required
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-200">
              Subject
            </label>
            <input
              type="text"
              required
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-200">
              Message
            </label>
            <textarea
              required
              rows={4}
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-brand-primary px-5 py-2 text-sm font-medium text-white shadow hover:bg-blue-700"
          >
            Send Message
          </button>

          {status === 'success' && (
            <p className="text-xs text-emerald-500">
              Thank you! This demo form doesn&apos;t send email yet, but your
              message was captured.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
