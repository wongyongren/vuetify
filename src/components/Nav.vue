<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item class="px-2">

        <v-list-item-title>{{email}}</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title><a v-bind:href = "item.title">{{ item.title }}</a></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  <!-- <ul class="ulNav" style="text-align: left">
    <li class="liNav"><a href="/">Main Page </a></li>
    <li class="liNav"><a href="/login">Login Page </a></li>
    <li class="liNav"><a href="/report">Report Page </a></li>
    <div class="email" >
      {{ email }}
      <v-btn @click="logOut">sign out</v-btn>
    </div>
  </ul> -->
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    email: "wongyongren@alric.com",
        items: [
          { title: 'Supervisor', icon: 'mdi-home-city' },
          { title: 'Report', icon: 'mdi-account' },
          { title: 'Login', icon: 'mdi-account-group-outline' },
        ],
        mini: false,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
    methods: {
      logOut: function () {
        location.href = "/login";
      },
    },
  },
};
</script>

<style>
.ulNav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  top: 0;
  width: 100%;
}

.liNav {
  float: left;
}

.liNav a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
.liNav a:hover {
  background-color: #111;
}
.email {
  text-align: right;
  color: white;
  padding: 14px 16px;
}
</style>