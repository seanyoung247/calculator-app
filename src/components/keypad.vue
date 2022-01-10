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
    
    place-self: center;
    margin: 0 0 4px 0;

    border: none;
    border-radius: var(--app-radius);
    font-family: 'Spartan', sans-serif;
  }

  .key.wide {
    width: calc( (var(--key-width) * 2) + var(--key-padding) );
    grid-column-end: span 2;
  }

  .key.num {
    box-shadow: 0 4px 0 0 var(--key-shadow);
    background-color: var(--key-color);
    font-size: 28px;
    color: var(--key-text);
  }

  .key.del {
    box-shadow: 0 4px 0 0 var(--del-shadow);
    background-color: var(--del-color);
    font-size: 16px;
    color: var(--del-text);
    text-transform: uppercase;
  }

  .key.eql {
    box-shadow: 0 4px 0 0 var(--eql-shadow);
    background-color: var(--eql-color);
    font-size: 18px;
    color: var(--eql-text);
  }

  .key:active {
    margin: 4px 0 0 0;
    box-shadow: none;
  }
</style>