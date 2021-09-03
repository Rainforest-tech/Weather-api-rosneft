import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueDateFns from 'vue-date-fns';
import VueApexCharts from 'vue-apexcharts';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/style.scss';

Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);
Vue.use(VueDateFns);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
