<template>
  <div>
    <button v-on:click="callback()">1</button>
  </div>
</template>

<script>
  export default {
    name: 'keypad',
    data: function() {
      return {
        callback: callback
      }
    }
  }

  function callback() {
    console.log("clicky");
  }
</script>
