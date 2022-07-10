import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{m:'auto'}}>
        <Toolbar variant="dense" sx={{m:'auto'}}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <SportsCricketIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            IPL Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
