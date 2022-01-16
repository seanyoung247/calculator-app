
<template>
  <div class="screen" @mousedown="dragStart" ref="screen">
    <div class="display">{{ value }}</div>
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
      textRatio: 1,
      scrollPos: {xPos: 0, x:0},
      ro: null
    }},
    methods: {
      sizeText() {
        const screen = this.$refs.screen;

        if (screen) {
          // Ratio is maximum width divided by actual width clamped between 0.5 (half size) and 1 (full size)
          this.textRatio = clamp( (screen.clientWidth / measureText(this.value, getFont(screen))), 0.5, 1.0 );
        } else {
          this.textRatio = 1;
        }
      },
      dragStart(e) {
        this.scrollPos = {
          xPos: this.$refs.screen.scrollLeft,
          x: e.clientX
        };
        document.addEventListener('mousemove', this.dragMove);
        document.addEventListener('mouseup', this.dragEnd);
      },
      dragMove(e) {
        const dX = e.clientX - this.scrollPos.x;
        // In order to ensure number is right aligned scroll direction is reversed
        this.$refs.screen.scrollLeft = -(this.scrollPos.xPos - dX);

      },
      dragEnd() {
        document.removeEventListener('mousemove', this.dragMove);
        document.removeEventListener('mouseup', this.dragEnd);
      }
    },
    mounted() {
      // Watch for changes in element size to recalculate font size
      this.ro = new ResizeObserver(this.sizeText)
        .observe(this.$refs.screen);
    },
    beforeUnmount() {
      this.ro.unobserve(this.$refs.screen);
    },
    watch: {
      // Check if font needs to be resized when value changes
      value() { this.sizeText(); }
    }
  }
</script>

<style scoped>
  .screen {
    display: flex;
    flex-direction: row-reverse;
    height: var(--screen-height);

    background-color: var(--screen-back);
    font-size: var(--screen-font-size);

    border-radius: var(--app-radius);
    border: var(--app-padding) solid var(--screen-back);

    overflow: hidden;
  }

  .display {
    display: inline-flex;
    justify-content: end;
    align-items: center;

    height: 100%;
    font-size: calc(var(--screen-font-size) * v-bind(textRatio));
  }
</style>
