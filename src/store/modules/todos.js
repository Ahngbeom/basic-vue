import axios from "axios";

export default {
	state: {
		// todoList: [
		// 	{ id: 0, title: "buy a car", checked: true },
		// 	{ id: 1, title: "play a game", checked: false },
		// ],
		todos: [],
	},
	getters: {
		getTodoList: state => {
			return state.todos;
		},
		completedTodoCount: state => {
			return state.todos.filter((item) => item.completed === true).length;
		},
		incompleteTodoCount: state => {
			return state.todos.filter((item) => item.completed === false).length;
		}
	},
	mutations: {
		SET_TODOS(state, todos) {
			state.todos = todos.reverse();
		},
		ADD_TODO(state, title) {
			// state.todoList.push({
			// 	id: state.todoList.length,
			// 	title: title,
			// 	completed: false
			// });
			state.todos.splice(0, 0, {
				id: state.todos.find(todo => todo.id > 0).id + 1,
				title: title,
				completed: false
			});
		},
		TOGGLE_CHECK_TODO(state, payload) {
			state.todos.find((item) => item.id === payload.id).completed = payload.completed;
		},
		REMOVE_TODO(state, id) {
			state.todos.splice(
				state.todos.findIndex((item) => item.id === id),
				1
			);
		},
	},
	actions: {
		addTodo({ commit }, value) {
			// setTimeout(() => {
			commit('ADD_TODO', value)
			// }, 1000)
		},
		toggleCheckTodo({ commit }, payload) {
			// setTimeout(() => {
			commit('TOGGLE_CHECK_TODO', payload)
			// }, 1000)
		},
		removeTodo({ commit }, id) {
			// setTimeout(() => {
			commit('REMOVE_TODO', id)
			// }, 1000)
		},
		getTodos({ commit }) {
			axios.get('https://jsonplaceholder.typicode.com/todos')
				.then((response) => {
					commit('SET_TODOS', response.data)
				});
		},
	},
}