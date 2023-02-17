<template>
  <MyPage name="Ahngbeom">
	<template v-slot:comment>
		I'm web backend engineer
	</template>
	<template v-slot:default="{ world }">
		hello {{ world }}
	</template>
	</MyPage>
</template>

<script>
import MyPage from "@/components/MyPage.vue";

export default {
  components: {
    MyPage
  }
};
</script>