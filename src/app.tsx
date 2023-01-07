import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginScene } from "./scenes/login.scene";
import { RickAndMortyListScene } from "./scenes/rick-and-morty-list.scene";
import { ListScene } from "./scenes/list.scene";
import { DetailScene } from "./scenes/detail.scene";
import { RickAndMortyDetailScene } from "./scenes/rick-and-morty-detail.scene";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScene />} />
        <Route path="/list" element={<ListScene />} />
        <Route path="/rickandmorty/list" element={<RickAndMortyListScene />} />
        <Route path="/detail/:id" element={<DetailScene />} />
        <Route path="/rickandmorty/detail/:id" element={<RickAndMortyDetailScene />} />
      </Routes>
    </Router>
  );
};
