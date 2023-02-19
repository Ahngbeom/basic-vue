<template>
  <div>
    <ul class="list-group list-group-flush">
      <li v-for="user in users" :key="user.id" class="list-group-item">
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.getUsers();
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    getUsers() {
      this.$store.dispatch("getUsers");
    },
  },
};
</script>