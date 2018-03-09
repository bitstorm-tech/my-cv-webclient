<template>
  <v-container>
    <v-layout column align-center justify-center fill-height>
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
      <v-snackbar v-model="snackbar" color="red" :timeout="0" top>
        {{ snackbarText }}
        <v-btn flat icon @click="snackbar = false">
          <v-icon>fa-times</v-icon>
        </v-btn>
      </v-snackbar>
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
      createAccount: false,
      snackbarText: "Hallo",
      snackbar: false
    };
  },
  methods: {
    login() {
      this.$router.push("/account");
    },
    async create() {
      try {
        await this.$axios.$put("/accounts", {
          email: this.email,
          password: this.password
        });
      } catch (error) {
        if (error.response.status === 403) {
          this.showSnackbar("Account already exists!");
        } else {
          this.showSnackbar(
            "We had some problems to create your account, please try again later."
          );
        }
        return;
      }
      this.createAccount = false;
    },
    canCreateAccount() {
      return this.canLogin() && this.password === this.repeatPassword;
    },
    canLogin() {
      return this.email.length > 0 && this.password.length > 0;
    },
    showSnackbar(text) {
      this.snackbarText = text;
      this.snackbar = true;
    }
  }
};
</script>
