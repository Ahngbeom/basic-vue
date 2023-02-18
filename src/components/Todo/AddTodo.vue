<template>
  <div class="d-flex justify-content-center">
    <input
      v-model="inputText"
      v-on:keyup.enter="registrationTodo"
      type="text"
      class="form-control col-4"
    />
    <button v-on:click="registrationTodo" class="btn btn-secondary">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    registrationTodo() {
      this.$emit("registration-todo", this.inputText);
    },
  },
};
</script>