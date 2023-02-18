<template>
  <div>
    <div>Completed: {{ completedTodoCount }}</div>
  </div>
</template>
<script>
export default {
  computed: {
    completedTodoCount() {
      return this.$store.getters.completedTodoCount;
    },
  },
};
</script>