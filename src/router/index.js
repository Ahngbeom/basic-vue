import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyPageView from '../views/MyPageView.vue'
import UsersView from '../views/UsersView.vue'
import FormInputView from '../views/FormInputView.vue'
import TodoView from '../views/TodoView.vue'

Vue.use(VueRouter)

const Foo = { template: '<div>Foo</div>' }
const Bar = { template: '<div>Bar</div>' }

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	},
	{
		path: '/my-page/:id',
		component: MyPageView
	},
	{
		path: '/foo',
		component: Foo
	},
	{
		path: '/bar',
		component: Bar
	},
	{
		path: '/sign-up',
		component: FormInputView
	},
	{
		path: '/to-do',
		component: TodoView
	},
	{
		path: '/users',
		component: UsersView
	}
]

const router = new VueRouter({
	routes: routes,
	mode: 'history'
})

export default router
