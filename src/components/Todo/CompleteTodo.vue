<template>
  <div>
    <div>Completed: {{ completedTodoCount }}</div>
    <div>
      {{ todoList }}
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    todoList() {
      return this.$store.state.todoList;
    },
    completedTodoCount() {
      return this.$store.state.todoList.filter((item) => item.checked === true)
        .length;
    },
  },
};
</script>