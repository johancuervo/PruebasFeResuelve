import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CollectionList from "./components/Collections";
import CollectionFilters from "./components/Filters";
/*Main component*/
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CollectionList />} />
        <Route path="/Filters" element={<CollectionFilters />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
