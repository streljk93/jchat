// routes
import home from './home';
import login from './login';
import notFound from './notFound';

export default [
  home,
  login,
  ...notFound,
];
