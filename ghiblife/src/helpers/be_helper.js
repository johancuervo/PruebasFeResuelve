import { get } from "./api_helper";
import * as url from "./url_helper";
/*variable for the list of films*/ 
export const listFilms = () => get(url.LIST_FILMS);
