import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  LoginScene,
  ListScene,
  DetailScene
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
      </Routes>
    </HashRouter>
  );
};
