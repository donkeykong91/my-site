import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import { CardsAndImagesParams, CardsAndImagesProps } from './types.ts';

/**
 * Displays from left to right either the image and then the card or the <br>
 * card and then the image. <br>
 * @param index - The particular image-card within coming from the data structure. <br>
 * @param component - The `img` component given to the `Box` component. <br>
 * @param boxStyle - The style for the image within the `Box` component. <br>
 * @param src - The image to display. <br>
 * @param alignSelf - The style for the card. <br>
 * @param CardComponent - The particular card to display. <br>
 * @constructor
 */
const CardsAndImages: React.FC<CardsAndImagesProps> = ({
  index,
  component,
  boxStyle,
  src,
  alignSelf,
  CardComponent,
}: CardsAndImagesParams) =>
  index + 1 !== 2 ? (
    <>
      <Grid>
        <Box component={component} sx={{ ...boxStyle }} src={src} />
      </Grid>
      <Grid alignSelf={alignSelf}>
        <CardComponent />
      </Grid>
    </>
  ) : (
    <>
      <Grid alignSelf={alignSelf}>
        <CardComponent />
      </Grid>
      <Grid>
        <Box component={component} sx={{ ...boxStyle }} src={src} />
      </Grid>
    </>
  );

export default CardsAndImages;
