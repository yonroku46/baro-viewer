import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { useTranslation } from '@/i18n'
import { languages, fallbackLng } from '@/i18n/settings'
import '@/styles/global.scss'

export default async function Page(
  { params: { lng } }: { params: { lng: string } }
) {
  
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <>
      <main>
        <h2>
          {t('h1')}
          <Trans t={t} i18nKey="welcome">
            Welcome to Next.js v13 <small>appDir</small> and i18next
          </Trans>
        </h2>
      </main>
    </>
  )
}
