import React from 'react';
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Navbar() {
  let navigate = useNavigate();

  return (
      <AppBar position="fixed" sx={{ backgroundColor: 'rgb(23, 37, 66)', flexGrow: 1  }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Button onClick={() => navigate('/')} sx={{ color: 'white', fontSize: 'x-large' }}>
              Ticket Master
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
  );
};
