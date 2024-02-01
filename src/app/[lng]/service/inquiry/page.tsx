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
      <article>
        Inquiry
      </article>
    </>
  )
}