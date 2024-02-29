'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { extractDelimiter } from '@/common/utils/StringUtils'
import styles from '@/styles/page.module.scss'

export type MenuItem = {
  category: string,
  name: string,
  href: string
}

export default function SubNav (
  { groupedMenu }: { groupedMenu: Record<string, Array<MenuItem>> }
) {
  
  const path = usePathname()
  const categoryPath = extractDelimiter(path)

  return(
    <nav role='navigation' className={styles.navSubMenu}>
      {Object.entries(groupedMenu).map(([category, menus]) => (
        menus.map((menu) => (
          categoryPath && menu.href.startsWith(categoryPath) && (
            <div key={menu.name} className={`${styles.menu} ${path === menu.href && styles.active}`}>
              <Link href={menu.href}>
                {menu.name}
              </Link>
            </div>
          )
        ))
      ))}
    </nav>
  )
}
