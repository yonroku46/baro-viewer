'use client';

import { forwardRef, useState } from 'react';
import { ThemeProvider, useTheme } from 'next-themes';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  },
);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
  const [alertMsg, setAlertMsg] = useState<string>('');
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <ThemeProvider>
      {/* <Box sx={{ width: '100%' }}>
        <LinearProgress color="primary" />
      </Box>
      <Stack spacing={1} sx={{ width: '100%' }}>
        <Button variant="outlined" onClick={handleClick}>
          Open success snackbar
        </Button>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}>
            {alertMsg}
          </Alert>
        </Snackbar>
      </Stack> */}
      {children}
    </ThemeProvider>
  );
}
