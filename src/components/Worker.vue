<template>
    <v-row align="center">
      <v-col cols="12" sm="6">
        <v-subheader v-text="'Project Site Name'"></v-subheader>
      </v-col>
      <v-col cols="12" sm="6">
        <v-select
          v-model="select"
          :items="selectOption"
          :menu-props="{ maxHeight: '400' }"
          label="Select"
          hint="Select Project Site"
          persistent-hint
        ></v-select>
      </v-col>

      <v-col cols="12" sm="6">
        <v-subheader v-text="'Select Worker'"></v-subheader>
      </v-col>

      <v-col cols="12" sm="6">
        <v-select
          v-model="multiValue"
          :items="items"
          label="Select"
          multiple
          chips
          hint="Select Atleast 1 Worker"
          persistent-hint
        ></v-select>
      </v-col>
    </v-row>
</template>

<script>
export default {
  data() {
    return {
      multiValue: null,
      select: null,
      items: [
        "wong",
        "phone",
        "Zion",
        "Luca",
        "Ezra",
        "Alex",
        "Remi",
        "Jude",
        "River",
      ],
      selectOption: ["Suzhou", "8 Tier", "Apollo", "Panda"],
    };
  },
};
</script>
