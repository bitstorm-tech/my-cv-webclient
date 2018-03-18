<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <b-field label="Title">
          <b-input v-model="selectedProfile.payload.title" placeholder="Mrs. or Mr. or Miss or ..." />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Academic Title">
          <b-input v-model="selectedProfile.payload.academicTitle" placeholder="M.Sc. or PhD or ..." />
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="First Name">
          <b-input v-model="selectedProfile.payload.firstName" placeholder="Jane" />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Last Name">
          <b-input v-model="selectedProfile.payload.lastName" placeholder="Doe" />
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Birthday">
          <b-datepicker placeholder="Click to select..." icon-pack="fa" icon="calendar-alt" v-model="selectedProfile.payload.birthday" />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Nationality">
          <b-input v-model="selectedProfile.payload.nationality" placeholder="Germany" />
        </b-field>
      </div>
    </div>
    <button class="button" @click="save">Save</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newProfile: {
        key: "",
        payload: {
          title: "",
          academicTitle: "",
          firstName: "",
          lastName: "",
          birthday: new Date(),
          nationality: ""
        }
      }
    };
  },
  methods: {
    save() {
      if (this.$store.getters.selectedProfile) {
        this.$store.dispatch(
          "upsertProfile",
          this.$store.getters.selectedProfile
        );
      } else {
        this.$store.dispatch("upsertProfile", this.newProfile);
      }
    }
  },
  computed: {
    selectedProfile: {
      get() {
        if (this.$store.getters.selectedProfile) {
          return this.$store.getters.selectedProfile;
        } else {
          return this.newProfile;
        }
      },
      set(profile) {
        console.log("#############################", profile);
      }
    }
  },
  created() {
    this.$store.dispatch("loadAccount");
    this.$store.dispatch("loadProfiles");
  }
};
</script>

