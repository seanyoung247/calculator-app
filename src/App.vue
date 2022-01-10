<template>
  <header>
    <h1>calc</h1>
    <theme-toggler v-bind:themes=themes></theme-toggler>
  </header>
  <section>
    <screen></screen>
  </section>
  <section>
    <keypad></keypad>
  </section>
</template>

<script>
  import themeToggler from './components/theme.vue';
  import screen from './components/screen.vue';
  import keypad from './components/keypad.vue';
  import './assets/global.css'

  const themes = [
    'dark', 'light', 'high-contrast'
  ]

  export default {
    name: 'App',
    components: {
      themeToggler,
      screen,
      keypad
    },
    data() { return {
      themes: themes
    }},
    mounted() {
      setTheme(themes[0]);
    }
  }

  function setTheme(name) {
    document.body.classList.add(name);
  }
</script>

<style>
  header {
    display: flex;
    width: 100%;
    border: 1px solid red;
    justify-content: space-between;
  }
</style>
