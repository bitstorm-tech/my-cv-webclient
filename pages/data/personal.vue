<template>
  <v-container>
    <v-layout row justify-space-around>
      <v-flex xs5>
        <v-text-field label="Title" />
      </v-flex>
      <v-flex xs5>
        <v-text-field label="Academic Degree" />
      </v-flex>
    </v-layout>
    <v-layout row justify-space-around="">
      <v-flex xs5>
        <v-text-field label="First Name" />
      </v-flex>
      <v-flex xs5>
        <v-text-field label="Last Name" />
      </v-flex>
    </v-layout>
    <v-layout row justify-space-around>
      <v-flex xs5>
        <v-menu v-model="menu" lazy :close-on-content-click="false" full-width>
          <v-text-field label="Birthday" v-model="date" slot="activator" readonly />
          <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" />
        </v-menu>
      </v-flex>
      <v-flex xs5>
        <v-text-field label="Country" />
      </v-flex>
    </v-layout>
  </v-container>
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

