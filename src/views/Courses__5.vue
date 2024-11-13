<template>
  <div>
    <h1>yeee</h1>
    <input
        type="text"
        placeholder="введите название"
        :value="inputValue"
        @input="inputChangeHandler"


    />
    <button @click="addNewNote">добавить</button>
    <hr/>
    <div v-for="note in notes" :key="note.id">{{ note.title }}
      <button @click="removeN(note.id)">удалить</button>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {

      title: 'список заметок',
      inputValue: '',
      notes: [{title: 'заметка 1', id: 1}, {title: 'заметка 2', id: 2},]
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    },
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push({title: this.inputValue, id: Math.random()})
        this.inputValue = ''
      }
    },
    removeN(id)  {
      this.notes =  this.notes.filter(note => note.id !== id)
    }

  }


}
</script>

<style scoped>

</style>
