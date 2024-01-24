'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import LngDialog, { LanguagesCode } from './LngDialog'
import { useTranslation } from '@/i18n/client'
import { AvailableLanguages } from '@/i18n/settings'

import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'

export type Languages = {
  lng: AvailableLanguages
  code: string
  label: string
}

export default function LngButton (
  { lng }: { lng: string }
) {
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
        <Avatar 
          alt={LanguagesCode[lng]}
          variant="rounded"
          src={`https://flagcdn.com/w40/${LanguagesCode[lng].toLowerCase()}.png`}
          sx={{ width: 30, height: 22, border: '1px solid lightgray' }}
        />
      </Button>
      <LngDialog 
        i18n={i18n}
        lng={lng}
        path={path || ''}
        open={open}
        onClose={handleClose}
      />
    </>
  )
}
