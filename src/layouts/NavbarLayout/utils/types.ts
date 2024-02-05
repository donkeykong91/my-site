/**
 * Gets the particular slug path based on the `page`. <br>
 * **`page`**: One of the page names of the page as shown <br>
 * in the navbar buttons. <br>
 */
type GetPage = ({ page }: IGetPageParams) => string;

/**
 * Params needed to get the particular slug path based on the `page`. <br>
 * **`page`**: One of the page names of the page as shown <br>
 * in the navbar buttons. <br>
 */
interface IGetPageParams {
  page: string;
}

export type { GetPage, IGetPageParams };
