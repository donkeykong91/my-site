import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { InfoCardProps, InfoCardParams } from './types';
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
    <Card sx={{ ...cardSx }}>
      <CardContent>
        {Icon && (
          <Box sx={{ ...boxSx }}>
            <Icon sx={{ ...iconSx }} />
          </Box>
        )}
        {image && <CardMedia sx={{ ...imageSx }} image={image} />}
        <Typography variant="h5" align="center" component="div">
          {cardHeader}
        </Typography>
        <Typography>{cardBody}</Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
