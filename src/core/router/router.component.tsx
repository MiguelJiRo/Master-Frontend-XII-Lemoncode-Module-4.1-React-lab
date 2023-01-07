import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  LoginScene,
  ListScene,
  DetailScene,
  RickAndMortyListScene,
  RickAndMortyDetailScene,
} from 'scenes';

export const RouterComponent: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.root}
          element={<LoginScene />}
        />
        <Route
          path={switchRoutes.memberList}
          element={<ListScene />}
        />
        <Route
          path={switchRoutes.memberDetail}
          element={<DetailScene />}
        />
        <Route
          path={switchRoutes.rickAndMortyList}
          element={<RickAndMortyListScene />}
        />
        <Route
          path={switchRoutes.rickAndMortyDetail}
          element={<RickAndMortyDetailScene />}
        />
      </Routes>
    </HashRouter>
  );
};
