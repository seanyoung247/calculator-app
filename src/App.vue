
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
    <h2 class="hide-element">screen</h2>
    <screen :value="expr.formatted"></screen>
  </section>
  <section>
    <h2 class="hide-element">keypad</h2>
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

  import { getSetting, setSetting } from './modules/settings.mjs';
  import Calc from './modules/calc.mjs';

  export default {
    name: 'App',
    components: {
      themeToggler,
      screen,
      keypad
    },
    data() { return {
      theme: 0,
      themes: ['dark', 'light', 'high-contrast'],
      expr: new Calc()
    }},
    methods: {
      setTheme(index) {
        document.body.classList.remove(this.themes[this.theme]);
        this.theme = index;
        document.body.classList.add(this.themes[this.theme]);

        setSetting('prefers-color-scheme', this.theme.toString());
      }
    },
    mounted() {
      const theme = parseInt(getSetting('prefers-color-scheme', '0'));
      this.setTheme(theme);
    }
  }
</script>

<style src="./assets/global.css"></style>
