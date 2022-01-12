<template>
  <div class="dummy"></div>
</template>

<script>
  export default {
    name: "keyboard",
    mounted() {
      const self = this;
      this.keydown = (e) => self.$emit('keydown', e);
      this.keyup = (e) => self.$emit('keyup', e);
      window.addEventListener('keyup', this.keyup);
      window.addEventListener('keydown', this.keydown);
    },
    beforeUnmount() {
      window.removeEventListener('keyup', this.keyup);
      window.removeEventListener('keydown', this.keydown);
    }
  }
</script>

<style scoped>
  .dummy {
    display: none;
  }
</style>