<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="d-flex justify-content-center">
      <input type="text" v-model="message" class="form-control col-8 text-center" />
    </div>
    <HelloWorld :msg="message" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: "Welcome to Your Vue.js App",
    };
  },
  beforeCreate() {
    console.log("before create", this.message);
  },
  created() {
    console.log("created", this.message);
  },
  beforeMount() {
    console.log("before mount", this.message);
  },
  mounted() {
    console.log("mounted", this.message);
  },
  beforeUpdate() {
    console.log("before update", this.message);
  },
  updated() {
    console.log("updated", this.message);
  },
  beforeDestroy() {
    console.log("before destroy", this.message);
  },
  destroyed() {
    console.log("destroyed", this.message);
  },
};
</script>
