'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/page.module.scss';

function TopicCategoryPage({ params }: { params: { category: string } }) {
  const [num, setNum] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

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
    </main>
  );
}

export default TopicCategoryPage;
