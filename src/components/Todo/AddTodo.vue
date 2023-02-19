<template>
  <div class="d-flex justify-content-center">
    <input
      v-model="inputTodoTitle"
      v-on:keyup.enter="addTodo"
      type="text"
      class="form-control col-4"
    />
    <button v-on:click="addTodo" class="btn btn-secondary">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputTodoTitle: "",
    };
  },
  methods: {
    addTodo() {
    //   this.$store.commit("ADD_TODO", this.inputTodoTitle);
      this.$store.dispatch("addTodo", this.inputTodoTitle);
    },
  },
};
</script>