import { NavigateFunction } from 'react-router-dom';

/**
 * Navigates the user to the Projects Page after clicking the <br>
 * `Checkout my projects!` button. <br>
 * **`navigate`**: The `react-router-dom`-provided page navigation tool. <br>
 */
type HandleClick = ({ navigate }: IHandleClickParams) => void;

/**
 * Params needed to navigate the user to the Projects Page after clicking the <br>
 * `Checkout my projects!` button. <br>
 * **`navigate`**: The `react-router-dom`-provided page navigation tool. <br>
 */
interface IHandleClickParams {
  navigate: NavigateFunction;
}

export type { HandleClick, IHandleClickParams };
