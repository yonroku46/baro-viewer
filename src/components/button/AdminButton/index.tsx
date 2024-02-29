'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import AdminDialog from './AdminDialog'
import { useTranslation } from '@/i18n/client'
import { languages, fallbackLng } from '@/i18n/settings'

import Button from '@mui/material/Button'

export default function AdminButton (
  { lng }: { lng: string }
) {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { i18n } = useTranslation(lng)

  const path = usePathname().substring(3);
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button variant="text" onClick={handleClickOpen} style={{ padding: 0 }}>
        설정
      </Button>
      <AdminDialog 
        i18n={i18n}
        lng={lng}
        path={path || ''}
        open={open}
        onClose={handleClose}
      />
    </>
  )
}
