<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <b-field label="Title">
          <b-input v-model="profile.payload.title" placeholder="Mrs. or Mr. or Miss or ..." />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Academic Title">
          <b-input v-model="profile.payload.academicTitle" placeholder="M.Sc. or PhD or ..." />
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="First Name">
          <b-input v-model="profile.payload.firstName" placeholder="Jane" />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Last Name">
          <b-input v-model="profile.payload.lastName" placeholder="Doe" />
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Birthday">
          <b-datepicker placeholder="Click to select..." icon-pack="fa" icon="calendar-alt" v-model="profile.payload.birthday" />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Nationality">
          <b-input v-model="profile.payload.nationality" placeholder="Germany" />
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
      profile: {
        id: "",
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
      this.$store.dispatch("upsertProfile", this.profile);
    }
  }
};
</script>

