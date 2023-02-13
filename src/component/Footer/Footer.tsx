import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="h-20 align-center">
        @ineuron
      </AppBar>
    </Box>
  );
}

export default Footer;