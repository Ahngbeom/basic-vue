<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <input
        v-model="inputText"
        v-on:keyup.enter="registration"
        type="text"
        class="form-control col-4"
      />
      <button v-on:click="registration" class="btn btn-secondary">
        Submit
      </button>
    </div>
    <div class="d-flex flex-column justify-content-center">
      <Todo
        v-for="item in todo"
        v-bind:key="item.id"
        v-bind:todo="item"
        v-on:toggle-checkbox="toggleCheckbox"
        v-on:remove-todo="removeTodo"
      />
    </div>
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  components: {
    Todo,
  },
  data() {
    return {
      inputText: "",
      todo: [
        { id: 0, title: "buy a car", checked: true },
        { id: 1, title: "play a game", checked: false },
      ],
    };
  },
  methods: {
    registration(e) {
      switch (e.target.tagName) {
        case "INPUT": {
          this.todo.push({
            id: this.todo.length,
            title: e.target.value,
            checked: false,
          });
          break;
        }
        case "BUTTON": {
          this.todo.push({
            id: this.todo.length,
            title: this.inputText,
            checked: false,
          });
          break;
        }
      }
    },
    toggleCheckbox({ id, checked }) {
      this.todo.find((item) => item.id === id).checked = checked;
    },
    removeTodo(id) {
      this.todo.pop({ id: id });
    },
  },
};
</script>