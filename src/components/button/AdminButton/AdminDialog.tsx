'use client'

import { useEffect, useState, useRef } from 'react'
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
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export type DialogProps = {
  i18n: i18n
  lng: string
  path: string
  open: boolean
  onClose: (value: string) => void
}

export default function AdminDialog (props: DialogProps) {
  const { i18n, lng, path, open, onClose } = props

  const t = i18n.getFixedT(lng)

  const dummyPassword = '1234'
  const passwordLength: number = 4
  const passwordRefs = Array.from({ length: passwordLength }, () => useRef<HTMLInputElement | null>(null))

  const [inputComplete, setInputComplete] = useState<boolean>(false)
  const [enteredPassword, setEnteredPassword] = useState<string>('')

  useEffect(() => {
    if (open) {
      setInputComplete(false)
      setEnteredPassword('')
    }
  }, [open])
  
  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target
    const value = input.value

    if (!/^\d*$/.test(value)) return

    const currentRef = passwordRefs[index]?.current

    if (currentRef) {
      currentRef.value = value
      
      const isComplete = passwordRefs.every((ref) => ref.current?.value.length === 1)
      setInputComplete(isComplete)

      const newPassword = passwordRefs.map((ref) => ref.current?.value).join('')
      setEnteredPassword(newPassword)

      if (index < passwordLength - 1 && value !== '') {
        passwordRefs[index + 1]?.current?.focus()
      }
    }
    
  }

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && index > 0) {
      const currentRef = passwordRefs[index]?.current
      const previousRef = passwordRefs[index - 1]?.current

      if (currentRef && previousRef && currentRef.value === '') {
        previousRef.focus()
      }
    }
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (enteredPassword === dummyPassword) {
      alert('패스워드가 일치합니다.')
    } else {
      alert('패스워드가 일치하지 않습니다.')
    }
  }
  
  return (
    <Dialog 
      onClose={onClose}
      open={open}
      maxWidth={'xs'}
      fullWidth={true}
      className={styles.lngDialog}
    >
      <DialogTitle className={styles.title}>
        패스워드
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <div className={styles.dialogPassword}>
          {Array.from({ length: passwordLength }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              ref={passwordRefs[index]}
              onChange={(event) => handleInputChange(index, event)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              className={styles.passwordInput}
            />
          ))}
        </div>
        <button 
          type='submit'
          disabled={!inputComplete}
          className={`${styles.dialogBtn} ${inputComplete && styles.active}`}
        >
          확인
        </button>
      </form>
    </Dialog>
  )
}
