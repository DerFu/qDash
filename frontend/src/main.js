// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueWebsocket from 'vue-websocket';
import App from './App';
import router from './router';

Vue.use(VueWebsocket, 'http://192.168.179.20:1313');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
