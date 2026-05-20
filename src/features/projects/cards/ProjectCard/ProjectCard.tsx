import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { IProjectCardParams, ProjectCardProps } from './types.ts';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  GLASS_CARD_SX,
  GLASS_ICON_BUTTON_SX,
} from '../../../../theme/glass.ts';

/**
 * Displays the project card with header, title, image, subtitle, and body. <br>
 * @param project - The data to display in the card for the user to see. <br>
 * @constructor
 */
const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
}: IProjectCardParams) => {
  return (
    <Card sx={{ ...GLASS_CARD_SX, maxWidth: 290, height: '100%' }}>
      <CardHeader
        title={project.header}
        titleTypographyProps={{ fontWeight: 800, letterSpacing: '-0.02em' }}
        sx={{ position: 'relative', zIndex: 1, pb: 1 }}
      />
      <CardMedia
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 290,
          height: 160,
          borderBlock: '1px solid rgba(255, 255, 255, 0.42)',
          filter: 'saturate(1.08) contrast(1.02)',
        }}
        image={project.image}
      />
      <CardContent sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 1.5, color: 'rgba(23, 32, 51, 0.58)', fontWeight: 700 }}
          component="div"
        >
          {project.subTitle}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{ color: 'rgba(23, 32, 51, 0.74)', lineHeight: 1.65 }}
        >
          {project.body}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: 'relative', zIndex: 1, px: 2, pb: 2 }}>
        <Tooltip
          title={project.tooltip}
          arrow
          placement={project?.link ? 'right' : 'left'}
        >
          <a href={project?.link} target="_blank" rel="noopener noreferrer">
            <IconButton
              disabled={!project?.link}
              aria-label={project?.ariaLabel}
              sx={{ ...GLASS_ICON_BUTTON_SX, color: '#172033', p: 1.25, m: 0 }}
            >
              <GitHubIcon />
            </IconButton>
          </a>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
