import React from 'react';
import MyCard from '../../features/landing/cards/MyCard';
import ExtraInfoCard from '../../features/landing/cards/ExtraInfoCard';
import { Box } from '@mui/material';

// TODO: Add Responsiveness (Stack)
const LandingPage: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <MyCard />
      <ExtraInfoCard />
    </Box>
  );
};

export default LandingPage;
