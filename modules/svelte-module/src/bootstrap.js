import App from './App.svelte';

const app = new App({
  target: document.getElementById('svelte'),
  props: {
    name: 'world',
  },
});

window.svelte = app;

export default app;
