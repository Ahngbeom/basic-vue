<template>
  <div id="myPage">
	<h1>{{ title }}</h1>
    <div>
      <span v-bind:style="nameStyle" v-show="nameStyle.show">
        {{ name }}
      </span>
      <button v-on:click="hideName">Hide</button>
    </div>
    <img alt="Me" src="../assets/me.png" />
  </div>
</template>

<script>
export default {
  props: ['title', 'name'],
  data() {
    return {
      nameStyle: {
        color: "skyblue",
        fontWeight: "bold",
        fontSize: "2em",
        show: true,
      },
    };
  },
  methods: {
    hideName(e) {
      this.nameStyle.show = !this.nameStyle.show;
      e.target.innerText = this.nameStyle.show ? "Hide" : "Show";
    }
  },
};
</script>