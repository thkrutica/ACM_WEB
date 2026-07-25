import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Global site metadata for SEO
export const metadata: Metadata = {
  title: 'ACM Delhi Technical Campus',
  description:
    'ACM Student Chapter at Delhi Technical Campus — Inspiring the future of computing through workshops, hackathons, guest lectures, and collaborative student projects.',
  keywords: ['ACM', 'Delhi Technical Campus', 'DTC', 'Coding Chapter', 'Computer Science', 'Workshops', 'Hackathons'],
};

// Root Layout component: Wraps all pages inside the signature dark page-shell frame
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Outer Page Shell Frame with radial lighting and dark background */}
        <div className="page-shell">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
