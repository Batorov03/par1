<template>
  <div>

    <a :href="linkUrl">link</a>

    <template v-if="msgIsVisible === 1">
      <div> Some message!</div>
    </template>
    <template v-else-if="msgIsVisible === 2">
      <div> v else message!</div>
    </template>
    <template v-else>
      <div> Another message!</div>
    </template>
    <h2>{{ num + 2 }}</h2>
    <h2>{{ num >= 1 ? 'Number >= 1' : 'Number < 1' }}</h2>


    <h1 class="asd">{{ object.firstName || 'no name' }}: {{ object.age || 'no age' }}</h1>

    <form class="form" @submit.prevent="onSubmit">

      <div >
        <label > name:
          <input class="lbl" type="text" placeholder="имя" v-model="firstName">
        </label>
      </div>

      <div>
        <label> возр:
          <input class="input" type="number" placeholder="" v-model.number="age">
        </label>

      </div>

      <button type="submit">Change form</button>
    </form>


  </div>
</template>

<script>
export default {

  data: () => ({
    linkUrl: 'https://google.com',
    msgIsVisible: 1,
    num: 0,

    object: {
      firstName: '',
      age: ''
    },

    firstName: "",
    age: ''

  }),
  methods: {
    onSubmit() {

      if (this.firstName !== '' && this.age !== '') {
        this.object = {firstName: this.firstName, age: this.age}
        this.firstName = '',
            this.age = ''
      }

    }
  }
};
</script>

<style scoped>
.lbl{
 margin-left:  25px;
}
.asd {
  text-align: center;
  display: flex;
  flex-direction: column;
}
.input{
  margin-left:  30px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.form{
  margin-left: 10px;
}
</style>
