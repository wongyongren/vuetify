<template>
    <v-app-bar dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="sidebar = !sidebar"
      ></v-app-bar-nav-icon>
      <v-navigation-drawer
        class="hidden-md-and-up"
        v-model="sidebar"
        absolute
        temporary
        app
      >
        <v-list>
          <v-list-item
            v-for="(item, i) in menuItems"
            exact
            :key="i"
            :to="item.path"
            >{{ item.title }}</v-list-item
          >
        </v-list>
      </v-navigation-drawer>
      <v-toolbar-title style="text-align:right">{{ username }}</v-toolbar-title>
      

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

</template>

<script>
export default {
  data: function () {
    return {
      sidebar: null,
      username: "wongyongren",
      menuItems: [
        { path: "/supervisor", name: "supervisor", title: "Supervisor" },
        { path: "/report", name: "report", title: "Report" },
        { path: "/login", name: "sign out", title: "Sign Out" },
      ],
    };
  },
};
</script>

<style>
</style> 