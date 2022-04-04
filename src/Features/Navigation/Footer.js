import React from 'react';
import { AppBar, Toolbar, Typography} from '@mui/material';


export default function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(23, 37, 66)', flexGrow: 1  }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'right' }}>
          Made by Supra Coders
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
