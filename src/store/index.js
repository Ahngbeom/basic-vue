// import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import TodosModule from './modules/todos'
import UsersModule from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		todos: TodosModule,
		users: UsersModule
	}
})
