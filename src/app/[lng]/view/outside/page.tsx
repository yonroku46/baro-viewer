'use client'

import Link from 'next/link'
import { useTranslation } from '@/i18n/client'
import LngButton from '@/components/button/LngButton'
import { languages, fallbackLng } from '@/i18n/settings'
import styles from '@/styles/page.module.scss'

export default function Page(
  { params: { lng } }: { params: { lng: string } }
) {
  
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = useTranslation(lng, 'view')

  return (
    <>
      <div className={styles.viewer}>
        Outside
        <LngButton lng={lng} />
        <button type='button'>
          대기열 참가
        </button>
      </div>
    </>
  )
}