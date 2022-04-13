import CollectionList from "../components/Collections";
//array with the path of the routes
const publicRoutes = [
  { path: "/", element: <CollectionList /> },
  { path: "/collection/:keyword", element: <CollectionList /> },
];
export default publicRoutes;
