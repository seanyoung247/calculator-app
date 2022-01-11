<template>
    <fieldset class="theme-toggler">
      <legend>Theme</legend>
      <ul class="theme-list">
        <li v-for="(theme, index) in themes" v-bind:key="index">
          <label class="theme-opt" v-bind:for="theme">
            <span>{{ index + 1 }}</span>
            <span><input type="radio" name="themer" v-bind:id="theme"></span>
          </label>
        </li>
      </ul>
    </fieldset>
</template>

<script>
  export default {
    name: 'theme-toggler',
    props: {
      themes: Array
    }
  }
</script>
