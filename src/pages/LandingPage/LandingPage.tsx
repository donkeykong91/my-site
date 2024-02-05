import React from 'react';
import { Card, CardMedia, Container, Typography } from '@mui/material';
import meImage from '../../assets/me.jpg';

// TODO: Mess around with flex/css/styles for card
const LandingPage: React.FC = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        maxWidth: 645,
        marginTop: 5,
        boxShadow: 3,
        borderRadius: 4,
      }}
    >
      {/*<Typography*/}
      {/*  variant="h2"*/}
      {/*  sx={{ display: 'flex', justifyContent: 'center' }}*/}
      {/*>*/}
      {/*  Welcome!*/}
      {/*</Typography>*/}
      <CardMedia sx={{ width: 645, height: 440 }} image={meImage}></CardMedia>
    </Card>
  );
};

export default LandingPage;
