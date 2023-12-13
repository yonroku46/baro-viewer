import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Providers from '@/components/providers/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Home by next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Box sx={{ width: '0%' }}>
          <LinearProgress color="inherit" />
        </Box>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
