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
  const mode = 'inside'

  return (
    <>
      <article>
        운영모드 설정
        <Link href={`/${lng}/view/${mode}`}>
          <button type="button">
            위 설정으로 출력
          </button>
        </Link>
      </article>
    </>
  )
}