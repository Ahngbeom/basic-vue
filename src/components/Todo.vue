<template>
  <div class="d-flex flex-column">
    <div v-for="item in todo" v-bind:key="item.id">
      <input type="checkbox" class="form-check-input" :id="item.id" />
      <label class="form-check-label" :for="item.id">
        {{ item.title }}
      </label>
      <span> </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTodo",
  data() {
    return {
      todo: [
        { id: 0, title: "buy a car" },
        { id: 1, title: "play a game" },
      ],
    };
  },
  computed: {
    getTodoList() {
      console.log(this.todo);
      return this.todo;
    },
  },
};
</script>