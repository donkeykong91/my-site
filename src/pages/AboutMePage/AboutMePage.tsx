import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ABOUT_ME_PAGE_TITLE, CARD_AND_IMAGE_LIST } from './constants.ts';
import CardsAndImages from './CardsAndImages.tsx';

const AboutMePage = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Typography variant="h3">{ABOUT_ME_PAGE_TITLE}</Typography>
      </Box>
      <Grid container columnSpacing={30} justifyContent="center" mt={5}>
        {CARD_AND_IMAGE_LIST.map((item, index) => {
          return (
            <CardsAndImages
              index={index}
              alignSelf={item.gridCard.alignSelf}
              CardComponent={item.cardComponent}
              component={item.component as 'img'}
              boxStyle={item.boxStyle}
              src={item.src}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default AboutMePage;
