import TestimonialCarousel from './TestimonialCarousel';

export default function Testimonials() {
  const items = [
    {
      quote:
        'Bharath consistently delivered high-impact dashboards and analytics solutions that helped our team reduce manual reporting and focus on decision-making. His attention to data quality and ability to explain complex insights clearly made him a go-to person for stakeholders across functions.',
      name: '[Manager Name]',
      role: '[Role], COSMIC WEALTH'
    },
    {
      quote:
        'Working with Bharath was a great experience. He combines strong technical skills in SQL, Python, and BI tools with a collaborative mindset. He’s always willing to mentor others and share best practices in data visualization and analytics.',
      name: '[Colleague Name]',
      role: 'Data Analyst'
    }
  ];

  return (
    <section id="testimonials" className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Testimonials
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Placeholder testimonials you can later replace with real feedback from
          managers and colleagues.
        </p>
      </div>

      <TestimonialCarousel items={items} />
    </section>
  );
}
