
<template>
  <div class="screen-container">
    <button class="left-btn" @click="nudge(-1)" ref="leftBtn">
      <svg class="arrow-icon" xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'>
        <path d="m6.2851 1.0156 1.4142 1.4142-2.5702 2.5702 2.5702 2.5702-1.4142 1.4142-3.9844-3.9844z"/>
      </svg>
    </button>
    <div class="screen" ref="screen"
      @wheel="wheelScroll"
      @mousedown="dragStart"
      @touchstart="touchStart"
      @touchmove="touchMove">

      <div class="display">{{ value }}</div>
    </div>
    <button class="right-btn" @click="nudge(1)" ref="rightBtn">
      <svg class="arrow-icon" xmlns='http://www.w3.org/2000/svg'
           width='10' height='10' viewBox='0 0 10 10'>
        <path d="m2.3007 2.4298 1.4142-1.4142 3.9844 3.9844-3.9844 3.9844-1.4142-1.4142 2.5702-2.5702z"/>
      </svg>
    </button>
  </div>
</template>

<script>
  import { measureText, getFont } from '../modules/measuretext.mjs';

  export default {
    name: 'screen',
    props: {
      value: String
    },
    data() { return {
      textRatio: 1,
      screenWidth: 0,
      dragPos: {xPos: 0, x:0},
      ro: null
    }},
    methods: {
      sizeText() {
        const screen = this.$refs.screen;
        const lBtn = this.$refs.leftBtn;
        const rBtn = this.$refs.rightBtn;

        if (screen && lBtn && rBtn) {
          const screenWidth = screen.clientWidth - (lBtn.clientWidth + rBtn.clientWidth);
          const textWidth = measureText(this.value, getFont(screen));
          this.textRatio = Math.min(Math.max(screenWidth / textWidth, 0.5), 1.0);

          this.screenWidth = (this.textRatio > 0.5) ? screenWidth : 
                              (Math.ceil(textWidth / lBtn.clientWidth) * lBtn.clientWidth) * this.textRatio;
        }
      },

      // Button Scrolling
      nudge(dir) {
        this.$refs.screen.scrollLeft += 25 * dir;
      },
      
      // Mouse wheel scrolling
      wheelScroll(e) {
        e.preventDefault();
        this.$refs.screen.scrollLeft += e.deltaY;
      },

      // Mouse drag scrolling
      dragStart(e) {
        this.dragPos = {
          xPos: this.$refs.screen.scrollLeft,
          x: e.clientX
        };
        this.$refs.screen.classList.add('scrolling');
        document.addEventListener('mousemove', this.dragMove);
        document.addEventListener('mouseup', this.dragEnd);
      },
      dragMove(e) {
        const dX = e.clientX - this.dragPos.x;
        this.$refs.screen.scrollLeft = this.dragPos.xPos - dX;
      },
      dragEnd() {
        this.$refs.screen.classList.remove('scrolling');
        document.removeEventListener('mousemove', this.dragMove);
        document.removeEventListener('mouseup', this.dragEnd);
      },

      // Touch Scrolling
      touchStart(e) {
        this.dragPos = {
          xPos: this.$refs.screen.scrollLeft,
          x: e.touches[0].clientX
        };
      },
      touchMove(e) {
        const dX = e.touches[0].clientX - this.dragPos.x;
        this.$refs.screen.scrollLeft = this.scrollPos.xPos - dX;
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
  .screen-container {
    position: relative;
  }
  .left-btn, .right-btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top:0;
    height: 100%;
    width: var(--app-padding);
    z-index: 1;

    cursor: pointer;

    border: none;
    font-family: var(--font-family);
    font-size: var(--screen-font-size);
    color: var(--body-text);
    background: var(--screen-back);
  }
  .left-btn { 
    left: 0;
    border-radius: var(--app-radius) 0 0 var(--app-radius);
  }
  .right-btn { 
    right: 0;
    border-radius: 0 var(--app-radius) var(--app-radius) 0;
  }
  .arrow-icon {
    fill: var(--body-text);
    width: var(--app-padding);
    height: var(--app-padding);
  }

  .screen {
    display: flex;
    flex-direction: row-reverse;
    height: var(--screen-height);

    border-radius: var(--app-radius);

    background-color: var(--screen-back);
    font-size: var(--screen-font-size);

    cursor: grab;
    user-select: auto;
    overflow: hidden;
  }

  .display {
    display: inline-flex;
    justify-content: end;
    align-items: center;
    flex-grow: 2;

    border-radius: var(--app-radius);

    flex: 2 0 calc(1px * v-bind(screenWidth));

    font-size: calc(var(--screen-font-size) * v-bind(textRatio));
  }

  .screen::before, .screen::after {
    content: '';
    position: relative;
    z-index: 2;

    flex: 0 0 var(--app-padding);
    background: var(--screen-back);  
  }

  .scrolling {
    cursor: grabbing;
    user-select: none;
  }
</style>
