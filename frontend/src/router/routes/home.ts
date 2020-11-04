import CommonTemplate from '@/views/common-template.vue';
import JAppBar from '@/components/layouts/j-app-bar.vue';
import MainView from '@/views/main-view.vue';

export default {
  path: '/',
  component: CommonTemplate,
  meta: {requiresAuth: true},
  children: [{
    name: 'Home',
    path: '',
    components: {
      appbar: JAppBar,
      default: MainView,
    }
  }],
};
