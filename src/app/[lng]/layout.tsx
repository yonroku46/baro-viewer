import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { dir } from 'i18next'
import Providers from '@/components/providers/Provider';
import '@/styles/globals.scss';
import { languages } from '@/i18n/settings'
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SmoothiLab',
  description: 'Welcome to SmoothiLab',
}

export default function RootLayout(
  { children, params }: { children: React.ReactNode, params: { lng: string } }
) {
  return (
    <html lang={params.lng} dir={dir(params.lng)}>
      <Header lng={params.lng} />
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
      <Footer lng={params.lng}/>
    </html>
  );
}