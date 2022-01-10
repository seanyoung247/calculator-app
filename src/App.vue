<template>
  <keypad></keypad>
</template>

<script>
  import keypad from './components/keypad.vue';
  export default {
    name: 'App',
    components: {
      keypad
    }
  }
</script>

<style>
  :root {
    --mobile-width: 375px;
    --desktop-width: 1440px;
  }

  @import './assets/themes.css';

  @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');
  #app {
    font-family: 'Spartan', sans-serif;
    font-size: 32px;
    color: var(--body-text);
  }
</style>
