<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <b-field label="Title">
          <b-input />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Academic Title">
          <b-input />
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="First Name">
          <b-input />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Last Name">
          <b-input />
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Birthday">
          <b-datepicker placeholder="Click to select..." icon-pack="fa" icon="calendar-alt" />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Nationality">
          <b-input />
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      date: null,
      menu: false
    };
  }
};
</script>

