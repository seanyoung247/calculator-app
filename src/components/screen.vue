
<template>
  <div class="screen-container" ref="screenOuter">
    {{value}}
    <!-- <div class="screen" :style="sizeText()" ref="screenInner">{{ value }}</div> -->
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
        const [outer, inner] = [this.$refs.screenOuter, this.$refs.screenInner];

        if (outer && inner) {
          const screenWidth = outer.clientWidth || 1;
          const textWidth = measureText(this.value, outer);
          if (textWidth > screenWidth) {
            const ratio = Math.max(screenWidth / textWidth, 0.5);
            return `--resize: ${ratio};`;
          }
        }

        return "--resize: 1;";
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

    height: var(--screen-height);

    text-align: right;

    background-color: var(--screen-back);

    border-radius: var(--app-radius);
    border: var(--app-padding) solid var(--screen-back);
    border-bottom: none;
    font-size: var(--screen-font);

    overflow-y: hidden;
    overflow-x: auto;
  }
  .screen {
    height: 100%;
    min-width: 100%;
    text-align: right;
    font-size: calc(var(--screen-font) * var(--resize));
  }
</style>
