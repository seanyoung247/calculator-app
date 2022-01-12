<template>
  <div class="screen-container" ref="screenOuter">
    <span class="screen" ref="screenInner">{{ value }}</span>
  </div>
</template>

<script>
  import { measureText, getFont } from '../modules/measuretext.js';

  export default {
    name: 'screen',
    props: {
      value: String
    },
    methods: {
      sizeText() {

      }
    },
    mounted() {
      const el = this.$refs.screenOuter;
      console.log(measureText(this.value, getFont(el)));
    }
  }
</script>

<style scoped>
  .screen-container {
    --resize: 1;
    position: relative;
    background-color: var(--screen-back);
    border-radius: var(--app-radius);
    height: var(--screen-height);
    border: var(--app-padding) solid var(--screen-back);
    font-size: var(--screen-font);
    overflow: hidden;
  }
  .screen {
    display: flex;
    justify-content: right;
    align-items: center;
    position: absolute;
    right: 0;
    min-width: 100%;
    height: 100%;
    font-size: calc(var(--screen-font) * var(--resize));
  }
</style>