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
    <keypad 
      @clr="_=>expr.clear()"
      @del="_=>expr.del()"
      @eql="_=>expr.evaluate()"
      @chr="v=>expr.addCharacter(v)"></keypad>
  </section>
</template>

<script>
  import themeToggler from './components/theme.vue';
  import screen from './components/screen.vue';
  import keypad from './components/keypad.vue';

  import Calc from './calc.js';

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
      theme: 0,
      themes: themes,
      expr: new Calc()
    }},
    methods: {
      setTheme(index) {
        document.body.classList.remove(this.themes[this.theme]);
        this.theme = index;
        document.body.classList.add(this.themes[this.theme]);
      }
    },
    mounted() {
      this.setTheme(0);
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
