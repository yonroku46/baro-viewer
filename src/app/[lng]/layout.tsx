import type { Metadata } from 'next'
import { dir } from 'i18next'
import { languages } from '@/i18n/settings'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import styles from '@/styles/page.module.scss'
import { Noto_Sans_KR, Noto_Sans_JP, Noto_Sans } from 'next/font/google'

const notoSansKr = Noto_Sans_KR({
  weight: ['300','500','700'],
  subsets: ['latin'],
})
const notoSansJp = Noto_Sans_JP ({
  weight: ['300','500','700'],
  subsets: ['latin'],
})
const notoSansEn = Noto_Sans ({
  weight: ['300','500','700'],
  subsets: ['latin'],
})

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
  
  const bodyClassName =
    lng === 'ko' ? notoSansKr.className :
    lng === 'ja' ? notoSansJp.className :
    notoSansEn.className

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={bodyClassName}>
        <Header lng={lng} />
        {children}
        <Footer lng={lng} />
      </body>
    </html>
  )
}
