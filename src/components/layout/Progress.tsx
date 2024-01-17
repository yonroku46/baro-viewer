"use client";

import { useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Progress() {
  const [percent, setPercent] = useState<number>(100);

  return (
    <Box sx={{ width: `${percent}%` }}>
      <LinearProgress color="primary" />
    </Box>
  );
}
