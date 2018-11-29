<template>
  <div class="container">
    <nav class="navbar is-dark">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <nuxt-link class="navbar-link" to="/profile">Profile: {{ selectedProfileName }}</nuxt-link>
          <div class="navbar-dropdown">
            <a class="navbar-item" @click="onSelect(null)">NEW</a>
            <a class="navbar-item" v-for="profile in profiles" :key="profile.key" @click="onSelect(profile.key)">
              {{ profile.payload.firstName + ' ' + profile.payload.lastName }}
            </a>
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
    onSelect(key) {
      this.$store.dispatch("setSelectedProfile", key);
      this.$router.push("/profile");
    }
  },
  computed: {
    profiles() {
      return this.$store.getters.profiles;
    },
    selectedProfileName() {
      const selectedProfile = this.$store.getters.selectedProfile;
      return selectedProfile
        ? `${selectedProfile.payload.firstName} ${
            selectedProfile.payload.lastName
          }`
        : "";
    }
  }
};
</script>
