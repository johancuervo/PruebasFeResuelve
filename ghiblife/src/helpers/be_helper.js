import { get } from "./api_helper";
import * as url from "./url_helper";
/*Request for the list of Collections*/
export const listCollection = ({ keyword="", page, size } = {}) =>
  get(
    `${url.LIST_COLECTION}&sort=rank&sortorder=asc&size=${size}&q=${keyword}&page=${page}`
  );

export const searchCollection = (keyword) =>
  get(`${url.LIST_COLECTION}&q=${keyword}`);
