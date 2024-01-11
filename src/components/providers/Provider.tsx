'use client';

import { forwardRef, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Providers({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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
    <ThemeProvider>
      <Box sx={{ width: '100%' }}>
        <LinearProgress color='primary' />
      </Box>
      <Header/>
      <Stack spacing={1} sx={{ width: '100%' }}>
        <Button variant="outlined" onClick={handleClick}>
          Open success snackbar
        </Button>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>
      </Stack>
      {children}
      <Footer/>
    </ThemeProvider>
  );
}

export default Providers;
