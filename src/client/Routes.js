import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        component: HomePage,
        path: '/',
        exact: true
      },
      {
        component: NotFoundPage
      }
    ]
  }
];
