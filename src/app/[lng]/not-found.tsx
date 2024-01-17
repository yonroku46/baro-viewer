import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sorry',
  description: 'Page not found',
}

export default function NotFound() {
  return (
    <div>
      Page not found
      <Link href="/">Home</Link>
    </div>
  );
}
