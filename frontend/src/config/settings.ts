import Vue from 'vue';
import VueRouter from 'vue-router';
import config from '@/config';
import {getCurrentScreen} from '@/utils/theme';

Vue.use(VueRouter);

// initial global listeners
let timeout = null;
window.onresize = () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    config.theme.screen = getCurrentScreen();
  }, 250);
};
