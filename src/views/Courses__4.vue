<template>
  <div>
    <input type="text" v-model="text">
    <h3>Input text value:
    <i>{{ text }}</i>
    </h3>
    <div class="checkboxes">
      <input type="checkbox" v-model="checkbox">
      <h3 :style="{textDecoration: checkbox !== false ? 'line-through' : 'none'}" >checkbox value
        <i>{{ checkbox }}</i>
      </h3>
      <input type="checkbox" v-model="checkboxArray" value="one"/>
      <input type="checkbox" v-model="checkboxArray" value="two"/>
      <input type="checkbox" v-model="checkboxArray" value="three"/>
      text: {{text}}
      <h3>checkbox value:
        <i>{{ checkboxArray }}</i>
      </h3>
    </div>
    <select v-model="select">
      <option value="bmw">bmw</option>
      <option value="audi">audi</option>
    </select>
    <h3>select value
      <i>{{ select }}</i>
    </h3>
  </div>
</template>

<script>
export default {
data: () => ({
  text: '',
  checkbox: true,
  checkboxArray: [],
  select: '',
}),

};
</script>

<style scoped>

</style>
