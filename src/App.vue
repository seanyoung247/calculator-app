<template>
  <header>
    <h1>calc</h1>
    <theme-toggler 
      :themes="themes" 
      :value="theme" 
      @setTheme="setTheme">
    </theme-toggler>
  </header>
  <section>
    <screen :value="expr.formatted"></screen>
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
      theme: themes[0],
      themes: themes     
    }},
    methods: {
      setTheme(name) {
        document.body.classList.remove(this.theme);
        this.theme = name;
        document.body.classList.add(this.theme);
      }
    },
    mounted() {
      this.setTheme(this.theme);
    }
  }
</script>

<style>
  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
</style>
