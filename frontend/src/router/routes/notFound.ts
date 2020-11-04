import CommonTemplate from '@/views/common-template.vue';
import JAppBar from '@/components/layouts/j-app-bar.vue';
import NotFoundView from '@/views/not-found-view.vue';

export default [
  {
    path: '/404',
    component: CommonTemplate,
    children: [{
      name: 'NotFound',
      path: '',
      alias: 'not-found',
      props: {onlyLogo: true},
      components: {
        appbar: JAppBar,
        default: NotFoundView,
      }
    }]
  },
  {
    path: '/*',
    redirect: '/404'
  },
];
