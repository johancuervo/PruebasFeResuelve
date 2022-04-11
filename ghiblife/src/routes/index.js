import CollectionList from "../components/Collections";

const publicRoutes = [
  { path: "/", element: <CollectionList /> },
  { path: "/collection/:keyword", element: <CollectionList /> },
];
export default publicRoutes;
