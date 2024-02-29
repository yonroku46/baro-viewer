'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/i18n/client'
import { languages, fallbackLng } from '@/i18n/settings'
import styles from '@/styles/page.module.scss'

export default function UserButton (
  { lng }: { lng: string }
) {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = useTranslation(lng, 'header')

  return (
    <>
      <Link href={`/${lng}/login`}>
        <button type="button" className={styles.loginBtn}>
          {t('category.login')}
        </button>
      </Link>
    </>
  )
}
