import Vue from 'vue';
import Home from './components/vue-split-panel.vue';

Vue.config.productionTip = false;

import VueSplit from '../src';
// import '../dist/styles/vue-split-panel.css';

Vue.use(VueSplit);
//Vue.component('Icon', Icon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Home)
});
