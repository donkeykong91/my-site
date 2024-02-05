import {
  HandleButtonClicked,
  HandleCloseNavMenu,
  HandleOpenNavMenu,
  IHandleButtonClickedParams,
  IHandleCloseNavMenuParams,
  IHandleOpenNavMenuParams,
} from './types.ts';
import { getPage } from '../utils/matchers.ts';

/**
 * Opens the navigation menu when the user clicks on the `MenuIcon`. <br>
 * @param event - Used to get the `currentTarget` HTML Element. <br>
 * @param setAnchorElNav - Used to update the `anchorElNav` state to trigger <br>
 * the open action of the menu. <br>
 */
const handleOpenNavMenu: HandleOpenNavMenu = ({
  event,
  setAnchorElNav,
}: IHandleOpenNavMenuParams) => {
  setAnchorElNav(event.currentTarget);
};

/**
 * Closes the navigation menu if user does an action to close. <br>
 * @param setAnchorElNav - Updates the `anchorElNav` to null to trigger a close <br>
 * of the menu. <br>
 */
const handleCloseNavMenu: HandleCloseNavMenu = ({
  setAnchorElNav,
}: IHandleCloseNavMenuParams) => {
  setAnchorElNav(null);
};

/**
 * Takes the user to the page of the clicked-on button in the navbar. <br>
 * @param page - The chosen page the user clicked on. <br>
 * @param navigate - The `react-router-dom`-provided page navigation tool. <br>
 */
const handleButtonClick: HandleButtonClicked = ({
  page,
  navigate,
}: IHandleButtonClickedParams) => {
  const slugPath = getPage({ page });
  if (!slugPath) {
    // TODO: Create a custom error handler
    console.error(`slugPath is falsey: ${slugPath}`);
  }
  navigate(slugPath);
};

export { handleOpenNavMenu, handleCloseNavMenu, handleButtonClick };
