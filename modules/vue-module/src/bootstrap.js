import Vue from "vue";
const App = new Vue({
  el: "vue",
  name: "app",
  data: {
    template: null,
  },
  render(h) {
    console.log("render reached");
    return h("div", [this.template ? this.template() : ""]);
  },
  mounted() {
    this.template = Vue.compile("<div>working</div>").render;
  },
});

export default App;
