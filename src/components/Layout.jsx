import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Header />      
      </Grid>
      <Outlet />
    </Grid>
  );
};

export default Layout;