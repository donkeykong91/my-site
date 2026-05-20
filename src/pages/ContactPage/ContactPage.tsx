import Grid from '@mui/material/Unstable_Grid2';
import EmailIcon from '@mui/icons-material/Email';
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
import { GLASS_ICON_BUTTON_SX, PAGE_TITLE_SX } from '../../theme/glass.ts';

/**
 * Displays three links to my email, GitHub, and LinkedIn. <br>
 * @constructor
 */
const ContactPage: React.FC = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Typography variant="h3" sx={PAGE_TITLE_SX}>
          {CONTACT_PAGE_TITLE}
        </Typography>
      </Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        minHeight="72vh"
        gap={{ xs: 2, md: 4 }}
      >
        <a href={EMAIL_LINK} aria-label="send email">
          <IconButton
            aria-label="contact email"
            sx={{ ...GLASS_ICON_BUTTON_SX, color: '#172033' }}
          >
            <EmailIcon sx={{ fontSize: { xs: 84, md: 128 } }} />
          </IconButton>
        </a>
        <a href={GH_LINK} target="_blank" rel="noopener noreferrer">
          <IconButton
            sx={{ ...GLASS_ICON_BUTTON_SX, color: '#24292f' }}
            aria-label="view github"
          >
            <GitHubIcon sx={{ fontSize: { xs: 84, md: 128 } }} />
          </IconButton>
        </a>
        <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
          <IconButton
            sx={{ ...GLASS_ICON_BUTTON_SX, color: '#0a66c2' }}
            aria-label="view linkedin"
          >
            <LinkedInIcon sx={{ fontSize: { xs: 84, md: 128 } }} />
          </IconButton>
        </a>
      </Grid>
    </>
  );
};

export default ContactPage;
