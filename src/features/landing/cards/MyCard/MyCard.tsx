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
        maxWidth: 645,
        mt: 5,
        mb: 6,
        boxShadow: 20,
        borderRadius: 4,
      }}
    >
      <CardMedia sx={{ maxWidth: 645, height: 440 }} image={meImage} />
      <CardContent sx={{ backgroundColor: '#badbf4' }}>
        <Typography variant="h5" component="div">
          <WavingHand />
          {MY_CARD_HEADING}
        </Typography>
        <Typography
          sx={{ my: 2 }}
          variant="body2"
          color="text.secondary"
          component="div"
        >
          {MY_CARD_SUB_HEADER}
        </Typography>
        <Typography variant="body2" component="div">
          {MY_CARD_BLURB}
        </Typography>
        <Button
          onClick={() => {
            handleClick({ navigate });
          }}
          sx={{ mt: 5 }}
          variant="contained"
        >
          {MY_CARD_BUTTON_TEXT}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MyCard;
