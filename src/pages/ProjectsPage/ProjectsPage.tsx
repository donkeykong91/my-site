import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { PROJECTS_DATA, PROJECTS_PAGE_TITLE } from './constants.ts';
import ProjectCard from '../../features/projects/cards/ProjectCard';
import { PAGE_TITLE_SX } from '../../theme/glass.ts';

/**
 * This page displays all the projects done or will be done by me. <br>
 * @constructor
 */
const ProjectPage = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Typography variant="h3" sx={PAGE_TITLE_SX}>
          {PROJECTS_PAGE_TITLE}
        </Typography>
      </Box>
      <Grid
        container
        columnSpacing={{ xs: 0, md: 6, lg: 8 }}
        rowGap={{ xs: 4, md: 5, lg: 6 }}
        justifyContent="center"
        mt={5}
      >
        {PROJECTS_DATA.map((project) => (
          <Grid key={project.title}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProjectPage;
