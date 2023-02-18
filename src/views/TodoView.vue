<template>
  <div class="container">
    <AddTodo />
    <CompleteTodo />
    <TodoList />
    {{ getTodoList }}
  </div>
</template>

<script>
import AddTodo from "@/components/Todo/AddTodo.vue";
import TodoList from "@/components/Todo/TodoList.vue";
import CompleteTodo from "@/components/Todo/CompleteTodo.vue";

export default {
  components: {
    AddTodo,
    TodoList,
    CompleteTodo,
  },
  methods: {},
  computed: {
    getTodoList() {
      return this.$store.getters.getTodoList;
    },
  },
};
</script>