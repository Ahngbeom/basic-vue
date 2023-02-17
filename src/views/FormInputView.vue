<template>
	<FormInput v-model="nickname" :name="name" v-on:updated-name="updateName"/>
</template>

<script>
import FormInput from '@/components/FormInput.vue'

export default {
	components: {
		FormInput
	},
	data() {
		return {
			name: "",
			nickname: ""
		}
	},
	methods: {
		updateName(name) {
			this.name = name;
		}
	}
}
</script>