<template>
  <div class="form-group form-check">
    <input
      type="checkbox"
      class="form-check-input"
      :id="todo.id"
      :checked="todo.checked"
      v-on:change="checkTodo"
    />
    <label
      class="form-check-label"
      :for="todo.id"
      :class="todo.checked ? 'text-muted' : ''"
      :style="todo.checked ? 'text-decoration: line-through' : ''"
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
    checkTodo(e) {
      this.$emit("toggle-checkbox", {
        id: this.todo.id,
        checked: e.target.checked,
      });
    },
    removeTodo() {
      this.$emit("remove-todo", this.todo.id);
    },
  },
};
</script>