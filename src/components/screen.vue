
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