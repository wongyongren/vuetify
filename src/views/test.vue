<template>
  <v-card>
    <v-card-title>
      Report List
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="list"
      :search="search"
    ></v-data-table>
    <v-btn class="button printButton" v-print>Print the entire page</v-btn>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Time In',
            align: 'start',
            value: 'time',
          },
          { text: 'Project Site', value: 'site' },
          { text: 'Worker Name', value: 'worker' },
        ],
        list: [
          {
            time: '10:05:15 AM',
            site: "Suzhou",
            worker: "Wong",
          },
                    {
            time: '10:06:15 AM',
            site: "HQ",
            worker: "Phone",
          },
                    {
            time: '10:07:15 AM',
            site: "8 Tier",
            worker: "Zion",
          },
                    {
            time: '10:08:15 AM',
            site: "Suzhou",
            worker: "Wong",
          },
                    {
            time: '11:05:15 AM',
            site: "Suzhou",
            worker: "Wong",
          },
                    {
            time: '12:05:15 PM',
            site: "Suzhou",
            worker: "Wong",
          },
                    {
            time: '09:05:15 AM',
            site: "Suzhou",
            worker: "Wong",
          },
                    {
            time: '10:30:15 AM',
            site: "Suzhou",
            worker: "Wong",
          },
        ],
      }
    },
  }
</script>