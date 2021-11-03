import * as icons from 'components/_icons';

interface Props {
  title: string;
  route?: string;
  hasChild: boolean;
  children?: string[];
}

const topNavElements: Props[] = [
  {
    title: 'Home',
    route: '/',
    hasChild: false
  },

  {
    title: 'Dashboard',
    route: '/dashboard/search/youtube',
    hasChild: true,
    children: ['search', 'request', 'subscribe', 'settings', 'credit', 'download']
  },

  {
    title: 'Login',
    route: '/login',
    hasChild: false
  }
];

export default topNavElements;
