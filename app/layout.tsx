import type { Metadata } from 'next';
import {Bitter, Spectral} from "next/font/google";
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MouseFollower } from '@/components/mouse-follower';
import { BackToTop } from '@/components/back-to-top';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const bitter = Bitter({ subsets: ['latin'] });
const spectral = Spectral({ weight:['300', '400', '700'] , subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agencia de Publicidad Puerto | Marketing Digital en Chile',
  description: 'La mejor agencia de marketing en Chile. Especialistas en publicidad integrada, estrategia de marca y marketing digital.',
  keywords: 'agencia marketing chile, publicidad chile, marketing digital, agencia publicidad',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={bitter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MouseFollower />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BackToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}