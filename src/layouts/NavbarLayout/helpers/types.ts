import React, { Dispatch, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';

/**
 * Opens the navigation menu when the user clicks on the `MenuIcon`. <br>
 * **`event`**: Used to get the `currentTarget` HTML Element. <br>
 * **`setAnchorElNav`**: Used to update the `anchorElNav` state to trigger <br>
 * the open action of the menu. <br>
 */
type HandleOpenNavMenu = ({
  event,
  setAnchorElNav,
}: IHandleOpenNavMenuParams) => void;

/**
 * Params needed to open the navigation menu when the user clicks on the `MenuIcon`. <br>
 * **`event`**: Used to get the `currentTarget` HTML Element. <br>
 * **`setAnchorElNav`**: Used to update the `anchorElNav` state to trigger <br>
 * the open action of the menu. <br>
 */
interface IHandleOpenNavMenuParams {
  event: React.MouseEvent<HTMLElement>;
  setAnchorElNav: Dispatch<SetStateAction<null | HTMLElement>>;
}

/**
 * Closes the navigation menu if user does an action to close. <br>
 * **`setAnchorElNav`**: Updates the `anchorElNav` to null to trigger a close <br>
 * of the menu. <br>
 */
type HandleCloseNavMenu = ({
  setAnchorElNav,
}: IHandleCloseNavMenuParams) => void;

/**
 * Params needed to close the navigation menu if user does an action to close. <br>
 * **`setAnchorElNav`**: Updates the `anchorElNav` to null to trigger a close <br>
 * of the menu. <br>
 */
interface IHandleCloseNavMenuParams {
  setAnchorElNav: Dispatch<SetStateAction<null | HTMLElement>>;
}

type HandleButtonClicked = ({
  page,
  navigate,
}: IHandleButtonClickedParams) => void;

interface IHandleButtonClickedParams {
  page: string;
  navigate: NavigateFunction;
}

export type {
  HandleOpenNavMenu,
  HandleCloseNavMenu,
  IHandleCloseNavMenuParams,
  IHandleOpenNavMenuParams,
  HandleButtonClicked,
  IHandleButtonClickedParams,
};
