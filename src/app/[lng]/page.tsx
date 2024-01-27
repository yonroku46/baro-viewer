'use client'

import Image from 'next/image'
import { Trans } from 'react-i18next/TransWithoutContext'
import { useTranslation } from '@/i18n'
import { languages, fallbackLng } from '@/i18n/settings'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export default async function Page(
  { params: { lng } }: { params: { lng: string } }
) {
  
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  const images = [
    '/assets/img/main1.png',
    '/assets/img/main2.png',
  ]

  return (
    <>
      <section>
        <div>
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay
        >
          {images.map((src: string, index: number) => {
            return (
              <SwiperSlide key={`${index}`}>
                <Image
                  src={src}
                  objectFit={"cover"}
                  width={1280}
                  height={600}
                  alt="test_image"
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
        </div>
        <h2>
          {t('h1')}
          <Trans t={t} i18nKey="welcome">
            Welcome to Next.js v13 <small>appDir</small> and i18next
          </Trans>
        </h2>
      </section>
    </>
  )
}
