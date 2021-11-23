<template>
<div>
  <Header />
  <v-container class="container" style="text-align:center;padding:50px">
  <h1>Report Page</h1>
  <v-container><h2>Date : {{ date.getUTCDate() + "-" +date.getUTCMonth() + "-" +date.getUTCFullYear() }}</h2></v-container>
  <ReportList />
  </v-container>
  
</div>
</template>

<script>
import Header from "../components/header.vue";
import ReportList from "../components/ReportList.vue";

export default {
  name: "Report",
  components: {
    Header,
    ReportList
  },
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<style>
</style>