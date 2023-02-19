<template>
  <div id="app" class="container">
    <button v-on:click="goBack" class="btn btn-outline-dark">뒤로가기</button>
    <nav>
      <router-link to="/sign-up">Sign-Up</router-link>
    </nav>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/my-page/ahngbeom">My Page</router-link> |
      <!-- <router-link to="/user/bahn">User</router-link> | -->
      <router-link to="/foo">Foo</router-link> |
      <router-link to="/bar">Bar</router-link>
      <div style="margin: 1em; font-size: x-large;">
        <router-link to="/to-do">To-do</router-link> | 
        <router-link to="/users">Users</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
