import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SmoothiLab | ShopInfo',
  description: 'Welcome to SmoothiLab',
}

export default function ShopInfoPage(
  { params: { lng, shopid} }: { params: { lng: string, shopid: string } }
) {
  return (
    <article>
      <h1>info</h1>
      <div>shopid: {shopid}</div>
      <Link href={`/${lng}/shop/${shopid}/booking`}>
        booking
      </Link>
    </article>
  )
}
