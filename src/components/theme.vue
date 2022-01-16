<template>
  <fieldset class="theme-toggler" aria-hidden="true">
    <legend>Theme</legend>

      <template v-for="(theme, index) in themes" :key="index">

        <label class="theme-opt" :for="theme">
          {{ index + 1 }}
          <span class="toggle-back"></span>
        </label>
        <input 
          type="radio" 
          name="themer" 
          class="theme-radio"
          :id="theme" 
          :value="index"
          :data-index="index"
          @change="selectTheme"
          v-model="selected">
      </template>

      <span class="toggle"></span>

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
      value: {
        required: true,
        type: Number
      }
    },
    data() { return {
      selected: 0
    }},
    methods: {
      selectTheme(e) {
        this.selected = parseInt(e.target.dataset.index);
        this.$emit('setTheme', this.selected);
      }
    },
    watch: {
      value() {
        this.selected = this.value;
      }
    }
  }
</script>

<style scoped>
  .theme-toggler {
    display: flex;
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

  .theme-radio {
    display: none;
  }

  .theme-opt {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
  }

  .toggle-back {
    margin-top: 4px;
    background-color: var(--keys-back);
    border: 5px solid var(--keys-back);
    width: 25px;
    height: 25px;    
  }

  .theme-opt:first-of-type > .toggle-back {
    border-radius: 50% 0 0 50%;
  }
  .theme-opt:last-of-type > .toggle-back {
    border-radius: 0 50% 50% 0;
  }

  .toggle {
    position: absolute;
    bottom: 5px;
    left: calc(5px + (25px * v-bind(selected)));
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--eql-color);
    transition: left 0.1s;
  }
</style>