import React from 'react';
import { useTheme } from 'next-themes';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header>
      Header Content
      <nav>
        <div>
          <button
            type="button"
            onClick={() =>
              theme === 'dark' ? setTheme('light') : setTheme('dark')
            }>
            {theme === 'dark' ?
              <DarkModeIcon />
              :
              <LightModeIcon />
            }
          </button>
        </div>
      </nav>
    </header>
    );
};

export default Header;