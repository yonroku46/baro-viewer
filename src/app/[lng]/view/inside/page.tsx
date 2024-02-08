'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { useTranslation } from '@/i18n/client'
import LngButton from '@/components/button/LngButton'
import { languages, fallbackLng } from '@/i18n/settings'
import styles from '@/styles/page.module.scss'
import AdminButton from '@/components/button/AdminButton'
import axios from 'axios'

export default function Page(
  { params: { lng } }: { params: { lng: string } }
) {
  
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = useTranslation(lng, 'view')

  useEffect(() => {
    async function getBookingList() {
      axios.get('/api/v1/booking/list').then((res) => {
          console.log(res)
        }
      )
    }
  }, [])

  return (
    <>
      <div className={styles.viewer}>
        {/* left view */}
        <div className={styles.left}>
          <div className={styles.top}>
            <Image
              className={styles.logo}
              alt="compLogo"
              src="/assets/img/comp-logo.png"
              width={200}
              height={60}
              priority
            />
          </div>
          <div className={styles.bottom}>
            <div className={styles.waitingInfo}>
              <span className={styles.title}>
                WaitingTeam
              </span>
              <span className={styles.value}>
                3~4
              </span>
            </div>
            <div className={styles.waitingInfo}>
              <span className={styles.title}>
                WaitingTime
              </span>
              <span className={styles.value}>
                40
              </span>
            </div>
          </div>
        </div>
        {/* right view  */}
        <div className={styles.right}>
          <AdminButton lng={lng} />
          Inside
          설정내용: 배경, 본문배경, 로고, 안내내용, 1인당 대기시간설정, 호출 후 시한설정 등
          <LngButton lng={lng} />
          <button type='button'>
            대기열 참가
          </button>
        </div>
      </div>
    </>
  )
}