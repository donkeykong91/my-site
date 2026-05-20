import React from 'react';
import { Card, Typography } from '@mui/material';
import { FOOTER_TEXT } from './constants.ts';
import { GLASS_CARD_SX } from '../../theme/glass.ts';

const FooterLayout: React.FC = () => {
  return (
    <Card
      component="footer"
      sx={{
        ...GLASS_CARD_SX,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 5,
        mx: { xs: 2, md: 5 },
        mb: 3,
        width: 'auto',
        minHeight: 64,
      }}
    >
      <Typography sx={{ fontWeight: 700, color: 'rgba(23, 32, 51, 0.72)' }}>
        {FOOTER_TEXT}
      </Typography>
    </Card>
  );
};

export default FooterLayout;
