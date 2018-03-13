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
              <b-input type="email" v-model="email" @keyup.native.enter="createAccount ? create() : login()" />
            </b-field>
            <b-field label="Password">
              <b-input type="password" v-model="password" @keyup.native.enter="createAccount ? create() : login()" />
            </b-field>
            <b-field v-if="createAccount" label="Confirm Password">
              <b-input type="password" v-model="confirmPassword" @keyup.native.enter="create" />
            </b-field>
          </div>
        </div>
        <footer v-if="!createAccount" class="card-footer">
          <a class="card-footer-item" @click="login">Login</a>
          <a class="card-footer-item" @click="createAccount = true">Create Account</a>
        </footer>
        <footer v-if="createAccount" class="card-footer">
          <a class="card-footer-item" @click="create">Create</a>
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
      confirmPassword: "",
      createAccount: false,
      snackbarText: "Hallo",
      snackbar: false
    };
  },
  methods: {
    login() {
      if (this.canLogin()) {
        this.$router.push("/profile");
      } else {
        this.showSnackbar("Please enter email and password.");
      }
    },
    async create() {
      if (this.canCreateAccount()) {
        try {
          await this.$axios.$put("/accounts", {
            email: this.email,
            password: this.password
          });
        } catch (error) {
          if (error.response.status === 403) {
            this.showSnackbar("Account already exists.");
          } else {
            this.showSnackbar(
              "We had some problems to create your account, please try again later."
            );
          }
          return;
        }
        this.createAccount = false;
      } else {
        if (this.password !== this.confirmPassword) {
          this.showSnackbar(
            "Your password and confirmed password does not match."
          );
        } else {
          this.showSnackbar("Your account credentials are incorrect.");
        }
      }
    },
    canCreateAccount() {
      return this.canLogin() && this.password === this.confirmPassword;
    },
    canLogin() {
      return this.email.length > 0 && this.password.length > 0;
    },
    showSnackbar(message) {
      this.$snackbar.open({
        message,
        type: "is-warning",
        queue: false,
        position: "is-bottom",
        duration: 5000
      });
    }
  }
};
</script>
