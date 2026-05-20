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
      <Grid
        component="main"
        sx={{
          minHeight: '100vh',
          overflowX: 'hidden',
          px: { xs: 2, md: 5 },
          py: { xs: 4, md: 7 },
        }}
        xs={12}
      >
        <Outlet />
      </Grid>
      <Grid xs={12}>
        <FooterLayout />
      </Grid>
    </Grid>
  );
};

export default GridLayout;
