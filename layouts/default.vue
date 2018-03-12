<template>
  <div class="container">
    <div class="navbar">
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <nuxt-link to="/profile">Profile</nuxt-link>
          </div>
          <div class="navbar-item">
            <nuxt-link to="/education">Education</nuxt-link>
          </div>
          <div class="navbar-item">
            <nuxt-link to="/skills">Skills</nuxt-link>
          </div>
          <div class="navbar-item">
            <nuxt-link to="/projects">Projects</nuxt-link>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <nuxt-link to="/account">Account</nuxt-link>
          </div>
          <div class="navbar-item">
            <nuxt-link to="/">Signout</nuxt-link>
          </div>
        </div>
      </div>
    </div>
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
