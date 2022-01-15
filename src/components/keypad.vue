<template>
  <div id="key-container">
    <button v-for="(key, index) in keys" :ref="(el)=>addKeyRef(key.codes, el)"
      :key="index" 
      class="key"
      :class="key.cls"
      :value="key.value"
      @click="key.action">

      {{ key.text }}
    </button>
    <keyboard @keyup="keyup"></keyboard>
  </div>
</template>

<script>
  import keyboard from './keyboard.vue';
  export default {
    name: 'keypad',
    components: {
      keyboard
    },
    data() { return {
      keys: [
        { text: "7", value: "7", codes:["7"], action: this.chr, cls: ['num'] },
        { text: "8", value: "8", codes:["8"], action: this.chr, cls: ['num'] },
        { text: "9", value: "9", codes:["9"], action: this.chr, cls: ['num'] },
        { text: "del", value: "D", codes:["D", "Backspace"], action: this.del, cls: ['del'] },

        { text: "4", value: "4", codes:["4"], action: this.chr, cls: ['num'] },
        { text: "5", value: "5", codes:["5"], action: this.chr, cls: ['num'] },
        { text: "6", value: "6", codes:["6"], action: this.chr, cls: ['num'] },
        { text: "+", value: "+", codes:["+"], action: this.chr, cls: ['num'] },

        { text: "1", value: "1", codes:["1"], action: this.chr, cls: ['num'] },
        { text: "2", value: "2", codes:["2"], action: this.chr, cls: ['num'] },
        { text: "3", value: "3", codes:["3"], action: this.chr, cls: ['num'] },
        { text: "-", value: "-", codes:["-"], action: this.chr, cls: ['num'] },

        { text: ".", value: ".", codes:["."], action: this.chr, cls: ['num'] },
        { text: "0", value: "0", codes:["0"], action: this.chr, cls: ['num'] },
        { text: "/", value: "/", codes:["/"], action: this.chr, cls: ['num'] },
        { text: "x", value: "*", codes:["*"], action: this.chr, cls: ['num'] },

        { text: "reset", value: "C", codes:["C","Delete"], action: this.clr, cls: ['del', 'wide'] },
        { text: "=", value: "=", codes:["=","Enter"], action: this.eql, cls: ['eql', 'wide'] }
      ],
      keyMap: new Map()
    }},
    methods: {
      // Key event handling
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
      },

      // Keyboard entry
      addKeyRef(codes, el) {
        for (const code of codes) {
          this.keyMap.set(code, el);
        }
      },
      keyup(e) {
        const key = this.keyMap.get(e.key);
        // If the pressed key is tied to a button, simulate button click
        if (key) {
          key.classList.add('pressed');
          setTimeout(()=>key.classList.remove('pressed'), 150);
          key.click();
        }
      },
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

    transition: margin 0.1s, box-shadow 0.1s;
  }

  .key.wide {
    width: calc( (var(--key-width) * 2) + var(--key-padding) );
    grid-column-end: span 2;
  }

  .key.num {
    --shadow: var(--key-shadow);
    box-shadow: 0 4px 0 0 var(--shadow);
    background-color: var(--key-color);
    font-size: 28px;
    color: var(--key-text);
  }

  .key.del {
    --shadow: var(--del-shadow);
    box-shadow: 0 4px 0 0 var(--shadow);
    background-color: var(--del-color);
    font-size: 16px;
    color: var(--del-text);
    text-transform: uppercase;
  }

  .key.eql {
    --shadow: var(--eql-shadow);
    box-shadow: 0 4px 0 0 var(--shadow);
    background-color: var(--eql-color);
    font-size: 18px;
    color: var(--eql-text);
  }

  .key:active {
    margin: 4px 0 0 0;
    box-shadow: 0 0px 0 0 var(--shadow);
  }
  .key.pressed {
    margin: 4px 0 0 0;
    box-shadow: 0 0px 0 0 var(--shadow);
  }
</style>