import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  memberList: string;
  memberDetail: string;
  rickAndMortyList: string;
  rickAndMortyDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  memberList: '/member/',
  memberDetail: '/member/:id',
  rickAndMortyList: '/rickandmorty/list',
  rickAndMortyDetail: '/rickandmorty/:id',
};

interface Routes extends Omit<SwitchRoutes, 'memberDetail' | 'rickAndMortyDetail'> {
  memberDetail: (id: string) => string;
  rickAndMortyDetail: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  memberDetail: id => generatePath(switchRoutes.memberDetail, { id }),
  rickAndMortyDetail: id => generatePath(switchRoutes.rickAndMortyDetail, { id }),
};
