import React from 'react';
import { Card, Typography } from '@mui/material';
import { FOOTER_TEXT } from './constants.ts';

const FooterLayout: React.FC = () => {
  return (
    <Card
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 5,
        width: '100%',
        backgroundColor: '#e7f1ff',
      }}
    >
      <Typography>{FOOTER_TEXT}</Typography>
    </Card>
  );
};

export default FooterLayout;
