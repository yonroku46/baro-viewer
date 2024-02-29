'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslation } from '@/i18n/client'
import { languages, fallbackLng } from '@/i18n/settings'
import styles from '@/styles/page.module.scss'
import UserService from '@/api/service/UserService'

export default function LoginPage(
  { params: { lng } }: { params: { lng: string } }
) {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = useTranslation(lng, 'view')

  const userService = new UserService() 

  async function login() {
    const dummyParm = {
      "platform": "GOOGLE",
      "suid": "google",
      "name": "chanuring"
    }
    const data = await userService.login(dummyParm)
    if (data.Authorization === localStorage.getItem('token')) {
      // TODO 이전 페이지로 이동 처리
    }
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      // TODO 이전 페이지로 이동 처리
    }
  }, [])

  return (
    <article>
      <div>
        <h1>Login</h1>
        <div className={styles.socialArea}>
          <button className={styles.socialBtn} type="button">
            <Image
              src="/assets/icon/google.svg"
              alt="google Logo"
              width={24}
              height={24}
              priority
            />
            <span className={styles.title}>Google로그인</span>
          </button>
          <button className={styles.socialBtn} type="button">
            <Image
              src="/assets/icon/line.svg"
              alt="line Logo"
              width={24}
              height={24}
              priority
            />
            <span className={styles.title}>LINE로그인</span>
          </button>
          <button className={styles.socialBtn} type="button" onClick={() => login()}>
            <span className={styles.title}>비회원사용</span>
          </button>
        </div>
      </div>
    </article>
  )
}
