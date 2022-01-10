<template>
  <keypad></keypad>
</template>

<script>
  import keypad from './components/keypad.vue';
  import './assets/global.css'

  const themes = [
    'dark', 'light', 'high-contrast'
  ]

  export default {
    name: 'App',
    components: {
      screen,
      keypad
    },
    mounted() {
      setTheme(themes[0]);
    }
  }

  function setTheme(name) {
    document.body.classList.add(name);
  }
</script>

<style>

</style>
