import styles from '@/styles/page.module.scss';

export default function RootPage(
  { params }: { params: { lng: string } }
) {
  return (
    <main className={styles.main}>
      Home
    </main>
  );
}