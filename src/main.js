/*  eslint-disable no-new */
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import vuetify from './plugins/vuetify';
// import firebase from './firebase'

require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');

import "./styles/style.scss";

Vue.config.productionTip = false;

// let app;

// firebase.auth().onAuthStateChanged( user => {
//     // if(store.state.online) {
//       // }
//     if(!app) {
//         store.commit("setUser", { id: user.uid });
      // app = 
      new Vue({
          router,
          store,
          vuetify,
          render: h => h(App)
        }).$mount("#app");
      
//     }
//   }
// )

