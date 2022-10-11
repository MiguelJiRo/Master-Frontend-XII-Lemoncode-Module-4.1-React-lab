import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginScene } from "./scenes/login.scene";
import { ListScene } from "./scenes/list.scene";
import { DetailScene } from "./scenes/detail.scene";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScene />} />
        <Route path="/list" element={<ListScene />} />
        <Route path="/detail/:id" element={<DetailScene />} />
      </Routes>
    </Router>
  );
};
