// lib
import Vue from 'vue';
import _ from 'lodash';

// environments
import common from './common';
import development from './development';
import production from './production';

const env = {
  development,
  production,
};

const config = Vue.observable(_.merge(
  common,
  env[process.env.NODE_ENV],
));

export default config;
