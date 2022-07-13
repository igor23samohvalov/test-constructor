import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const pages = [
  {
    title: 'New Test',
    link: ''
  },
  {
    title: 'Submitted Tests',
    link: 'tests'
  },
]

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: 'success.main'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: {  md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              marginLeft: '8px',
              textDecoration: 'none',
            }}
          >
            <NavLink to="">TEST MAKER</NavLink> 
          </Typography>
          <Box sx={{ display: { xs: 'flex' }, marginLeft: 'auto' }}>
            {pages.map(({ link, title }) => (
              <Button
                key={title}
                sx={{ color: 'white', display: 'block' }}
              >
                <NavLink to={link}>{title}</NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;