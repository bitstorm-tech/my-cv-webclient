<template>
  <div class="container">
    <nav class="navbar is-dark">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Profile: {{ selectedProfile }}</a>
          <div class="navbar-dropdown">
            <nuxt-link class="navbar-item" to="/profile">NEW</nuxt-link>
            <a class="navbar-item" v-for="profile in profiles" :key="profile.id" @click="onSelect(profile.id)">{{ profile.firstName + ' ' + profile.lastName }}</a>
          </div>
        </div>
        <nuxt-link class="navbar-item" to="/education">Education</nuxt-link>
        <nuxt-link class="navbar-item" to="/skills">Skills</nuxt-link>
        <nuxt-link class="navbar-item" to="/projects">Projects</nuxt-link>
      </div>
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/account">Account</nuxt-link>
        <nuxt-link class="navbar-item" to="/">Signout</nuxt-link>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
export default {
  methods: {
    onSelect(id) {
      this.$store.dispatch("setSelectedProfile", id);
      this.$router.push("/profile");
    }
  },
  computed: {
    profiles() {
      return this.$store.getters.profiles;
    },
    selectedProfile() {
      const selectedProfile = this.$store.getters.selectedProfile;
      return selectedProfile
        ? selectedProfile.firstName + " " + selectedProfile.lastName
        : "";
    }
  }
};
</script>
