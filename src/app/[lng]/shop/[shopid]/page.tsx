import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SmoothiLab | ShopInfo',
  description: 'Welcome to SmoothiLab',
}

export default function ShopInfoPage({ params }: { params: { lng: string, shopid: string } }) {
  return (
    <main>
      <h1>info</h1>
      <div>shopid: {params.shopid}</div>
      <Link href={`/shop/${params.shopid}/booking`}>
        booking
      </Link>
    </main>
  );
}
