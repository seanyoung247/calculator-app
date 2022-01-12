<template>
  <div id="screen">
    <h2 class="hide-element">screen</h2>
    <span>{{ value }}</span>
  </div>
</template>

<script>
  export default {
    name: 'screen',
    props: {
      value: String
    }
  }
</script>

<style scoped>
  #screen {
    position: relative;
    background-color: var(--screen-back);
    border-radius: var(--app-radius);
    height: var(--screen-height);
    border: var(--app-padding) solid var(--screen-back);
    font-size: var(--screen-font);
    overflow: hidden;
  }
  #screen > span {
    display: flex;
    justify-content: right;
    align-items: center;
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
  }
</style>