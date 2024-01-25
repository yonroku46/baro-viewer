import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SmoothiLab | Admin',
  description: 'Welcome to SmoothiLab',
}

export default async function AdminLayout(
  { children }: { children: React.ReactNode }
) {

  return (
    <>
      {children}
    </>
  )
}
