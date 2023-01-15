import React, { Fragment } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  LoginScene,
  ListScene,
  DetailScene,
  RickAndMortyListScene,
  RickAndMortyDetailScene,
} from '../../scenes';
import { CharactersProvider } from './characters/characters.provider';
import { OrganizationProvider } from './organization/organization.provider';

export const RouterComponent: React.FC = () => {
  return (
    <OrganizationProvider>
      <CharactersProvider>
        <Router>
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
        </Router>
      </CharactersProvider >
    </OrganizationProvider >
  );
};
