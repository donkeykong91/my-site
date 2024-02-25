import { SxProps, Theme } from '@mui/material/styles';
import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';

/**
 * Global card that is customizable by the developer for style in the `Card`
 * and `Box` as well as icon. <br>
 * **`cardHeader`**: Required header content for the card. <br>
 * **`Icon`**: Optional `Icon` to show in the card. <br>
 * **`image`**: Optional image to show in the card. <br>
 * **`cardBody`**: Required body for the card. <br>
 * **`cardSx`**: Optional style for the Card. <br>
 * **`boxSx`**: Optional style for the Box. <br>
 * **`iconSx`**: Optional style for the Icon. <br>
 * **`imageSx`**: Optional style for the image. <br>
 */
interface InfoCardProps {
  cardHeader: string;
  cardBody: string;
  Icon?: React.ElementType<SvgIconProps>;
  image?: string;
  cardSx?: SxProps<Theme>;
  boxSx?: SxProps<Theme>;
  iconSx?: SxProps<Theme>;
  imageSx?: SxProps<Theme>;
}

/**
 * Global card that is customizable by the developer for style in the `Card`
 * and `Box` as well as icon. <br>
 * **`cardHeader`**: Required header content for the card. <br>
 * **`Icon`**: Optional `Icon` to show in the card. <br>
 * **`image`**: Optional image to show in the card. <br>
 * **`cardBody`**: Required body for the card. <br>
 * **`cardSx`**: Optional style for the Card. <br>
 * **`boxSx`**: Optional style for the Box. <br>
 * **`iconSx`**: Optional style for the Icon. <br>
 * **`imageSx`**: Optional style for the image. <br>
 */
interface InfoCardParams {
  cardHeader: string;
  cardBody: string;
  Icon?: React.ElementType<SvgIconProps>;
  image?: string;
  cardSx?: SxProps<Theme>;
  boxSx?: SxProps<Theme>;
  iconSx?: SxProps<Theme>;
  imageSx?: SxProps<Theme>;
}

export type { InfoCardProps, InfoCardParams };
