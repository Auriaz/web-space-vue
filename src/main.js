/*  eslint-disable no-new */
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import vuetify from './plugins/vuetify';

require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');

import "./styles/style.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')