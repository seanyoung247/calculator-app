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
    border: none;
    position: relative;
  }

  .theme-toggler > legend {
    position: absolute;
    left: 0;
    bottom: 4px;
    transform: translateX(-125%);

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
    font-size: 12px;
  }

  .toggle {
    position: relative;
    margin-top: 4px;
    background-color: var(--keys-back);
    border: 4px solid var(--keys-back);
    width: 25px;
    height: 25px;
  }

  .theme-opt > input[type='radio']:checked ~ .toggle::after {
    content: '';
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background-color: var(--eql-color);
    border-radius: 50%;
  }

  .theme-list li:first-of-type .toggle {
    border-radius: 50% 0 0 50%;
  }

  .theme-list li:last-of-type .toggle {
    border-radius: 0 50% 50% 0;
  }

  .theme-opt > input[type='radio'] {
    display: none;
  }
</style>