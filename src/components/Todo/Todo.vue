<template>
  <div class="form-group form-check">
    <input
      type="checkbox"
      class="form-check-input"
      :id="todo.id"
      :checked="todo.completed"
      v-on:change="toggleCheckTodo"
    />
    <label
      class="form-check-label"
      :for="todo.id"
      :class="todo.completed ? 'text-muted' : ''"
      :style="todo.completed ? 'text-decoration: line-through' : ''"
    >
      {{ todo.title }}
    </label>
    <button class="btn btn-sm btn-danger mx-2" v-on:click="removeTodo">
      Remove
    </button>
  </div>
</template>

<script>
export default {
  name: "MyTodo",
  props: {
    todo: {
      type: Object,
    },
  },
  methods: {
    toggleCheckTodo(e) {
      //   this.$store.commit({
      //     type: "TOGGLE_CHECK_TODO",
      //     id: this.todo.id,
      //     checked: e.target.checked,
      //   });
      this.$store.dispatch({
        type: "toggleCheckTodo",
        id: this.todo.id,
        completed: e.target.checked,
      });
    },
    removeTodo() {
      //   this.$store.commit("REMOVE_TODO", this.todo.id);
      this.$store.dispatch("removeTodo", this.todo.id);
    },
  },
};
</script>