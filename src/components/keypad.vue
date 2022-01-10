<template>
  <div id="key-container">
    <button v-for="key in keys" 
      v-bind:key="key.text" 
      class="key"
      v-bind:class="key.type" 
      v-on:click="key.action">

      {{ key.text }}
    </button>

  </div>
</template>

<script>
  const keys = [
    { text: "7", action: callback, type: ['num'] },
    { text: "8", action: callback, type: ['num'] },
    { text: "9", action: callback, type: ['num'] },
    { text: "del", action: callback, type: ['del'] },

    { text: "4", action: callback, type: ['num'] },
    { text: "5", action: callback, type: ['num'] },
    { text: "6", action: callback, type: ['num'] },
    { text: "+", action: callback, type: ['num'] },

    { text: "1", action: callback, type: ['num'] },
    { text: "2", action: callback, type: ['num'] },
    { text: "3", action: callback, type: ['num'] },
    { text: "-", action: callback, type: ['num'] },

    { text: ".", action: callback, type: ['num'] },
    { text: "0", action: callback, type: ['num'] },
    { text: "/", action: callback, type: ['num'] },
    { text: "x", action: callback, type: ['num'] },

    { text: "reset", action: callback, type: ['del', 'wide'] },
    { text: "=", action: callback, type: ['eql', 'wide'] }
  ];

  export default {
    name: 'keypad',
    data() { return {
      keys: keys
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