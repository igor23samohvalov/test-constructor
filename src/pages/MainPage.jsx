import { Grid } from '@mui/material';
import React from 'react';
import TestForm from '../components/TestForm';

function MainPage() {
  return (
    <Grid item md={5} xs={12} sx={{ p: 2 }}>
      <TestForm />
    </Grid>
  );
};

export default MainPage;