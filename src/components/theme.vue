<template>
  <fieldset class="theme-toggler">
    <legend>Theme</legend>
    <ul class="theme-list">
      <li v-for="(theme, index) in themes" :key="index">
        <label class="theme-opt" :for="theme">
          {{ index + 1 }}
          <input 
            type="radio" 
            name="themer" 
            :id="theme" 
            :value="theme"
            @change="(e)=>this.$emit('setTheme', e.target.value)"
            :checked="value === theme">
          <div class="toggle"></div>
        </label>
      </li>
    </ul>
  </fieldset>
</template>

<script>
  export default {
    name: 'theme-toggler',
    props: {
      themes: {
        required: true,
        type: Array
      },
      value: String
    }
  }
</script>

<style scoped>
  .theme-toggler {
    /* border: none; */
    position: relative;
  }

  .theme-toggler > legend {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateX(-110%);

    font-size: 12px;
    text-transform: uppercase;
  }

  .theme-list {
    display: flex;
    list-style: none;
  }

  .theme-opt {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid green;
  }
</style>