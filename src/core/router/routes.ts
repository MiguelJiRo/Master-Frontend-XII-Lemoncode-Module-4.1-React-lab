import { generatePath } from 'react-router-dom';
import { RickAndMortyDetailScene } from '../../scenes/rick-and-morty-detail.scene';
import { RickAndMortyListComponent } from '../../pods/rick-and-morty-list/rick-and-morty-list.component';

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

interface Routes extends Omit<SwitchRoutes, 'memberDetail'> {
  memberDetail: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  memberDetail: id => generatePath(switchRoutes.memberDetail, { id }),
};
