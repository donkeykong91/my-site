import Grid from '@mui/material/Unstable_Grid2';
import EmailIcon from '@mui/icons-material/email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, IconButton, Typography } from '@mui/material';
import {
  EMAIL_LINK,
  GH_LINK,
  LINKEDIN_LINK,
  CONTACT_PAGE_TITLE,
} from './constants.ts';
import React from 'react';

/**
 * Displays three links to my email, GitHub, and LinkedIn. <br>
 * @constructor
 */
const ContactPage: React.FC = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Typography variant="h3">{CONTACT_PAGE_TITLE}</Typography>
      </Box>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <a href={EMAIL_LINK}>
          <IconButton sx={{ color: 'black' }}>
            <EmailIcon sx={{ fontSize: 150 }} />
          </IconButton>
        </a>
        <a href={GH_LINK} target="_blank" rel="noopener noreferrer">
          <IconButton sx={{ color: '#cbdae6' }}>
            <GitHubIcon sx={{ fontSize: 150 }} />
          </IconButton>
        </a>
        <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
          <IconButton sx={{ color: '#0a66c2' }}>
            <LinkedInIcon sx={{ fontSize: 150 }} />
          </IconButton>
        </a>
      </Grid>
    </>
  );
};

export default ContactPage;
