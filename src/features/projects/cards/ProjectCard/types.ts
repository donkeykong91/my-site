/**
 * The data related to the project to be shown in the card. <br>
 * **`header`**: The header displayed at the top of the card <br>
 * (directly above the image). <br>
 * **`title`**: The title displayed in the middle of the card <br>
 * (directly below the image). <br>
 * **`subtitle`**: The subtitle displayed in the middle of the card <br>
 * (directly below the title). <br>
 * **`body`**: The subtitle displayed in the lower region of the card <br>
 * (directly below the subtitle). <br>
 * **`image`**: The main attraction of the card displayed in the middle. <br>
 */
type Project = {
  header: string;
  title: string;
  subTitle: string;
  body: string;
  image: string;
};

/**
 * Props needed to display the project card with header, title, image, subtitle, and body. <br>
 * **`project`**: The data to display in the card for the user to see. <br>
 */
interface ProjectCardProps {
  project: Project;
}

/**
 * Params needed to display the project card with header, title, image, subtitle, and body. <br>
 * **`project`**: The data to display in the card for the user to see. <br>
 */
interface IProjectCardParams {
  project: Project;
}

export type { Project, ProjectCardProps, IProjectCardParams };
