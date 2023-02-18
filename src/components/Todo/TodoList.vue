<template>
  <div class="d-flex flex-column justify-content-center">
    <Todo
      v-for="item in todoList"
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
  props: {
    todoList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    // toggleCheckTodo({ id, checked }) {
    //   this.todoList.find((item) => item.id === id).checked = checked;
    // },
    toggleCheckTodo({ id, checked }) {
      this.$emit("toggle-check-todo", {
        id: id,
        checked: checked,
      });
    },
    // removeTodo(id) {
    //   this.todoList.splice(
    //     this.todoList.findIndex((item) => item.id === id),
    //     1
    //   );
    // },
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
  },
};
</script>