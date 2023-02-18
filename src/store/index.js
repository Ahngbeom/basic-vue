import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todoList: [
			{ id: 0, title: "buy a car", checked: true },
			{ id: 1, title: "play a game", checked: false },
		],
	},
	getters: {
		getTodoList: state => {
			return state.todoList;
		},
		completedTodoCount: state => {
			return state.todoList.filter((item) => item.checked === true).length;
		},
	},
	mutations: {
		registration(state, title) {
			state.todoList.push({
				id: state.todoList.length,
				title: title,
				checked: false
			});
		},
		toggleCheckTodo(state, payload) {
			state.todoList.find((item) => item.id === payload.id).checked = payload.checked;
		},
		removeTodo(state, id) {
			state.todoList.splice(
				state.todoList.findIndex((item) => item.id === id),
				1
			);
		},
	},
	actions: {
	},
	modules: {
	}
})
