<template>
  <div class="container">
    <AddTodo />
    <CompleteTodo />
    <TodoList />
    <!-- <div>
      <div class="spinner-border text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div> -->
    <!-- {{ getTodoList }} -->
  </div>
</template>

<script>
import AddTodo from "@/components/Todo/AddTodo.vue";
import TodoList from "@/components/Todo/TodoList.vue";
import CompleteTodo from "@/components/Todo/CompleteTodo.vue";
import { mapGetters } from 'vuex';

export default {
  components: {
    AddTodo,
    TodoList,
    CompleteTodo,
  },
  computed: {
    // getTodoList() {
    //   return this.$store.getters.getTodoList;
    // },
    ...mapGetters(["getTodoList"]),
  },
  created() {
    this.$store.dispatch("getTodos");
  },
};
</script>