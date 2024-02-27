import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, IconButton, Typography } from '@mui/material';
import {
  DETAILS,
  COMPANY_NAME_AND_LOCATION_AND_DURATION,
  CONTACT_AND_LOCATION,
  NAME,
  POSITION,
  WORK_EXP_HEADER,
} from './constants.ts';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

/**
 * Displays the first page of my resume and gives the user the option to
 * download the resume in PDF format. <br>
 * @constructor
 */
const ResumePage = () => {
  return (
    <Grid container justifyContent="center">
      <Box mt={10} mb={5}>
        <Paper elevation={16} sx={{ width: '820px', height: '1200px' }}>
          <Box display="flex" flexDirection="row-reverse" mb={-10}>
            <IconButton
              sx={{ color: '#ff1200' }}
              onClick={() => {
                window.location.href = `/DarylOcc - Resume.pdf`;
              }}
            >
              <PictureAsPdfIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Box>
          <Typography
            variant="h3"
            component="h1"
            color="darkblue"
            pt={4}
            pl={8}
            sx={{ fontFamily: 'cambria' }}
          >
            {NAME}
          </Typography>
          <Typography
            whiteSpace="pre-line"
            component="p"
            my={1}
            pl={16}
            sx={{ fontFamily: 'liberation serif' }}
          >
            {CONTACT_AND_LOCATION}
          </Typography>
          <Typography
            variant="h5"
            pl={8}
            component="p"
            color="#4F81BD"
            sx={{ fontFamily: 'liberation serif', fontStyle: 'italic' }}
          >
            {WORK_EXP_HEADER}
          </Typography>
          <Typography
            whiteSpace="pre"
            variant="h6"
            pl={9}
            sx={{ fontFamily: 'liberation serif', fontStyle: 'bold' }}
          >
            {COMPANY_NAME_AND_LOCATION_AND_DURATION}
          </Typography>
          <Typography
            pl={9}
            sx={{ fontFamily: 'liberation serif', fontStyle: 'italic' }}
          >
            {POSITION}
          </Typography>
          <Typography
            pl={9}
            whiteSpace="pre-wrap"
            sx={{ fontFamily: 'liberation serif' }}
          >
            {DETAILS}
          </Typography>
        </Paper>
      </Box>
    </Grid>
  );
};

export default ResumePage;
