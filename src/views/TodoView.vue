<template>
  <div class="container">
	<div class="d-flex justify-content-center">
      <input v-model="inputText" v-on:keyup.enter="registration" type="text" class="form-control col-4" />
      <button v-on:click="registration" class="btn btn-secondary">
        Submit
      </button>
    </div>
    <Todo />
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
      todo: [],
    };
  },
  methods: {
    registration(e) {
		switch (e.target.tagName) {
			case 'INPUT': {
				console.log(e.target.value);
				break;
			}
			case 'BUTTON': {
				console.log(this.inputText);
				break;
			}
		}
    //   this.todo.push(this.inputText);
    },
  }
};
</script>