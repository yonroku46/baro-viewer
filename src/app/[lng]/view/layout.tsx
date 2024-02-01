import type { Metadata } from 'next'
import { languages } from '@/i18n/settings'
import styles from '@/styles/page.module.scss'

export const metadata: Metadata = {
  title: 'SmoothiLab | View',
  description: 'Welcome to SmoothiLab',
}

export async function generateStaticParams() {
  return languages.map((lng: string) => ({ lng }))
}

export default async function RootLayout(
  { children }: { children: React.ReactNode }
) {

  return (
    <>
      <article className={styles.viewBackground}>
        <div className={styles.viewBackgroundGlow}>
          {children}
        </div>
      </article>
    </>
  )
}
