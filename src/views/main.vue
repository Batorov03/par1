<template>
  <div class="maga">
    <form  class="form" @submit.prevent="onSubmit">
      <input  class="inp" type="text" placeholder="название продукта" v-model="name">
      <input  class="inp" type="number" placeholder="стоимость" v-model="price">
      <button type="submit" >добавить</button>
    </form>

    <ul class="li">
      <li v-for="item in list" :key="item.id">
        {{ item.name }}:  {{ item.price }}p
        <button class="delete" @click="onDelete(item.id )">удалить</button>
      </li>
    </ul>
    <div>
      total Balance:
    </div>

  </div>
</template>

<script>

export default {

  data: () => ({
    list: [
      {name: 'колбаса', price: 150, id: 1},
      {name: 'водка', price: 250, id: 2},
      {name: 'хлеб', price: 50, id: 3}
    ],
    name: "",
    price: '',

  }),
  methods: {
    onSubmit() {
      if(this.name !== '' && this.price !== ''){
        this.list.push({name: this.name, price: this.price, id: Math.random()})
        this.name = '',
        this.price = ''

      }

    },

    onDelete(id) {
         this.list = this.list.filter(item => item.id !== id)


    }
  }


}

</script>

<style scoped>
.maga {
  text-align: center;
  margin-top: 3rem;
}
.inp{
  margin-right: 10px;

  margin-left: 10px;
}
.li {
  list-style: none;

}
.form{
  text-align: center;
}
.delete {

  margin-left: 2rem;
}

</style>
