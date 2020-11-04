import CommonTemplate from '@/views/common-template.vue';
import LoginView from '@/views/login-view.vue';
import JAppBar from '@/components/layouts/j-app-bar.vue';

export default {
  path: '/login',
  component: CommonTemplate,
  props: {onlyLogo: true},
  children: [{
    name: 'Login',
    path: '',
    components: {
      appbar: JAppBar,
      default: LoginView,
    },
  }],
};
