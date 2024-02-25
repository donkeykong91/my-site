import YoungCard from '../../features/aboutme/cards/YoungCard';
import MidCard from '../../features/aboutme/cards/MidCard';
import NowCard from '../../features/aboutme/cards/NowCard';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import youngImage from '../../assets/young.webp';
import midImage from '../../assets/mid.webp';
import nowImage from '../../assets/senior.webp';

const AboutMePage = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Typography variant="h3">About Me</Typography>
      </Box>
      <Grid container columnSpacing={30} justifyContent="center" mt={5}>
        <Grid>
          <Box
            component="img"
            sx={{ maxWidth: 645, height: 440 }}
            src={youngImage}
          />
        </Grid>
        <Grid alignSelf="center">
          <YoungCard />
        </Grid>
        <Grid alignSelf="center">
          <MidCard />
        </Grid>
        <Grid>
          <Box
            component="img"
            sx={{ maxWidth: 645, height: 440 }}
            src={midImage}
          />
        </Grid>
        <Grid>
          <Box
            component="img"
            sx={{ maxWidth: 645, height: 440 }}
            src={nowImage}
          />
        </Grid>
        <Grid alignSelf="center">
          <NowCard />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMePage;
