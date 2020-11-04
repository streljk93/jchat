import VueRouter from 'vue-router';
import routes from './routes';

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const isAuth = false;
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {

    if (!isAuth) next({
      name: 'Login',
      query: {redirect: to.fullPath},
    });
    else next();

  } else {
    next();
  }
});

export default router;
