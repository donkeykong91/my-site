import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { IProjectCardParams, ProjectCardProps } from './types.ts';

/**
 * Displays the project card with header, title, image, subtitle, and body. <br>
 * @param project - The data to display in the card for the user to see. <br>
 * @constructor
 */
const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
}: IProjectCardParams) => {
  return (
    <Card sx={{ maxWidth: 260 }}>
      <CardHeader title={project.header} />
      <CardMedia sx={{ maxWidth: 260, height: 150 }} image={project.image} />
      <CardContent>
        <Typography variant="h6">{project.title}</Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          {project.subTitle}
        </Typography>
        <Typography variant="body2" component="div">
          {project.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
