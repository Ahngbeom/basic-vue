import axios from "axios";

export default {
	state: {
		users: []
	},
	mutations: {
		SET_USERS(state, users) {
			state.users = users;
		},
	},
	actions: {
		getUsers({ commit }) {
			axios.get('https://jsonplaceholder.typicode.com/users')
				.then((response) => {
					commit('SET_USERS', response.data)
				});
		}
	},
}