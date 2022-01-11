<template>
  <div id="screen">
    {{ value }}
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
    background-color: var(--screen-back);
    border-radius: var(--app-radius);
    height: var(--screen-height);
    padding: var(--app-padding);
    text-align: right;
    font-size: var(--screen-font);
  }
</style>