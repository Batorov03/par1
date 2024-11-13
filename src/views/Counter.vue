<template>
  <div class="counter">
    <input type="text" placeholder="любое слово" @keyup.enter="inp">

    <div>

      {{ quantity || 'любое слово' }} :
      <span :style="{color: likes>0 ? 'green' : 'red'}"> {{ likes }} </span>
      <button class="btn" @click="likes++">++</button>
      <button class="btn" @click="dislikes">--</button>
    </div>
  </div>
</template>

<script>
export default {


  data: () => ({
    quantity: '',
    likes: 0,
  }),
  methods: {
    dislikes() {
      if (this.likes !== 0) {
        this.likes--
      }
    },
    inp(e) {
      if (e.target.value !== '') {
        this.quantity = e.target.value
        e.target.value = ''
      }

    }

  }
}
</script>

<style scoped>
.counter {
  text-align: center;
  margin-top: 3rem;
}

.btn {
  margin: 20px;
  cursor: pointer;

}

</style>
