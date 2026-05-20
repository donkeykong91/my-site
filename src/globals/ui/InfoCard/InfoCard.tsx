import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { InfoCardProps, InfoCardParams } from './types';
import { GLASS_CARD_SX } from '../../../theme/glass.ts';
import React from 'react';

/**
 * Global card that is customizable by the developer for style in the `Card`
 * and `Box` as well as icon. <br>
 * @param cardHeader - Required header content for the card. <br>
 * @param cardBody - Required body for the card. <br>
 * @param Icon - Optional `Icon` to show in the card. <br>
 * @param image - Optional image to show in the card. <br>
 * @param cardSx - Optional style for the Card. <br>
 * @param boxSx - Optional style for the Box. <br>
 * @param iconSx - Optional style for the Icon. <br>
 * @param imageSx - Optional style for the image. <br>
 * @constructor
 */
const InfoCard: React.FC<InfoCardProps> = ({
  cardHeader,
  cardBody,
  Icon,
  image,
  cardSx,
  boxSx,
  iconSx,
  imageSx,
}: InfoCardParams) => {
  return (
    <Card sx={{ ...(GLASS_CARD_SX as object), ...(cardSx as object) }}>
      <CardContent
        sx={{ position: 'relative', zIndex: 1, p: { xs: 3, md: 4 } }}
      >
        {Icon && (
          <Box sx={{ ...boxSx }}>
            <Icon sx={{ ...iconSx }} />
          </Box>
        )}
        {image && <CardMedia sx={{ ...imageSx }} image={image} />}
        <Typography
          variant="h5"
          align="center"
          component="div"
          sx={{ mb: 2, fontWeight: 800, letterSpacing: '-0.03em' }}
        >
          {cardHeader}
        </Typography>
        <Typography sx={{ color: 'rgba(23, 32, 51, 0.74)', lineHeight: 1.75 }}>
          {cardBody}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
