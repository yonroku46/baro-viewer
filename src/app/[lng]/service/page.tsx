import Link from 'next/link'
import { useTranslation } from '@/i18n'
import { languages, fallbackLng } from '@/i18n/settings'

export default async function Page(
  { params: { lng } }: { params: { lng: string } }
) {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'service')
  
  return (
    <>
      <article>
        {t('h1')}
        <Link href={`/${lng}`}>
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </article>
    </>
  )
}