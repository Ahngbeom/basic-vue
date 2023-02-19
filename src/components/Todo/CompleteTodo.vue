<template>
  <div>
    <div>Completed: {{ completedTodoCount }}</div>
    <div>Incompleted: {{ incompleteTodoCount }}</div>
  </div>
</template>
<script>
export default {
  computed: {
    completedTodoCount() {
      return this.$store.getters.completedTodoCount;
    },
	incompleteTodoCount() {
		return this.$store.getters.incompleteTodoCount;
	}
  },
};
</script>