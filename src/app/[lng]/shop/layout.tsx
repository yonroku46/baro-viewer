import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SmoothiLab | Shop',
  description: 'Welcome to SmoothiLab',
}

export default async function ShopLayout(
  { children }: { children: React.ReactNode }
) {

  return (
    <>
      {children}
    </>
  )
}
