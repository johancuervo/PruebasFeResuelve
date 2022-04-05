import { get } from "./api_helper";
import * as url from "./url_helper";
/*Request for the list of Collections*/
export const listCollection = () => get(url.LIST_COLECTION);
export const searchCollection = (id) => get(`${url.LIST_COLECTION}&q=${id}`);
