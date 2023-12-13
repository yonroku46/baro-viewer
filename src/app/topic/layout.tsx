import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next App | TODO',
  description: 'Todo by next app',
};

export default function TopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3>topic layout</h3>
      {children}
    </div>
  );
}
