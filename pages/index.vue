<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-card width="500px">
        <v-toolbar>
          <v-toolbar-title v-if="!createAccount">Login</v-toolbar-title>
          <v-toolbar-title v-if="createAccount">Create Account</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field type="email" label="E-Mail" v-model="email" />
          <v-text-field type="password" label="Password" v-model="password" />
          <v-text-field v-if="createAccount" type="password" label="Repeat Password" v-model="repeatPassword" />
        </v-card-text>
        <v-btn v-if="!createAccount" @click="login" :disabled="!canLogin()">Login</v-btn>
        <v-btn v-if="!createAccount" @click="createAccount = true">New Account</v-btn>
        <v-btn v-if="createAccount" @click="create" :disabled="!canCreateAccount()">Create</v-btn>
        <v-btn v-if="createAccount" @click="createAccount = false">Cancel</v-btn>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      createAccount: false
    };
  },
  methods: {
    login() {
      this.$router.push("/account");
    },
    async create() {
      console.log("Createing account ...");
      await this.$axios.$put("/users", {
        email: this.email,
        password: this.password
      });
    },
    canCreateAccount() {
      return this.canLogin() && this.password === this.repeatPassword;
    },
    canLogin() {
      return this.email.length > 0 && this.password.length > 0;
    }
  }
};
</script>
