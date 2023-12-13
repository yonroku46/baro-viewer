'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import styles from '@/styles/page.module.css';

function TopicCategoryPage({ params }: { params: { category: string } }) {
  const [num, setNum] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main>
      <div>TOPIC Category: {params.category}</div>
      <div>{num}</div>
      <button type="button" onClick={() => setNum(num + 1)}>
        plus
      </button>
      <div className={styles.color}>color</div>
      <button
        type="button"
        onClick={() =>
          theme === 'dark' ? setTheme('light') : setTheme('dark')
        }>
        toggle
      </button>
    </main>
  );
}

export default TopicCategoryPage;
