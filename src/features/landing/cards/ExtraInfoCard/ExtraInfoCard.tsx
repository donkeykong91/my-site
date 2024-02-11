import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import {
  EXTRA_INFO_CARD_HEADING,
  EXTRA_INFO_CARD_BODY_TEXT,
} from './constants.ts';
import { RocketLaunch } from '@mui/icons-material';

/**
 * Displays extra, longer, information about me and my experience in the card. <br>
 * @constructor
 */
const ExtraInfoCard: React.FC = () => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        maxHeight: 550,
        mt: 20,
        borderRadius: 4,
        boxShadow: 20,
        backgroundColor: '#9acdf6',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <RocketLaunch sx={{ fontSize: 100, justifyContent: 'center' }} />
        </Box>
        <Typography variant="h5" align="center" component="div">
          {EXTRA_INFO_CARD_HEADING}
        </Typography>
        <Typography>{EXTRA_INFO_CARD_BODY_TEXT}</Typography>
      </CardContent>
    </Card>
  );
};

export default ExtraInfoCard;
