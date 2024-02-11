import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import NavbarLayout from '../NavbarLayout';
import FooterLayout from '../FooterLayout';
import { Outlet } from 'react-router-dom';

const GridLayout: React.FC = () => {
  return (
    <Grid container display="flex">
      <Grid xs={12}>
        <NavbarLayout />
      </Grid>
      <Grid sx={{ minHeight: '100vh', overflowX: 'hidden' }} xs={12}>
        <Outlet />
      </Grid>
      <Grid xs={12}>
        <FooterLayout />
      </Grid>
    </Grid>
  );
};

export default GridLayout;
