import './globals.css';
import type { Metadata } from 'next';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Bharath Katta | Data Analyst Portfolio',
  description:
    'Portfolio of Bharath Katta, a data analyst specializing in SQL, Python, Power BI, Tableau, and predictive analytics.',
  openGraph: {
    title: 'Bharath Katta | Data Analyst Portfolio',
    description:
      'Data analyst with 3+ years of experience building automated reporting, dashboards, and predictive models.',
    url: 'https://your-domain.com',
    siteName: 'Bharath Katta Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bharath Katta Data Analyst Portfolio'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
