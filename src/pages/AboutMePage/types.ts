import { SxProps } from '@mui/material/styles';
import React from 'react';

/**
 * Displays from left to right either the image and then the card or the <br>
 * card and then the image. <br>
 * **`index`**: The particular image-card within coming from the data structure. <br>
 * **`component`**: The `img` component given to the `Box` component. <br>
 * **`boxStyle`**: The style for the image within the `Box` component. <br>
 * **`src`**: The image to display. <br>
 * **`alignSelf`**: The style for the card. <br>
 * **`CardComponent`**: The particular card to display. <br>
 */
interface CardsAndImagesProps {
  index: number;
  component: 'img';
  boxStyle: SxProps;
  src: string;
  alignSelf: string;
  CardComponent: React.FC;
}

/**
 * Displays from left to right either the image and then the card or the <br>
 * card and then the image. <br>
 * **`index`**: The particular image-card within coming from the data structure. <br>
 * **`component`**: The `img` component given to the `Box` component. <br>
 * **`boxStyle`**: The style for the image within the `Box` component. <br>
 * **`src`**: The image to display. <br>
 * **`alignSelf`**: The style for the card. <br>
 * **`CardComponent`**: The particular card to display. <br>
 */
interface CardsAndImagesParams {
  index: number;
  component: 'img';
  boxStyle: SxProps;
  src: string;
  alignSelf: string;
  CardComponent: React.FC;
}

export type { CardsAndImagesProps, CardsAndImagesParams };
