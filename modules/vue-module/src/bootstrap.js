import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;
Vue.component('Test', {
  render(createElem) {
    return createElem('p', 'The rendered paragraph text stays here');
  },
});
const app = new Vue({
  name: 'app',
  data() {
    return { msg: 'Vue module' };
  },
  render: function(h) {
    return h(App);
  },
});

export default app;
