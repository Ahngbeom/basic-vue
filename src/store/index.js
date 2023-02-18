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
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	}
})
