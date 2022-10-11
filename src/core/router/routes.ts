import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  memberList: string;
  memberDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  memberList: '/member/',
  memberDetail: '/member/:id',
};

interface Routes extends Omit<SwitchRoutes, 'memberDetail'> {
  memberDetail: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  memberDetail: id => generatePath(switchRoutes.memberDetail, { id }),
};
