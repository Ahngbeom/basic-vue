<template>
  <div class="d-flex flex-column justify-content-center">
    <Todo
      v-for="item in $store.getters.getTodoList"
      v-bind:key="item.id"
      v-bind:todo="item"
      v-on:toggle-check-todo="toggleCheckTodo"
      v-on:remove-todo="removeTodo"
    />
  </div>
</template>

<script>
import Todo from "@/components/Todo/Todo.vue";

export default {
  components: {
    Todo,
  },
  methods: {
    toggleCheckTodo({ id, checked }) {
      this.$store.commit({
        type: "toggleCheckTodo",
        id: id,
        checked: checked,
      });
    },
    removeTodo(id) {
      this.$store.commit("removeTodo", id);
    },
  },
};
</script>