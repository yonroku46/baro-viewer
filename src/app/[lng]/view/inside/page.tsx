'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslation } from '@/i18n/client'
import LngButton from '@/components/button/LngButton'
import { languages, fallbackLng } from '@/i18n/settings'
import styles from '@/styles/page.module.scss'
import AdminButton from '@/components/button/AdminButton'
import BookingService from '@/api/service/BookingService'
import { BookingInfo } from '@/api/types/BookingTypes'
import ShopService from '@/api/service/ShopService'
import { EventSourcePolyfill } from 'event-source-polyfill'

export default function Page(
  { params: { lng } }: { params: { lng: string } }
) {
  
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = useTranslation(lng, 'view')

  const bookingService = new BookingService()
  const shopService = new ShopService()

  const [bookingList, setBookingList] = useState<Array<BookingInfo>>()
  const [streamData, setStreamData] = useState<Array<any>>();
  
  useEffect(() => {
    const eventSource = new EventSourcePolyfill('/api/v1/shop/stream/1',
      {
        headers: {
          ContentType: 'text/event-stream',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    )

    eventSource.onopen = async () => {
      bookingService.getBookingList().then((data) => {
        setBookingList(data)
      })
    }

    eventSource.onmessage = async (res: { data: any }) => {
      const data = await res.data
      const eventData = JSON.parse(data)
      setStreamData(prev => [...prev!, eventData])
    }

    eventSource.onerror = async (error)  => {
      console.error(error)
      eventSource.close()
    }

    return () => {
      eventSource.close()
    }
  }, [])

  useEffect(() => {
    if (streamData) {
      console.log(streamData)
    }
  }, [streamData])

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
          <LngButton lng={lng} />
          {bookingList?.map((booking, idx) => (
            <div key={idx}>
              <span>
                {booking.shopBookingNumberAsString}
              </span>
              <span>
                {booking.userName}
              </span>
            </div>
          ))}
          <button type='button' onClick={() => bookingService.booking()}>
            대기열 참가
          </button>
        </div>
      </div>
    </>
  )
}