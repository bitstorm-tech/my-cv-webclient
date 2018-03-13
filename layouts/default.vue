<template>
  <div class="container">
    <nav class="navbar is-dark">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Profile: {{ selectedProfile }}</a>
          <div class="navbar-dropdown">
            <a class="navbar-item" v-for="profile in profiles" :key="profile.id" @click="onSelect(profile.id)">{{ profile.name }}</a>
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
  data() {
    return {
      selectedProfile: "",
      profiles: [
        {
          id: "1-1",
          name: "Josef Bauer"
        },
        {
          id: "1-2",
          name: "Hans Huber"
        },
        {
          id: "1-3",
          name: "Stefan Mayer"
        }
      ]
    };
  },
  methods: {
    onSelect(id) {
      const selected = this.profiles.find(profile => profile.id === id);
      this.selectedProfile = selected ? selected.name : "";
    }
  }
};
</script>
