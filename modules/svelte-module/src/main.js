import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
});

window.svelte = app;

export default svelte;
