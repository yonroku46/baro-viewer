import Image from 'next/image'
import React from 'react'
import { useTranslation } from '@/i18n'
import { languages, fallbackLng } from '@/i18n/settings'
import styles from '@/styles/page.module.scss'

export default async function Footer (
  { lng }: { lng: string }
) {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'footer')

  return(
    <footer>
      <div className={styles.footerContents}>
        <Image
          alt="compLogo"
          src="/assets/img/comp-logo.png"
          width={100}
          height={30}
          priority
        />
        <div className={styles.description}>
          <span>
            {t('corporation')}
          </span>
          <span>
            {t('email')}
          </span>
          <span>
            ©2024 SmoothiLab Corp. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  )
}
