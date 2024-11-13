<template>
  <div>

    <h1  :style="{color: title !== '' ? 'green' : 'black'}" > {{ title  || 'noTeXt' }} </h1>
    <label>
      <input type="text" @keyup.enter="onKeyUp">
    </label>

    <ul>
      <li v-for="(color, index) in colors" :key="index">{{ index + 1 }} {{ color }}</li>
      <input type="text" @keyup.enter="addNewColor">

      <li v-for="user in users" :key="user.id"> {{ user.name }}: {{ user.age }}</li>
      <li v-for="(value,name, index) in product" :key="index">{{ index + 1 }} : {{ value }} : {{ name }}</li>
      <input type="text" @keyup.enter="deleteProp">
    </ul>


  </div>
</template>

<script>
export default {
  name: 'Courses__2',
  data: () => ({
    title: '',
    colors: ['orange', 'black', 'yellow'],

    users: [
      {name: 'Denis', age: 30, id: '1'},
      {name: 'Ivan', age: 25, id: '2'},
    ],
    product: {
      brand: 'Apple',
      model: 'iphone 11 pro',
      price: '$1000'
    }
  }),
  methods: {

    onKeyUp(e) {
    if( e.target.value !== '') {
      this.title = e.target.value
      e.target.value = ''
    }
    },
    addNewColor(e) {
      this.colors.push(e.target.value);
    },
    deleteProp(e){

      this.$delete(this.product, e.target.value);
    }
  }
}
</script>

<style lang="scss">

</style>
