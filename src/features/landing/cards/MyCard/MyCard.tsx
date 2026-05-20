import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import { WavingHand } from '@mui/icons-material';
import meImage from '../../../../assets/me.jpg';
import {
  MY_CARD_BLURB,
  MY_CARD_HEADING,
  MY_CARD_BUTTON_TEXT,
  MY_CARD_SUB_HEADER,
} from './constants.ts';
import { useNavigate } from 'react-router-dom';
import { handleClick } from './helpers/myCardHelpers.ts';
import {
  GLASS_CARD_SX,
  GLASS_PRIMARY_BUTTON_SX,
} from '../../../../theme/glass.ts';

/**
 * The card is mainly used to show my picture and give a small blurb <br>
 * about myself. <br>
 * @constructor
 */
const MyCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        ...GLASS_CARD_SX,
        maxWidth: 660,
        mt: { xs: 1, md: 3 },
        mb: 6,
      }}
    >
      <CardMedia
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: { xs: 320, md: 440 },
          borderBottom: '1px solid rgba(255, 255, 255, 0.42)',
          filter: 'saturate(1.06) contrast(1.02)',
        }}
        image={meImage}
      />
      <CardContent
        sx={{ position: 'relative', zIndex: 1, p: { xs: 3, md: 4 } }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontWeight: 800,
          }}
        >
          <WavingHand sx={{ color: '#f4a62a' }} />
          {MY_CARD_HEADING}
        </Typography>
        <Typography
          sx={{ my: 2, fontWeight: 700, color: 'rgba(23, 32, 51, 0.58)' }}
          variant="body2"
          component="div"
        >
          {MY_CARD_SUB_HEADER}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{ color: 'rgba(23, 32, 51, 0.74)', lineHeight: 1.75 }}
        >
          {MY_CARD_BLURB}
        </Typography>
        <Button
          onClick={() => {
            handleClick({ navigate });
          }}
          sx={{ ...GLASS_PRIMARY_BUTTON_SX, mt: 5 }}
          variant="contained"
        >
          {MY_CARD_BUTTON_TEXT}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MyCard;
