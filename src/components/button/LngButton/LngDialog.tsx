import Link from 'next/link'
import { i18n } from 'i18next'
import { AvailableLanguages } from '@/i18n/settings'
import styles from '@/styles/page.module.scss'

import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export type DialogProps = {
  i18n: i18n
  lng: string
  path: string
  open: boolean
  onClose: (value: string) => void
}

export type Languages = {
  lng: AvailableLanguages
  code: string
  label: string
}

export const LanguagesCode: Record<string, string> = {
  ko: 'KR',
  ja: 'JP',
  en: 'GB'
}

export default function LngDialog (props: DialogProps) {
  const { i18n, lng, path, open, onClose } = props

  const t = i18n.getFixedT(lng)
  const languagesList: Array<Languages> = [
    { lng: 'ko', code: LanguagesCode['ko'], label: t('languages.ko') },
    { lng: 'ja', code: LanguagesCode['ja'], label: t('languages.ja') },
    { lng: 'en', code: LanguagesCode['en'], label: t('languages.en') }
  ]

  return (
    <>
      <Dialog 
        onClose={onClose}
        open={open}
        maxWidth={'xs'}
        fullWidth={true}
        className={styles.lngDialog}
      >
        <DialogTitle className={styles.title}>
          {t('languages.title')}
        </DialogTitle>
        <List sx={{ pt: 0 }}>
          {languagesList.map((languages) => (
            <ListItem 
              disableGutters key={languages.code}
              className={styles.selectBtn}
            >
              <Link href={`/${languages.lng}${path}`}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar 
                      alt={languages.label}
                      variant="rounded"
                      src={`https://flagcdn.com/w40/${languages.code.toLowerCase()}.png`}
                      sx={{ width: 30, height: 22, border: '1px solid lightgray' }}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={languages.label} />
                  {languages.lng === lng && <CheckCircleIcon className={styles.checked}/>}
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  )
}
