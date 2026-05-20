import React from 'react';
import MyCard from '../../features/landing/cards/MyCard';
import ExtraInfoCard from '../../features/landing/cards/ExtraInfoCard';
import Grid from '@mui/material/Unstable_Grid2';

/**
 * This page displays two cards. One with an image and a small blurb about <br>
 * me. Another with a longer description of what I do. <br>
 * @constructor
 */
const LandingPage: React.FC = () => {
  return (
    <Grid
      container
      columnSpacing={8}
      rowGap={4}
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid>
        <MyCard />
      </Grid>
      <Grid>
        <ExtraInfoCard />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
