'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import styles from '@/styles/page.module.scss'

export type MenuItem = {
  category: string,
  name: string,
  href: string
}

export default function SubNav (
  { menus }: { menus: Array<MenuItem> }
) {
  const path = usePathname()
  console.log(path)
  console.log(menus[0].href)

  return(
    <>
      {menus.map((menu) => (
        path.startsWith(menu.href) &&
          <>
            {menu.name}
          </>
      ))}
    </>
  )
}
