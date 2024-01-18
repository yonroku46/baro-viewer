import type { Metadata } from 'next'
import '@/styles/global.scss'

export const metadata: Metadata = {
  title: 'SmoothiLab | Dashboard',
  description: 'Welcome to SmoothiLab',
}

export default async function DashboardLayout(
  { children }: { children: React.ReactNode }
) {

  return (
    <>
      {children}
    </>
  )
}
