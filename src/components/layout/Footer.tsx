import Image from 'next/image';
import React from 'react';
import { useTranslation } from '@/i18n'
import { languages, fallbackLng } from '@/i18n/settings'
import styles from '@/styles/page.module.scss';

export default async function Footer (
  { lng }: { lng: string }
) {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'footer')

  return(
    <footer>
      <div className={styles.contents}>
        <Image
          alt="App Logo"
          src="/assets/icon/app-icon.svg"
          width={28}
          height={28}
          priority
        />
        <div className={styles.description}>
          <span>
            {t('name')}
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
