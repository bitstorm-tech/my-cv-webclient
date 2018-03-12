<template>
  <div class="columns is-centered">
    <div class="column is-3">
      <div class="card">
        <header v-if="!createAccount" class="card-header">
          <p class="card-header-icon fa fa-sign-in-alt"></p>
          <p class="card-header-title">Login</p>
        </header>
        <header v-if="createAccount" class="card-header">
          <p class="card-header-icon fa fa-edit"></p>
          <p class="card-header-title">Create Account</p>
        </header>
        <div class="card-content">
          <div class="content">
            <b-field label="E-Mail">
              <b-input type="email" v-model="email" />
            </b-field>
            <b-field label="Password">
              <b-input type="password" v-model="password" />
            </b-field>
            <b-field v-if="createAccount" label="Repeat Password">
              <b-input type="password" v-model="repeatPassword" />
            </b-field>
          </div>
        </div>
        <footer v-if="!createAccount" class="card-footer">
          <nuxt-link to="/profile" class="card-footer-item">Login</nuxt-link>
          <a class="card-footer-item" @click="createAccount = true">Create Account</a>
        </footer>
        <footer v-if="createAccount" class="card-footer">
          <a disabled class="card-footer-item">Create</a>
          <a class="card-footer-item" @click="createAccount = false">Cancel</a>
        </footer>
      </div>
    </div>
  </div>
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
