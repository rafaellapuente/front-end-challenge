import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import { Template } from "./components/MainComponents";
import "./App.css";

import Header from "./components/partials/Header";

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
      </Template>
    </BrowserRouter>
  );
}

export default App;
