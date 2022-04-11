import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import publicRoutes from "./routes";

/*Main component*/
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {publicRoutes.map(({ path, element }, index) => (
          <Route path={path} element={element} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
