// setting
import '@/config/settings';

// lib
import Vue from 'vue';

// app
import App from '@/App.vue';
import router from '@/router';

// styles
import '@/styles';

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
