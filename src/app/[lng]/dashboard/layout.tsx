import type { Metadata } from 'next'
import '@/styles/global.scss'

export const metadata: Metadata = {
  title: 'SmoothiLab | Mypage',
  description: 'Welcome to SmoothiLab',
}

export default async function MypageLayout(
  { children }: { children: React.ReactNode }
) {

  return (
    <>
      {children}
    </>
  )
}
