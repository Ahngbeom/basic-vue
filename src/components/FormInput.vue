<template>
  <div>
    <h3>Emit</h3>
    <form>
      <div>
        <input type="text" v-bind:value="name" v-on:input="updateName" />
        <span>Name: {{ name }}</span>
      </div>
      <div>
        <button type="button">Submit</button>
      </div>
    </form>

    <h3>v-model</h3>
    <form>
      <div>
        <input type="text" v-bind:value="value" v-on:input="$emit('input', $event.target.value)"/>
        <span>Nickname: {{ value }}</span>
      </div>
      <div>
        <button type="button">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
  },
  methods: {
    updateName(e) {
      this.$emit("updated-name", e.target.value);
    },
  },
};
</script>