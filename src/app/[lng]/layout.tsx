import type { Metadata } from 'next'
import { dir } from 'i18next'
import { languages } from '@/i18n/settings'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import styles from '@/styles/page.module.scss';

export const metadata: Metadata = {
  title: 'SmoothiLab',
  description: 'Welcome to SmoothiLab',
}

export async function generateStaticParams() {
  return languages.map((lng: string) => ({ lng }))
}

export default async function RootLayout(
  { children, params: { lng } }: { children: React.ReactNode, params: { lng: string } }
) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <Header lng={lng} />
        {children}
        <Footer lng={lng} />
      </body>
    </html>
  )
}
