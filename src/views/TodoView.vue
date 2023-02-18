<template>
  <div class="container">
    <AddTodo v-on:registration-todo="registration" />
    <CompleteTodo :completedTodoCount="completedTodoCount()" />
    <TodoList
      :todoList="todoList"
      v-on:toggle-check-todo="toggleCheckTodo"
      v-on:remove-todo="removeTodo"
    />
    {{ todoList }}
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
  data() {
    return {
      todoList: [
        { id: 0, title: "buy a car", checked: true },
        { id: 1, title: "play a game", checked: false },
      ],
    };
  },
  methods: {
    registration(title) {
      this.todoList.push({
        id: this.todoList.length,
        title: title,
        checked: false,
      });
    },
    toggleCheckTodo({ id, checked }) {
      this.todoList.find((item) => item.id === id).checked = checked;
    },
    removeTodo(id) {
      this.todoList.splice(
        this.todoList.findIndex((item) => item.id === id),
        1
      );
    },
    completedTodoCount() {
      
    },
  },
};
</script>