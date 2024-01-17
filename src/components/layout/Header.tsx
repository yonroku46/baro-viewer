import React from "react";
import Link from 'next/link';
import styles from '@/styles/page.module.scss';
import { useTranslation } from 'react-i18next';
import ThemeButton from '@/components/buttons/ThemeButton';
import LanguageButton from '@/components/buttons/LanguageButton';

type MenuItem = {
  category: string,
  name: string,
  href: string,
  role?: 1 | 9
}

export default function Header(
  { lng }: { lng: string }
) {
  const { t } = useTranslation();

  const menuList: Array<MenuItem> = [
    { category: '홈', name: '홈', href: '/', role: 1 },
    { category: '마이페이지', name: '마이페이지', href: `/${lng}/mypage`, role: 1 },
    { category: '마이페이지', name: '대기이력', href: `/${lng}/mypage/history`, role: 1 },
    { category: '서비스', name: '서비스소개', href: `/${lng}/about` },
    { category: '서비스', name: '사용방법', href: `/${lng}/help` },
    { category: '서비스', name: '문의사항', href: `/${lng}/help/inquiry` },
    { category: '서비스', name: '서비스이용', href: `/${lng}/contract` },
    { category: '매장찾기', name: '매장찾기', href: `/${lng}/shop` },
    { category: '대쉬보드', name: '관리자페이지', href: `/${lng}/dashboard`, role: 9 },
  ]
  const groupedMenu: Record<string, Array<MenuItem>> = {};
  menuList.forEach(menu => {
    if (!groupedMenu[menu.category]) {
      groupedMenu[menu.category] = [];
    }
    groupedMenu[menu.category].push(menu);
  });

  return (
    <header>
      <nav className={styles.contents}>
        {Object.entries(groupedMenu).map(([category, menus]) => (
          <div key={category}>
            <h2>{category}</h2>
            <ul>
              {menus.map(menu => (
                <li key={menu.href}>
                  <Link href={menu.href}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Link href='/login'>
          <button type="button">
            Login
          </button>
        </Link>
        <div>
          <ThemeButton />
          <LanguageButton lng={lng}/>
          <div>{t(`nav.dashboard`)}</div>
          <div>{t(`nav.shopping-mall`)}</div>
        </div>
      </nav>
    </header>
  );
};
