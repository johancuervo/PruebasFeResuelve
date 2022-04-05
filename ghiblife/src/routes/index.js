import CollectionList from "../components/Collections";
import SearchBar from "../components/searchBar";

const publicRoutes = [
  { path: "/", element: <CollectionList /> },
  { path: "/Filter", element: <SearchBar /> },
];
export default publicRoutes;
