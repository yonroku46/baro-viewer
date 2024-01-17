"use client";

import { forwardRef, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  },
);

export default function Alerter() {
  const [open, setOpen] = useState<boolean>(false);
  const [alertMsg, setAlertMsg] = useState<string>('test msg');
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <Stack spacing={1} sx={{ width: '100%' }}>
      <Button variant="outlined" onClick={handleClick}>
        Open snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%' }}>
          {alertMsg}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
