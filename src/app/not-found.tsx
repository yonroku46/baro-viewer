import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - not found',
  description: 'Page not found',
};

export default function NotFound() {
  return (
    <div>
      Page not found
      <Link href="/">Back</Link>
    </div>
  );
}
