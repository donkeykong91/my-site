import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import { SxProps } from '@mui/material/styles';

const CardsAndImages: React.FC<{
  index: number;
  component: 'img';
  boxStyle: SxProps;
  src: string;
  alignSelf: string;
  CardComponent: React.FC;
}> = ({
  index,
  component,
  boxStyle,
  src,
  alignSelf,
  CardComponent,
}: {
  index: number;
  component: 'img';
  boxStyle: SxProps;
  src: string;
  alignSelf: string;
  CardComponent: React.FC;
}) =>
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
