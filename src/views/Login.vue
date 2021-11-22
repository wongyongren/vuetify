<template>
    <v-form v-model="valid" > 
      <v-container>
        <v-row>
          <v-col cols="12" sm="10" md="8" lg="6">
            <v-text-field
              v-model="username"
              :rules="nameRules"
              label="User name"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="10" md="8" lg="6">
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 6 characters"
              counter
              @click:append="show1 = !show1"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-row>
      <v-btn class="loginButton" type="button" v-on:click="login()">Login</v-btn>
      </v-row>
    </v-form>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login: function () {
      location.href = "/";
    },
  },
  data: () => ({
    show1: false,
    valid: false,
    username: "",
    nameRules: [
      (v) => !!v || "User Name is required",
      //(v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      //(v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>

<style scoped>
#login {
  text-align: center;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: 10px;
  margin-top: 200px;
  padding: 20px;
}
.row {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin: -12px;
    justify-content: space-between;
    flex-direction: column;
    align-content: space-around;
}

/* .loginButton:hover {background-color: white;} */ 
</style>