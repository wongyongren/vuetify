<template>

  <div>
    <Header />
    <v-col style="text-align: center;">
      <v-container>
        <h1>Report Page</h1>
        <v-col
          ><h2>
            Date :
            {{
              date.getUTCDate() +
              "-" +
              date.getUTCMonth() +
              "-" +
              date.getUTCFullYear()
            }}
          </h2></v-col
        ></v-container
      >
      <ReportList />
    </v-col>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import ReportList from "../components/ReportList.vue";

export default {
  name: "Report",
  components: {
    Header,
    ReportList,
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