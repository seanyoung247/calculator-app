<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <calculator msg="Caclulator App"/>
</template>

<script>
import calculator from './components/calculator.vue'

export default {
  name: 'App',
  components: {
    calculator
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
