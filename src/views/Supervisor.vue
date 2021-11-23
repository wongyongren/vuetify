<template>
  <div data-app>
    <Header />
    <br />
    <v-container>
      <div class="supervisor">
        <h1>Supervisor Page</h1>
        
        <Worker />
        <DateTimeIn />
        <DateTimeOut />
        <br />
        <v-btn
          class="button submitButton"
          @click="submit"
          color="cust-secondary"
          >Submit</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import DateTimeIn from "@/components/DateTimeIn.vue";
import DateTimeOut from "@/components/DateTimeOut.vue";
import Worker from "@/components/Worker.vue";
import Header from "../components/header.vue";

export default {
  name: "Supervisor",
  components: {
    DateTimeIn,
    DateTimeOut,
    Worker,
    Header,
  },
  methods: {
    submit: function () {
      location.href = "/report";
    },
  },
};
</script>

<style>
/* .container {
  text-align: center;
  padding: 50px;
  
} */
.supervisor {
  border: 3px solid #ddd;
  padding: 10px;
  font-size: 20px;
  text-align: center;
}
.button {
  background-color: grey; /* Green */
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.submitButton {
  border-radius: 4px;
}
</style>
