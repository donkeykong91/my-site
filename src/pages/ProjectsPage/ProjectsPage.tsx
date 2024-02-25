import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { PROJECTS_DATA, PROJECTS_PAGE_TITLE } from './constants.ts';
import ProjectCard from '../../features/projects/cards/ProjectCard';

/**
 * This page displays all the projects done or will be done by me. <br>
 * @constructor
 */
const ProjectPage = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Typography variant="h3">{PROJECTS_PAGE_TITLE}</Typography>
      </Box>
      <Grid
        container
        columnSpacing={24}
        rowGap={{ sm: 3, md: 3, lg: 6, xl: 6 }}
        justifyContent="center"
        mt={5}
      >
        {PROJECTS_DATA.map((project) => (
          <Grid>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProjectPage;
