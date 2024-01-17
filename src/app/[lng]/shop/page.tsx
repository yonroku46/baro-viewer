import Link from 'next/link';
import type { Metadata } from 'next';
import { useTranslation } from '@/i18n'

export const metadata: Metadata = {
  title: 'SmoothiLab | Shop',
  description: 'Welcome to SmoothiLab',
};

export default async function ShopPage(
  { params }: { params: { lng: string } }
) {
  const { t } = await useTranslation(params.lng);

  return (
    <main>
      <h1>Shop List</h1>
      <Link href={`${params.lng}/shop/${1}`}>
        no1 shop
      </Link>
      {t('mypage')}
    </main>
  );
}
