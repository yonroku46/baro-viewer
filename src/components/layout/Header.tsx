import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

type MenuItem = {
  category: string,
  name: string,
  href: string,
  role?: 1 | 9
}

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const menuList: Array<MenuItem> = [
    { category: '마이페이지', name: '마이페이지', href: '/mypage', role: 1 },
    { category: '마이페이지', name: '대기이력', href: '/mypage/history', role: 1 },
    { category: '서비스', name: '서비스소개', href: '/about' },
    { category: '서비스', name: '사용방법', href: '/help' },
    { category: '서비스', name: '문의사항', href: '/help/inquiry' },
    { category: '서비스', name: '서비스이용', href: '/contract' },
    { category: '매장찾기', name: '매장찾기', href: '/shop' },
    { category: '대쉬보드', name: '관리자페이지', href: '/dashboard', role: 9 },
  ]
  const groupedMenu: Record<string, MenuItem[]> = {};
  menuList.forEach(menu => {
    if (!groupedMenu[menu.category]) {
      groupedMenu[menu.category] = [];
    }
    groupedMenu[menu.category].push(menu);
  });

  return (
    <header>
      <nav>
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
        <div>
          <button
            type="button"
            onClick={() =>
              theme === 'dark' ? setTheme('light') : setTheme('dark')
            }>
            {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;