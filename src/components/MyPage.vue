<template>
  <div id="myPage">
    <h1>{{ title }}</h1>
    <div>
      <span v-bind:style="nameStyle" v-show="nameStyle.show">
        {{ name }}
      </span>
      <button v-on:click="hideName">Hide</button>
    </div>
    <div>
      <slot name="comment"> </slot>
    </div>
    <div>
      <slot v-bind:world="world"> </slot>
    </div>
    <img alt="Me" src="../assets/me.png" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "My Page",
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      nameStyle: {
        color: "skyblue",
        fontWeight: "bold",
        fontSize: "2em",
        show: true,
      },
      world: "world"
    };
  },
  methods: {
    hideName(e) {
      this.nameStyle.show = !this.nameStyle.show;
      e.target.innerText = this.nameStyle.show ? "Hide" : "Show";
    },
  },
};
</script>