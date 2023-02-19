<template>
  <div class="d-flex flex-column justify-content-center">
    <Todo
      v-for="item in $store.getters.getTodoList"
      v-bind:key="item.id"
      v-bind:todo="item"
    />
  </div>
</template>

<script>
import Todo from "@/components/Todo/Todo.vue";

export default {
  components: {
    Todo,
  },
};
</script>