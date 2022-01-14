
<template>
  <div class="screen-container" ref="screen">
    <!-- {{value}} -->
    <div class="screen">{{ value }}</div>
  </div>
</template>

<script>
  import { measureText, getFont } from '../modules/measuretext.js';

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  export default {
    name: 'screen',
    props: {
      value: String
    },
    data() { return {
      textRatio: 1
    }},
    methods: {
      sizeText() {
        const screen = this.$refs.screen;

        if (screen) {
          this.textRatio = clamp( (screen.clientWidth / measureText(this.value, getFont(screen))), 0.5, 1.0 );
        } else {
          this.textRatio = 1;
        }
      }
    },
    watch: {
      value() { this.sizeText(); }
    }
  }
</script>

<style scoped>
  .screen-container {
    height: var(--screen-height);

    text-align: right;

    background-color: var(--screen-back);
    font-size: var(--screen-font);

    border-radius: var(--app-radius);
    border: var(--app-padding) solid var(--screen-back);
    border-bottom: none;

    overflow-y: hidden;
    overflow-x: auto;
  }
  .screen {
    height: 100%;
    min-width: 100%;
    text-align: right;
    font-size: calc(var(--screen-font) * v-bind(textRatio));
  }
</style>
