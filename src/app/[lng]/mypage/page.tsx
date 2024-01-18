'use client'

import Link from 'next/link'
import { useTranslation } from '@/i18n/client'
import { useState } from 'react'
import { languages, fallbackLng } from '@/i18n/settings'

export default function Page(
  { params: { lng } }: { params: { lng: string } }
) {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = useTranslation(lng, 'mypage')

  const [counter, setCounter] = useState(0)
  return (
    <>
      <main>
        {t('h1')}
        <p>{t('counter', { count: counter })}</p>
        <div>
          <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
          <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
        </div>
        <Link href={`/${lng}`}>
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>
    </>
  )
}