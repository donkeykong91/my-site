import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ABOUT_ME_PAGE_TITLE, CARD_AND_IMAGE_LIST } from './constants.ts';
import CardsAndImages from './CardsAndImages.tsx';
import React from 'react';
import { PAGE_TITLE_SX } from '../../theme/glass.ts';

/**
 * Displays detailed information about my experience in tech in life. <br>
 * @constructor
 */
const AboutMePage: React.FC = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Typography variant="h3" sx={PAGE_TITLE_SX}>
          {ABOUT_ME_PAGE_TITLE}
        </Typography>
      </Box>
      <Grid
        container
        columnSpacing={20}
        rowGap={6}
        justifyContent="center"
        mt={5}
      >
        {CARD_AND_IMAGE_LIST.map((item, index) => {
          return (
            <CardsAndImages
              key={`about-me-card-${index}`}
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
