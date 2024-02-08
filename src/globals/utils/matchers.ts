import {
  ABOUT_ME,
  CONTACT,
  FUN,
  LANDING,
  PROJECTS,
  RESUME,
  ABOUT_ME_PAGE,
  CONTACT_PAGE,
  FUN_PAGE,
  LANDING_PAGE,
  PROJECTS_PAGE,
  RESUME_PAGE,
} from '../constants.ts';
import { GetPage, IGetPageParams } from './types.ts';

/**
 * Gets the particular slug path based on the `page`. <br>
 * @param page - One of the page names of the page as shown <br>
 * in the navbar buttons. <br>
 */
const getPage: GetPage = ({ page }: IGetPageParams) => {
  switch (page) {
    case ABOUT_ME: {
      return ABOUT_ME_PAGE;
    }
    case FUN: {
      return FUN_PAGE;
    }
    case CONTACT: {
      return CONTACT_PAGE;
    }
    case RESUME: {
      return RESUME_PAGE;
    }
    case PROJECTS: {
      return PROJECTS_PAGE;
    }
    case LANDING: {
      return LANDING_PAGE;
    }
    // TODO: Add Page Does Not Exist Error Page
    default: {
      return '';
    }
  }
};

export { getPage };
