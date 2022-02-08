import React from "react";
import { Routes, Route } from "react-router";

import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import InfosFilm from "./components/pages/InfosFilm";

export default () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/film/:id" element={<InfosFilm />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
