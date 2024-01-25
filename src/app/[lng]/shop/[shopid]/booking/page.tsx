import type { Metadata } from 'next';
import styles from '@/styles/page.module.scss';

export const metadata: Metadata = {
  title: 'SmoothiLab | Booking',
  description: 'Welcome to SmoothiLab',
}

export default function ShopBookinglPage({ params }: { params: { lng: string, shopid: string } }) {
  return (
    <section>
      <h1>booking</h1>
      <div>shopid: {params.shopid}</div>
    </section>
  )
}
