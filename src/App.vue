<template>
  <header>
    <h1>calc</h1>
  </header>
  <section>
    <screen></screen>
  </section>
  <section>
    <keypad></keypad>
  </section>
</template>

<script>
  import screen from './components/screen.vue';
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
