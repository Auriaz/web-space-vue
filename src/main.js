/*  eslint-disable no-new */
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import vuetify from './plugins/vuetify';
import auth from './firebase/auth';
import db from "./firebase/firestore";
import ScrollAnimation from './directives/scrollanimation';

require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');
import "./styles/style.scss";
// Adding the v-sa directive to animation while scrolling
Vue.directive('sa', ScrollAnimation);

Vue.config.productionTip = false;

let app;

auth.onAuthStateChanged( query => {
    if(!app) {
        app =  new Vue({
            router,
            store,
            vuetify,
            render: h => h(App)
        }).$mount("#app");

        db.collection('users').where('email', '==', query.email).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                store.commit("setUser", doc.data());
            })
        })
    }
})

