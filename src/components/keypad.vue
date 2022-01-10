<template>
  <div id="key-container">
    <button v-on:click="callback">1</button>
    <button v-on:click="callback">2</button>
    <button v-on:click="callback">3</button>
    <button v-on:click="callback">4</button>
    <button v-on:click="callback">5</button>
    <button v-on:click="callback">6</button>
    <button v-on:click="callback">7</button>
    <button v-on:click="callback">8</button>
  </div>
</template>

<script>
  // const keys = [

  // ]


  export default {
    name: 'keypad',
    data() { return {
      callback: callback
    }}
  }

  function callback(e) {
    console.log(e.target);
  }
</script>

<style scoped>
  #key-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--key-padding);

    padding: var(--app-padding);
    border-radius: var(--app-radius);
    background-color: var(--keys-back);
  }

  .key {
    width: var(--key-width);
    height: var(--key-height);
  }

  #key-container > button {
    width: var(--key-width);
    height: var(--key-height);
    place-self: center;
    margin: 0 0 4px 0;
    border: none;
    border-radius: var(--app-radius);
    box-shadow: 0 4px 0 0 var(--key-shadow);
    background-color: var(--key-color);
    font-size: 32px;
    font-family: 'Spartan', sans-serif;
    color: var(--key-text);
  }
  #key-container > button:active {
    margin: 4px 0 0 0;
    box-shadow: none;
  }
</style>