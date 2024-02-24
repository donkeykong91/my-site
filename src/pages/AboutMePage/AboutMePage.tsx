import YoungCard from '../../features/aboutme/cards/YoungCard';
import MidCard from '../../features/aboutme/cards/MidCard';
import NowCard from '../../features/aboutme/cards/NowCard';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const AboutMePage = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Typography variant="h3">About Me</Typography>
      </Box>
      <Grid container>
        <Grid>
          <YoungCard />
          <MidCard />
          <NowCard />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMePage;
