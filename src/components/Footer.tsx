export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200 bg-white py-6 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 text-xs text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Bharath Katta. All rights reserved.
        </p>
        <p>
          Built with Next.js, Tailwind CSS, and Framer Motion. Deployed on
          Railway.
        </p>
      </div>
    </footer>
  );
}
