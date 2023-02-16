<template>
  <div>
    User {{ $route.params.id }}
    <MyPage title="User" :name="name" />
  </div>
</template>

<script>
import MyPage from "@/components/MyPage.vue";

export default {
  components: {
    MyPage,
  },
  data() {
	return {
		name: this.$route.params.id
	}
  }
};
</script>