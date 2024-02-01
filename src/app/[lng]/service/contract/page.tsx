'use client'

import Link from 'next/link'
import { useTranslation } from '@/i18n/client'
import { useState } from 'react'
import { languages, fallbackLng } from '@/i18n/settings'
import { currency } from '@/common/utils/StringUtils'
import styles from '@/styles/page.module.scss'

import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone'

type Contract = {
  title: string,
  subTitle: string,
  price: number,
  priceUnit: string,
  benefits: Array<string>
}

const contractList: Array<Contract> = [
  { title: 'Light', subTitle: '소규모 사업자용(1~2인 점포)', price: 29000, priceUnit: '원', benefits: ['예약관리 / 선주문', '가게정보 및 메뉴 번역제공(월 1회)'] },
  { title: 'Basic', subTitle: '중소규모 사업자용(4인이상 점포)', price: 49000, priceUnit: '원', benefits: ['예약관리 / 선주문', '가게정보 및 메뉴 번역제공(월 4회)', '커스텀 출력모드 제공', '대쉬보드 제공'] },
  { title: 'Pro', subTitle: '대규모 사업자용(10인이상 점포)', price: 89000, priceUnit: '원', benefits: ['예약관리 / 선주문', '가게정보 및 메뉴 번역제공(무제한)', '커스텀 출력모드 제공', '대쉬보드 제공', '매장 상단노출']  },
]

export default function Page(
  { params: { lng } }: { params: { lng: string } }
) {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = useTranslation(lng, 'mypage')

  return (
    <>
      <article>
        <div className={styles.contractInfo}>
          <div className={styles.title}>
            {'스무디랩 요금제'}
          </div>
          <div className={styles.subTitle}>
            {'첫 1개월은 무료로 체험하실 수 있습니다!'} 
          </div>
        </div>
        <div className={styles.contractGroup}>
          {contractList.map((contract) => (
            <Paper key={contract.title} className={styles.contract}>
              <h2 className={styles.title}>
                {contract.title}
                <Chip label="1개월 무료" variant="outlined"  className={styles.chip} />
              </h2>
              <div className={styles.subTitle}>
                {contract.subTitle}
              </div>
              <div className={styles.price}>
                월 {currency(contract.price, contract.priceUnit)}
                <span className={styles.subPrice}>
                  {currency(Math.round((contract.price / 300)) * 10, contract.priceUnit)} / 일
                </span>
              </div>
              <List className={styles.info}>
                {contract.benefits.map((benefit) => (
                  <ListItem key={benefit}>
                    <ListItemAvatar>
                      <Avatar>
                        <CheckCircleTwoToneIcon fontSize='large' />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={benefit} />
                  </ListItem>
                ))}
              </List>
              <button type='button' className={styles.selectBtn}>
                선택하기
              </button>
            </Paper>
          ))}
        </div>
      </article>
    </>
  )
}