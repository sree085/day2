import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FIRST APP
          </Typography>
          <Link to={'/'}>
          <Button style={{color:'white'}} color="inherit">View</Button></Link>
          <Link to={'/Add'}>
          <Button style={{color:'white'}} color="inherit">Add</Button></Link>
          <Link to={'/m'}>
          <Button style={{color:'white'}} color="inherit">Movie1</Button></Link>
          <Link to={'/m2'}>
          <Button style={{color:'white'}} color="inherit">Movie2</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Navbar