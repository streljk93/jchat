import Vue from 'vue';
import VueRouter from 'vue-router';
import config from '@/config';
import {getCurrentScreen} from '@/utils/theme';

Vue.use(VueRouter);

// initial global listeners
window.onresize = () => {
  config.theme.screen = getCurrentScreen();
};
