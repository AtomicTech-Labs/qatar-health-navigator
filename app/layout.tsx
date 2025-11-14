import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from 'next/font/google';
import "./globals.css";
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import LanguageWrapper from './LanguageWrapper';

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-plex',
  display: 'swap',
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ['400', '500', '600'],
  subsets: ['arabic'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Qatar Health Navigator",
  description: "Your guide to healthcare services in Qatar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexSansArabic.variable} antialiased`}
        style={{ fontFamily: 'var(--font-ibm-plex), var(--font-ibm-plex-arabic), sans-serif' }}
      >
        <LanguageProvider>
          <LanguageWrapper>
            {/* Skip to main content link for keyboard navigation */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-lake-blue focus:text-white focus:rounded-2xl focus:font-medium focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-lake-blue focus:ring-offset-2"
            >
              Skip to main content
            </a>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main id="main-content" className="flex-1 pb-24 pt-4" role="main">
                {children}
              </main>
              <BottomNav />
            </div>
          </LanguageWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
