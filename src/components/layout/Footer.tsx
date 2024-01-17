import Image from 'next/image';
import React from 'react';
import styles from '@/styles/page.module.scss';

export default function Footer(
  { lng }: { lng: string }
) {
  return (
    <footer>
      <div className={styles.contents}>
        <Image
          src="/logo.svg"
          alt="App Logo"
          width={24}
          height={24}
          priority
        />
        <div className={styles.title}>
          <span>
            상호명 (주)스무디랩
          </span>
          <span>
            이메일 help@smoothilab.com
          </span>
          <span>
            ©2024 SMOOTHILAB CORP. ALL RIGHT RESERVED
          </span>
        </div>
      </div>
    </footer>
  );
};
