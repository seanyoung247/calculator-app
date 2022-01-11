<template>
  <div id="key-container">
    <button v-for="key in keys" 
      :key="key.text" 
      class="key"
      :class="key.cls"
      :value="key.value"
      @click="key.action">

      {{ key.text }}
    </button>

  </div>
</template>

<script>
  export default {
    name: 'keypad',
    data() { return {
      keys: [
        { text: "7", value: "7", action: this.chr, cls: ['num'] },
        { text: "8", value: "8", action: this.chr, cls: ['num'] },
        { text: "9", value: "9", action: this.chr, cls: ['num'] },
        { text: "del", value: "D", action: this.del, cls: ['del'] },

        { text: "4", value: "4", action: this.chr, cls: ['num'] },
        { text: "5", value: "5", action: this.chr, cls: ['num'] },
        { text: "6", value: "6", action: this.chr, cls: ['num'] },
        { text: "+", value: "+", action: this.chr, cls: ['num'] },

        { text: "1", value: "1", action: this.chr, cls: ['num'] },
        { text: "2", value: "2", action: this.chr, cls: ['num'] },
        { text: "3", value: "3", action: this.chr, cls: ['num'] },
        { text: "-", value: "-", action: this.chr, cls: ['num'] },

        { text: ".", value: ".", action: this.chr, cls: ['num'] },
        { text: "0", value: "0", action: this.chr, cls: ['num'] },
        { text: "/", value: "/", action: this.chr, cls: ['num'] },
        { text: "x", value: "*", action: this.chr, cls: ['num'] },

        { text: "reset", value: "C", action: this.clr, cls: ['del', 'wide'] },
        { text: "=", value: "=", action: this.eql, cls: ['eql', 'wide'] }
      ]
    }},
    methods: {
      clr() {
        this.$emit('clr');
      },
      del() {
        this.$emit('del');
      },
      eql() {
        this.$emit('eql');
      },
      chr(e) {
        const value = e.target.value;
        this.$emit('chr', value);
      }
    }
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

    padding-top: 5px;
    line-height: 60px;
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