import { getPage } from '../../../../../globals/utils/matchers.ts';
import { PROJECTS } from '../../../../../globals/constants.ts';
import { HandleClick, IHandleClickParams } from './types.ts';

/**
 * Navigates the user to the Projects Page after clicking the <br>
 * `Checkout my projects!` button. <br>
 * @param navigate - The `react-router-dom`-provided page navigation tool. <br>
 */
const handleClick: HandleClick = ({ navigate }: IHandleClickParams) => {
  const slugPath = getPage({ page: PROJECTS });
  if (!slugPath) {
    // TODO: Create a custom error handler
    console.error(`slugPath is falsey: ${slugPath}`);
  }
  navigate(slugPath);
};

export { handleClick };
